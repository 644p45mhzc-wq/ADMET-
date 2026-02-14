#!/usr/bin/env python3
"""
Generate 2D SVG structures for all molecules in data.json
"""

import json
from rdkit import Chem
from rdkit.Chem import Draw

def generate_svg_data():
    # Read the data.json file
    with open('data.json', 'r') as f:
        molecules = json.load(f)

    svg_map = {}

    print(f"Generating 2D SVG for {len(molecules)} molecules...")

    for i, mol_data in enumerate(molecules):
        smiles = mol_data['SMILES']

        try:
            # Create molecule from SMILES
            mol = Chem.MolFromSmiles(smiles)

            if mol is None:
                print(f"Warning: Could not parse SMILES: {smiles}")
                continue

            # Generate 2D coordinates
            from rdkit.Chem import AllChem
            AllChem.Compute2DCoords(mol)

            # Generate SVG
            drawer = Draw.MolDraw2DSVG(300, 300)
            drawer.DrawMolecule(mol)
            drawer.FinishDrawing()
            svg = drawer.GetDrawingText()

            # Store in map
            svg_map[smiles] = svg

            if (i + 1) % 10 == 0:
                print(f"Processed {i + 1}/{len(molecules)} molecules")

        except Exception as e:
            print(f"Error processing SMILES {smiles}: {e}")
            continue

    print(f"\nSuccessfully generated {len(svg_map)} SVG structures")

    # Write to JavaScript file
    with open('svg_data.js', 'w') as f:
        f.write('// Auto-generated 2D SVG data for molecules\n')
        f.write('const svgDataMap = {\n')

        for i, (smiles, svg) in enumerate(svg_map.items()):
            # Escape the strings for JavaScript
            smiles_escaped = smiles.replace('\\', '\\\\').replace('"', '\\"')
            svg_escaped = svg.replace('\\', '\\\\').replace('"', '\\"').replace('\n', ' ')

            comma = ',' if i < len(svg_map) - 1 else ''
            f.write(f'  "{smiles_escaped}": "{svg_escaped}"{comma}\n')

        f.write('};\n')

    print(f"Wrote svg_data.js with {len(svg_map)} entries")

if __name__ == '__main__':
    generate_svg_data()
