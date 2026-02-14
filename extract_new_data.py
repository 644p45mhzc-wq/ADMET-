#!/usr/bin/env python3
"""
Extract required fields from data_round9_14.json and append to data.json
"""

import json

# Read the new data
with open('data_round9_14.json', 'r') as f:
    new_data = json.load(f)

# Read existing data
with open('data.json', 'r') as f:
    existing_data = json.load(f)

# Extract required fields and convert Round format
extracted_data = []
for item in new_data:
    # Convert "Round9" to "round9", "Final" to "final"
    round_name = item['Round'].lower()

    extracted_item = {
        "Round": round_name,
        "SMILES": item['SMILES'],
        "logP": item['logP'],
        "QED": item['QED'],
        "PPBR_AZ": item['PPBR_AZ'],
        "DILI": item['DILI'],
        "Caco2_Wang": item['Caco2_Wang']
    }
    extracted_data.append(extracted_item)

# Append to existing data
combined_data = existing_data + extracted_data

# Save combined data
with open('data.json', 'w') as f:
    json.dump(combined_data, f, indent=2)

print(f"✓ Extracted {len(extracted_data)} new molecules")
print(f"✓ Total molecules: {len(combined_data)}")

# Print round summary
rounds = {}
for item in combined_data:
    round_name = item['Round']
    rounds[round_name] = rounds.get(round_name, 0) + 1

print("\nRound summary:")
for round_name in sorted(rounds.keys()):
    print(f"  {round_name}: {rounds[round_name]} molecules")
