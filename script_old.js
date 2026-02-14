const moleculeData = [
  {
    "Round": "initial",
    "SMILES": "O=C(Cc1ccccc1)N[C@@H]1C(=O)N2CCS[C@H]12",
    "logP": 0.6289999999999998,
    "QED": 0.8128632876531363,
    "PPBR_AZ": 54.24604185480839,
    "DILI": 0.3749175548553467,
    "Caco2_Wang": -4.955079921199673
  },
  {
    "Round": "round1",
    "SMILES": "O=C(Cc1ccc(O)cc1)N[C@@H]1C(=O)N2CCS[C@H]12",
    "logP": 0.3345999999999998,
    "QED": 0.7820787238617547,
    "PPBR_AZ": 57.36957180430461,
    "DILI": 0.2432408466935158,
    "Caco2_Wang": -5.381883135345489
  },
  {
    "Round": "round1",
    "SMILES": "O=C(Cc1ccc(O)c(O)c1)N[C@@H]1C(=O)N2CCS[C@H]12",
    "logP": 0.04019999999999979,
    "QED": 0.5408419818360911,
    "PPBR_AZ": 53.43521598091117,
    "DILI": 0.3390957653522492,
    "Caco2_Wang": -5.803479851584786
  },
  {
    "Round": "round1",
    "SMILES": "O=C(Cc1ccccc1)N[C@@H]1C(=O)N2CC(O)S[C@H]12",
    "logP": -0.05260000000000009,
    "QED": 0.7605401780580932,
    "PPBR_AZ": 44.70962472555159,
    "DILI": 0.3774431169033051,
    "Caco2_Wang": -5.395336273542727
  },
  {
    "Round": "round1",
    "SMILES": "CC(=O)Oc1ccc(CC(=O)N[C@@H]2C(=O)N3CCS[C@H]23)cc1",
    "logP": 0.5543,
    "QED": 0.4981674077357451,
    "PPBR_AZ": 63.19255835214447,
    "DILI": 0.6304802536964417,
    "Caco2_Wang": -5.018790149018905
  },
  {
    "Round": "round1",
    "SMILES": "O=C(Cc1ccc(O)cc1O)N[C@@H]1C(=O)N2CCS[C@H]12",
    "logP": 0.04019999999999979,
    "QED": 0.6849332258558861,
    "PPBR_AZ": 56.47726165380327,
    "DILI": 0.2748540699481964,
    "Caco2_Wang": -5.688004553339274
  },
  {
    "Round": "round2",
    "SMILES": "O=C(Cc1ccc(O)cc1O)N[C@@H]1C(=O)N2CC(O)S[C@H]12",
    "logP": -0.6414000000000002,
    "QED": 0.5528254654381383,
    "PPBR_AZ": 45.59811657153517,
    "DILI": 0.2816890150308609,
    "Caco2_Wang": -6.182996746768582
  },
  {
    "Round": "round2",
    "SMILES": "CC(=O)N[C@@H]1C(=O)N2CCS[C@H]12",
    "logP": -0.5937999999999999,
    "QED": 0.5566101460940984,
    "PPBR_AZ": 25.28963887305757,
    "DILI": 0.400434148311615,
    "Caco2_Wang": -4.975956800936641
  },
  {
    "Round": "round2",
    "SMILES": "O=C(Cc1ccc(O)cc1)N[C@@H]1C(=O)N2CC(O)S[C@H]12",
    "logP": -0.3470000000000004,
    "QED": 0.6632584517702799,
    "PPBR_AZ": 46.62940201437439,
    "DILI": 0.2406358480453491,
    "Caco2_Wang": -5.887316593790581
  },
  {
    "Round": "round2",
    "SMILES": "COc1ccc(CC(=O)N[C@@H]2C(=O)N3CCS[C@H]23)cc1",
    "logP": 0.6376,
    "QED": 0.8274130667656101,
    "PPBR_AZ": 63.02656010898416,
    "DILI": 0.4145452708005905,
    "Caco2_Wang": -4.891428754618867
  },
  {
    "Round": "round2",
    "SMILES": "O=C(Cc1ccc(O)cc1)N[C@@H]1C(O)N2CCS[C@H]12",
    "logP": 0.1264,
    "QED": 0.7336704228199762,
    "PPBR_AZ": 47.01638441072625,
    "DILI": 0.1010328218340874,
    "Caco2_Wang": -5.600283281510357
  },
  {
    "Round": "round3",
    "SMILES": "O=C(Cc1ccc(O)cc1)N[C@@H]1C(=O)N2CCO[C@H]12",
    "logP": -0.3820000000000003,
    "QED": 0.7276851706674669,
    "PPBR_AZ": 55.28140606214597,
    "DILI": 0.238898915052414,
    "Caco2_Wang": -5.401367418748757
  },
  {
    "Round": "round3",
    "SMILES": "O=C(Cc1ccc(O)cc1)N[C@@H]1C(=O)N2CC(O)C(O)[C@H]12",
    "logP": -1.634299999999999,
    "QED": 0.4998250695336156,
    "PPBR_AZ": 38.39139504334854,
    "DILI": 0.130049729347229,
    "Caco2_Wang": -6.141011509036161
  },
  {
    "Round": "round3",
    "SMILES": "CC(=O)Oc1ccc(CC(=O)N[C@@H]2C(=O)N3CCO[C@H]23)cc1",
    "logP": -0.1622999999999997,
    "QED": 0.4744377445572192,
    "PPBR_AZ": 56.04714386872968,
    "DILI": 0.6629807472229003,
    "Caco2_Wang": -4.936728824516685
  },
  {
    "Round": "round3",
    "SMILES": "O=C(Cc1ccc(OC)cc1)N[C@@H]1C(=O)N2CC(O)S[C@H]12",
    "logP": -0.04400000000000015,
    "QED": 0.7629880078206704,
    "PPBR_AZ": 53.79822522197636,
    "DILI": 0.4356419801712036,
    "Caco2_Wang": -5.233824725192778
  },
  {
    "Round": "round3",
    "SMILES": "O=C(Cc1ccc(O)cc1CC(=O)O)N[C@@H]1C(=O)N2CCS[C@H]12",
    "logP": -0.0383,
    "QED": 0.6516167387987262,
    "PPBR_AZ": 63.08013978517738,
    "DILI": 0.374466148018837,
    "Caco2_Wang": -6.297467918402515
  },
  {
    "Round": "round4",
    "SMILES": "O=C(Cc1ccc(O)cc1)N[C@@H]1C(=O)N2CC(O)C(=O)[C@H]12",
    "logP": -1.4261,
    "QED": 0.591934038416264,
    "PPBR_AZ": 49.50592579566671,
    "DILI": 0.2727003157138824,
    "Caco2_Wang": -6.096150859566349
  },
  {
    "Round": "round4",
    "SMILES": "O=C(Cc1ccc(OC(=O)C)cc1)N[C@@H]1C(=O)N2CCS[C@H]12",
    "logP": 0.5542999999999996,
    "QED": 0.4981674077357451,
    "PPBR_AZ": 63.19255797741899,
    "DILI": 0.6304802656173706,
    "Caco2_Wang": -5.018790153601397
  },
  {
    "Round": "round4",
    "SMILES": "O=C(Cc1ccc(O)cc1)N[C@@H]1C(=O)N2CCSC(=O)[C@H]12",
    "logP": -0.0963000000000005,
    "QED": 0.7618968084629887,
    "PPBR_AZ": 63.76785703219305,
    "DILI": 0.3895731240510941,
    "Caco2_Wang": -5.594247913787376
  },
  {
    "Round": "round4",
    "SMILES": "CC(O)c1ccc(CC(=O)N[C@@H]2C(=O)N3CCS[C@H]23)cc1",
    "logP": 0.6822999999999995,
    "QED": 0.8028591333858038,
    "PPBR_AZ": 43.26633388843469,
    "DILI": 0.2414540320634842,
    "Caco2_Wang": -5.369937727942412
  },
  {
    "Round": "round4",
    "SMILES": "O=C(Cc1ccc(OC)cc1)N[C@@H]1C(=O)N2CCO[C@H]12",
    "logP": -0.07900000000000018,
    "QED": 0.7811694545212872,
    "PPBR_AZ": 60.48721452323888,
    "DILI": 0.409476563334465,
    "Caco2_Wang": -4.739638483341322
  },
  {
    "Round": "round5",
    "SMILES": "O=C(Cc1ccc(OC)cc1)N[C@@H]1C(=O)N2CC(O)SC(=O)[C@H]12",
    "logP": -0.4749000000000005,
    "QED": 0.7215971585548052,
    "PPBR_AZ": 57.30322200825906,
    "DILI": 0.6275149822235108,
    "Caco2_Wang": -5.478025872421004
  },
  {
    "Round": "round5",
    "SMILES": "O=C(Cc1ccc(OC)cc1)N[C@@H]1C(=O)N2CC(O)OC(=O)[C@H]12",
    "logP": -1.191499999999999,
    "QED": 0.533721452531399,
    "PPBR_AZ": 51.26465070374392,
    "DILI": 0.7035867929458618,
    "Caco2_Wang": -5.361212572331103
  },
  {
    "Round": "round5",
    "SMILES": "O=C(Cc1ccc(F)cc1)N[C@@H]1C(=O)N2CCSC(=O)[C@H]12",
    "logP": 0.3372,
    "QED": 0.8177560944014041,
    "PPBR_AZ": 62.61679852750696,
    "DILI": 0.6674233913421631,
    "Caco2_Wang": -4.982532154650151
  },
  {
    "Round": "round5",
    "SMILES": "CC(O)C(=O)N[C@@H]1C(=O)N2CCS[C@H]12",
    "logP": -1.232899999999999,
    "QED": 0.5669046783452945,
    "PPBR_AZ": 25.10629673488912,
    "DILI": 0.3559289246797562,
    "Caco2_Wang": -5.423685053209281
  },
  {
    "Round": "round5",
    "SMILES": "O=C(Cc1ccc(O)cc1)N[C@@H]1C(=O)N2CC(OC)SC(=O)[C@H]12",
    "logP": -0.1238000000000006,
    "QED": 0.7442281155078514,
    "PPBR_AZ": 62.78691282428249,
    "DILI": 0.4431518852710724,
    "Caco2_Wang": -5.732890550982614
  },
  {
    "Round": "round6",
    "SMILES": "O=C(Cc1ccc(OC)cc1)N[C@@H]1C(=O)N2CC(F)SC(=O)[C@H]12",
    "logP": 0.5022999999999997,
    "QED": 0.8095000987786141,
    "PPBR_AZ": 67.14661877951964,
    "DILI": 0.7149712681770325,
    "Caco2_Wang": -5.05940332836494
  },
  {
    "Round": "round6",
    "SMILES": "O=C(Cc1ccc(O)cc1)N[C@@H]1C(=O)N2CC(N)SC(=O)[C@H]12",
    "logP": -0.8114999999999999,
    "QED": 0.6276416862303954,
    "PPBR_AZ": 51.67069867886194,
    "DILI": 0.247891703248024,
    "Caco2_Wang": -6.03444419696025
  },
  {
    "Round": "round6",
    "SMILES": "COc1ccc(CC(=O)N[C@@H]2C(=O)N3CCS(=O)(=O)[C@H]23)cc1",
    "logP": -0.6807999999999981,
    "QED": 0.7408712133135272,
    "PPBR_AZ": 62.12188252580927,
    "DILI": 0.6005198657512665,
    "Caco2_Wang": -5.117063112334693
  },
  {
    "Round": "round6",
    "SMILES": "O=C(Cc1cc(OC)c(OC)c(OC)c1)N[C@@H]1C(=O)N2CCS[C@H]12",
    "logP": 0.6547999999999998,
    "QED": 0.7579985726265691,
    "PPBR_AZ": 58.07016814634267,
    "DILI": 0.6844986915588379,
    "Caco2_Wang": -5.007084897259928
  },
  {
    "Round": "round6",
    "SMILES": "O=C(Cc1ccc(N)cc1)N[C@@H]1C(=O)N2CCSC(=O)[C@H]12",
    "logP": -0.2196999999999991,
    "QED": 0.5948310135594347,
    "PPBR_AZ": 50.39527168042444,
    "DILI": 0.5967273890972138,
    "Caco2_Wang": -5.615371518884201
  },
  {
    "Round": "round7",
    "SMILES": "CC(O)C(=O)N[C@@H]1C(O)N2CCS[C@H]12",
    "logP": -1.441099999999999,
    "QED": 0.5292053918491477,
    "PPBR_AZ": 26.40937702031855,
    "DILI": 0.1837548986077309,
    "Caco2_Wang": -5.506733241531109
  },
  {
    "Round": "round7",
    "SMILES": "CC(O)NC(=O)[C@@H]1C(=O)N2CCS[C@H]12",
    "logP": -1.0278,
    "QED": 0.3517478637187854,
    "PPBR_AZ": 20.48171060404043,
    "DILI": 0.4033294260501862,
    "Caco2_Wang": -5.372115892102726
  },
  {
    "Round": "round7",
    "SMILES": "O=C(NCc1ccc(O)cc1)[C@@H]1C(=O)N2CCS[C@H]12",
    "logP": 0.5396999999999996,
    "QED": 0.6252489326309405,
    "PPBR_AZ": 58.61751283142078,
    "DILI": 0.2982030302286148,
    "Caco2_Wang": -5.198045802707683
  },
  {
    "Round": "round7",
    "SMILES": "O=C(Cc1ccc(O)cc1)N[C@@H]1C(=O)N2CC(O)C(=O)N[C@H]12",
    "logP": -1.921499999999999,
    "QED": 0.4853867606613737,
    "PPBR_AZ": 46.64112817930756,
    "DILI": 0.2723221957683563,
    "Caco2_Wang": -6.119581246815088
  },
  {
    "Round": "round7",
    "SMILES": "COc1ccc(CC(N)=O)cc1",
    "logP": 0.723,
    "QED": 0.71715396588548,
    "PPBR_AZ": 48.95890750867015,
    "DILI": 0.09967872630804778,
    "Caco2_Wang": -4.317914510950541
  },
  {
    "Round": "round8",
    "SMILES": "O=C(NCc1ccc(O)cc1)[C@@H]1C(=O)N2CC(O)S[C@H]12",
    "logP": -0.1419000000000005,
    "QED": 0.5330730482806125,
    "PPBR_AZ": 47.53142202404791,
    "DILI": 0.2955376118421554,
    "Caco2_Wang": -5.716892730320675
  },
  {
    "Round": "round8",
    "SMILES": "CC(O)NC(=O)[C@@H]1C(=O)N2CC(O)S[C@H]12",
    "logP": -1.709399999999999,
    "QED": 0.299556889474539,
    "PPBR_AZ": 19.32398959672923,
    "DILI": 0.4074901103973388,
    "Caco2_Wang": -5.716025074208595
  },
  {
    "Round": "round8",
    "SMILES": "O=C(Cc1ccc(OC)cc1)N[C@@H]1C(=O)N2CC(OC(=O)C)S[C@H]12",
    "logP": 0.5267999999999997,
    "QED": 0.6158330508387013,
    "PPBR_AZ": 66.1101281164413,
    "DILI": 0.6613326787948608,
    "Caco2_Wang": -5.216707343990112
  },
  {
    "Round": "round8",
    "SMILES": "CC(O)C(=O)N[C@@H]1C(=O)N2CC(SC(=O)C)[C@H]12",
    "logP": -1.275299999999999,
    "QED": 0.6160653432275515,
    "PPBR_AZ": 22.79546983007962,
    "DILI": 0.2884665161371231,
    "Caco2_Wang": -5.865386628633475
  },
  {
    "Round": "round8",
    "SMILES": "O=C(NCc1ccc(O)cc1)[C@@H]1C(=O)N2CCSC(=O)[C@H]12",
    "logP": 0.1087999999999996,
    "QED": 0.6112320625675438,
    "PPBR_AZ": 60.48931690154173,
    "DILI": 0.4370410680770874,
    "Caco2_Wang": -5.550257823439563
  },
  {
    "Round": "result",
    "SMILES": "O=C(NCc1ccc(O)cc1)[C@@H]1C(=O)N2CCSC(=O)[C@H]12",
    "logP": 0.1087999999999996,
    "QED": 0.6112320625675438,
    "PPBR_AZ": 60.48931690154173,
    "DILI": 0.4370410680770874,
    "Caco2_Wang": -5.550257823439563
  }
];

let roundOrder = ['initial', 'round1', 'round2', 'round3', 'round4', 'round5', 'round6', 'round7', 'round8', 'result'];

function loadData() {
    processAndRender();
}

function processAndRender() {
    const groupedData = groupByRound(moleculeData);
    displayMoleculeCount(moleculeData.length);
    renderRounds(groupedData);
    initializeViewers();
}

function groupByRound(data) {
    const grouped = {};
    data.forEach(item => {
        const round = item.Round;
        if (!grouped[round]) {
            grouped[round] = [];
        }
        grouped[round].push(item);
    });
    return grouped;
}

function displayMoleculeCount(count) {
    document.getElementById('molecule-count').textContent = `Total Molecules: ${count}`;
}

function renderRounds(groupedData) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    roundOrder.forEach((round, index) => {
        if (groupedData[round]) {
            const section = createRoundSection(round, groupedData[round], index);
            content.appendChild(section);

            if (index < roundOrder.length - 1 && groupedData[roundOrder[index + 1]]) {
                const divider = document.createElement('div');
                divider.className = 'round-divider';
                content.appendChild(divider);
            }
        }
    });
}

function createRoundSection(roundName, molecules, index) {
    const section = document.createElement('section');
    section.className = 'round-section';
    section.style.animationDelay = `${index * 0.1}s`;

    const title = document.createElement('h2');
    title.className = 'round-title';
    title.textContent = roundName === 'initial' ? 'Initial' : roundName === 'result' ? 'Result' : `Round ${roundName.replace('round', '')}`;
    section.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'molecule-grid';

    molecules.forEach((molecule, idx) => {
        const card = createMoleculeCard(molecule, `${roundName}-${idx}`);
        grid.appendChild(card);
    });

    section.appendChild(grid);
    return section;
}

function createMoleculeCard(molecule, id) {
    const card = document.createElement('div');
    card.className = 'molecule-card';

    const viewerContainer = document.createElement('div');
    viewerContainer.className = 'viewer-container';
    viewerContainer.id = `viewer-${id}`;
    viewerContainer.dataset.smiles = molecule.SMILES;
    card.appendChild(viewerContainer);

    const legend = document.createElement('div');
    legend.className = 'element-legend';
    legend.innerHTML = `
        <div><span>Carbon</span> → gray</div>
        <div><span>Oxygen</span> → red</div>
        <div><span>Nitrogen</span> → blue</div>
        <div><span>Sulfur</span> → yellow</div>
        <div><span>Fluorine</span> → green</div>
    `;
    card.appendChild(legend);

    const table = document.createElement('table');
    table.className = 'metrics-table';
    table.innerHTML = `
        <thead>
            <tr>
                <th>logP</th>
                <th>QED</th>
                <th>PPBR_AZ</th>
                <th>DILI</th>
                <th>Caco2</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${molecule.logP.toFixed(3)}</td>
                <td>${molecule.QED.toFixed(3)}</td>
                <td>${molecule.PPBR_AZ.toFixed(3)}</td>
                <td>${molecule.DILI.toFixed(3)}</td>
                <td>${molecule.Caco2_Wang.toFixed(3)}</td>
            </tr>
        </tbody>
    `;
    card.appendChild(table);

    return card;
}

function initializeViewers() {
    const viewers = document.querySelectorAll('.viewer-container');

    viewers.forEach(container => {
        const smiles = container.dataset.smiles;
        const viewerId = container.id;

        try {
            const viewer = $3Dmol.createViewer(container, {
                backgroundColor: 'white'
            });

            const encodedSmiles = encodeURIComponent(smiles);
            const url = `https://cactus.nci.nih.gov/chemical/structure/${encodedSmiles}/sdf`;

            fetch(url)
                .then(response => {
                    if (!response.ok) throw new Error('Failed to fetch structure');
                    return response.text();
                })
                .then(sdf => {
                    viewer.addModel(sdf, 'sdf');
                    viewer.setStyle({}, {
                        stick: {radius: 0.15},
                        sphere: {scale: 0.3}
                    });
                    viewer.zoomTo();
                    viewer.render();
                })
                .catch(error => {
                    console.error(`Error rendering molecule ${viewerId}:`, error);
                    container.innerHTML = '<p style="text-align: center; padding: 20px; color: #999;">Unable to render molecule</p>';
                });

        } catch (error) {
            console.error(`Error rendering molecule ${viewerId}:`, error);
            container.innerHTML = '<p style="text-align: center; padding: 20px; color: #999;">Unable to render molecule</p>';
        }
    });
}

document.addEventListener('DOMContentLoaded', loadData);
