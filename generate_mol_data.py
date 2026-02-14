#!/usr/bin/env python3
"""
Generate MOL format 3D structures for all molecules in data.json
"""

import json
from rdkit import Chem
from rdkit.Chem import AllChem

def generate_mol_block(smiles):
    """Generate MOL block with 3D coordinates from SMILES"""
    mol = Chem.MolFromSmiles(smiles)
    if mol is None:
        return None

    # Add hydrogens and generate 3D coordinates
    mol = Chem.AddHs(mol)
    AllChem.EmbedMolecule(mol, randomSeed=42)
    AllChem.MMFFOptimizeMolecule(mol)

    # Convert to mol block format
    mol_block = Chem.MolToMolBlock(mol)
    return mol_block

# Read data.json
with open('data.json', 'r') as f:
    molecules = json.load(f)

# Generate MOL data for each molecule
mol_data_dict = {}
for idx, mol in enumerate(molecules):
    smiles = mol['SMILES']
    print(f"Processing {idx+1}/{len(molecules)}: {smiles}")

    mol_block = generate_mol_block(smiles)
    if mol_block:
        mol_data_dict[smiles] = mol_block
    else:
        print(f"  ERROR: Failed to generate MOL block for {smiles}")

# Save to JavaScript file
js_content = "const molDataMap = {\n"
for smiles, mol_block in mol_data_dict.items():
    # Escape the SMILES and MOL block for JavaScript
    escaped_smiles = smiles.replace('\\', '\\\\').replace('"', '\\"')
    escaped_mol = mol_block.replace('`', '\\`').replace('${', '\\${')
    js_content += f'  "{escaped_smiles}": `{escaped_mol}`,\n'
js_content += "};\n"

with open('mol_data.js', 'w') as f:
    f.write(js_content)

print(f"\n✓ Generated MOL data for {len(mol_data_dict)} molecules")
print("✓ Saved to mol_data.js")
