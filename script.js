const moleculeData = [
  {"Round": "initial", "SMILES": "O=C(Cc1ccccc1)N[C@@H]1C(=O)N2CCS[C@H]12", "logP": 0.629, "QED": 0.813, "PPBR_AZ": 54.246, "DILI": 0.375, "Caco2_Wang": -4.955},
  {"Round": "round1", "SMILES": "O=C(Cc1ccc(O)cc1)N[C@@H]1C(=O)N2CCS[C@H]12", "logP": 0.335, "QED": 0.782, "PPBR_AZ": 57.370, "DILI": 0.243, "Caco2_Wang": -5.382},
  {"Round": "round1", "SMILES": "O=C(Cc1ccc(O)c(O)c1)N[C@@H]1C(=O)N2CCS[C@H]12", "logP": 0.040, "QED": 0.541, "PPBR_AZ": 53.435, "DILI": 0.339, "Caco2_Wang": -5.803},
  {"Round": "round1", "SMILES": "O=C(Cc1ccccc1)N[C@@H]1C(=O)N2CC(O)S[C@H]12", "logP": -0.053, "QED": 0.761, "PPBR_AZ": 44.710, "DILI": 0.377, "Caco2_Wang": -5.395},
  {"Round": "round1", "SMILES": "CC(=O)Oc1ccc(CC(=O)N[C@@H]2C(=O)N3CCS[C@H]23)cc1", "logP": 0.554, "QED": 0.498, "PPBR_AZ": 63.193, "DILI": 0.630, "Caco2_Wang": -5.019},
  {"Round": "round1", "SMILES": "O=C(Cc1ccc(O)cc1O)N[C@@H]1C(=O)N2CCS[C@H]12", "logP": 0.040, "QED": 0.685, "PPBR_AZ": 56.477, "DILI": 0.275, "Caco2_Wang": -5.688},
  {"Round": "round2", "SMILES": "O=C(Cc1ccc(O)cc1O)N[C@@H]1C(=O)N2CC(O)S[C@H]12", "logP": -0.641, "QED": 0.553, "PPBR_AZ": 45.598, "DILI": 0.282, "Caco2_Wang": -6.183},
  {"Round": "round2", "SMILES": "CC(=O)N[C@@H]1C(=O)N2CCS[C@H]12", "logP": -0.594, "QED": 0.557, "PPBR_AZ": 25.290, "DILI": 0.400, "Caco2_Wang": -4.976},
  {"Round": "round2", "SMILES": "O=C(Cc1ccc(O)cc1)N[C@@H]1C(=O)N2CC(O)S[C@H]12", "logP": -0.347, "QED": 0.663, "PPBR_AZ": 46.629, "DILI": 0.241, "Caco2_Wang": -5.887},
  {"Round": "round2", "SMILES": "COc1ccc(CC(=O)N[C@@H]2C(=O)N3CCS[C@H]23)cc1", "logP": 0.638, "QED": 0.827, "PPBR_AZ": 63.027, "DILI": 0.415, "Caco2_Wang": -4.891},
  {"Round": "round2", "SMILES": "O=C(Cc1ccc(O)cc1)N[C@@H]1C(O)N2CCS[C@H]12", "logP": 0.126, "QED": 0.734, "PPBR_AZ": 47.016, "DILI": 0.101, "Caco2_Wang": -5.600},
  {"Round": "round3", "SMILES": "O=C(Cc1ccc(O)cc1)N[C@@H]1C(=O)N2CCO[C@H]12", "logP": -0.382, "QED": 0.728, "PPBR_AZ": 55.281, "DILI": 0.239, "Caco2_Wang": -5.401},
  {"Round": "round3", "SMILES": "O=C(Cc1ccc(O)cc1)N[C@@H]1C(=O)N2CC(O)C(O)[C@H]12", "logP": -1.634, "QED": 0.500, "PPBR_AZ": 38.391, "DILI": 0.130, "Caco2_Wang": -6.141},
  {"Round": "round3", "SMILES": "CC(=O)Oc1ccc(CC(=O)N[C@@H]2C(=O)N3CCO[C@H]23)cc1", "logP": -0.162, "QED": 0.474, "PPBR_AZ": 56.047, "DILI": 0.663, "Caco2_Wang": -4.937},
  {"Round": "round3", "SMILES": "O=C(Cc1ccc(OC)cc1)N[C@@H]1C(=O)N2CC(O)S[C@H]12", "logP": -0.044, "QED": 0.763, "PPBR_AZ": 53.798, "DILI": 0.436, "Caco2_Wang": -5.234},
  {"Round": "round3", "SMILES": "O=C(Cc1ccc(O)cc1CC(=O)O)N[C@@H]1C(=O)N2CCS[C@H]12", "logP": -0.038, "QED": 0.652, "PPBR_AZ": 63.080, "DILI": 0.374, "Caco2_Wang": -6.297},
  {"Round": "round4", "SMILES": "O=C(Cc1ccc(O)cc1)N[C@@H]1C(=O)N2CC(O)C(=O)[C@H]12", "logP": -1.426, "QED": 0.592, "PPBR_AZ": 49.506, "DILI": 0.273, "Caco2_Wang": -6.096},
  {"Round": "round4", "SMILES": "O=C(Cc1ccc(OC(=O)C)cc1)N[C@@H]1C(=O)N2CCS[C@H]12", "logP": 0.554, "QED": 0.498, "PPBR_AZ": 63.193, "DILI": 0.630, "Caco2_Wang": -5.019},
  {"Round": "round4", "SMILES": "O=C(Cc1ccc(O)cc1)N[C@@H]1C(=O)N2CCSC(=O)[C@H]12", "logP": -0.096, "QED": 0.762, "PPBR_AZ": 63.768, "DILI": 0.390, "Caco2_Wang": -5.594},
  {"Round": "round4", "SMILES": "CC(O)c1ccc(CC(=O)N[C@@H]2C(=O)N3CCS[C@H]23)cc1", "logP": 0.682, "QED": 0.803, "PPBR_AZ": 43.266, "DILI": 0.241, "Caco2_Wang": -5.370},
  {"Round": "round4", "SMILES": "O=C(Cc1ccc(OC)cc1)N[C@@H]1C(=O)N2CCO[C@H]12", "logP": -0.079, "QED": 0.781, "PPBR_AZ": 60.487, "DILI": 0.409, "Caco2_Wang": -4.740},
  {"Round": "round5", "SMILES": "O=C(Cc1ccc(OC)cc1)N[C@@H]1C(=O)N2CC(O)SC(=O)[C@H]12", "logP": -0.475, "QED": 0.722, "PPBR_AZ": 57.303, "DILI": 0.628, "Caco2_Wang": -5.478},
  {"Round": "round5", "SMILES": "O=C(Cc1ccc(OC)cc1)N[C@@H]1C(=O)N2CC(O)OC(=O)[C@H]12", "logP": -1.191, "QED": 0.534, "PPBR_AZ": 51.265, "DILI": 0.704, "Caco2_Wang": -5.361},
  {"Round": "round5", "SMILES": "O=C(Cc1ccc(F)cc1)N[C@@H]1C(=O)N2CCSC(=O)[C@H]12", "logP": 0.337, "QED": 0.818, "PPBR_AZ": 62.617, "DILI": 0.667, "Caco2_Wang": -4.983},
  {"Round": "round5", "SMILES": "CC(O)C(=O)N[C@@H]1C(=O)N2CCS[C@H]12", "logP": -1.233, "QED": 0.567, "PPBR_AZ": 25.106, "DILI": 0.356, "Caco2_Wang": -5.424},
  {"Round": "round5", "SMILES": "O=C(Cc1ccc(O)cc1)N[C@@H]1C(=O)N2CC(OC)SC(=O)[C@H]12", "logP": -0.124, "QED": 0.744, "PPBR_AZ": 62.787, "DILI": 0.443, "Caco2_Wang": -5.733},
  {"Round": "round6", "SMILES": "O=C(Cc1ccc(OC)cc1)N[C@@H]1C(=O)N2CC(F)SC(=O)[C@H]12", "logP": 0.502, "QED": 0.810, "PPBR_AZ": 67.147, "DILI": 0.715, "Caco2_Wang": -5.059},
  {"Round": "round6", "SMILES": "O=C(Cc1ccc(O)cc1)N[C@@H]1C(=O)N2CC(N)SC(=O)[C@H]12", "logP": -0.811, "QED": 0.628, "PPBR_AZ": 51.671, "DILI": 0.248, "Caco2_Wang": -6.034},
  {"Round": "round6", "SMILES": "COc1ccc(CC(=O)N[C@@H]2C(=O)N3CCS(=O)(=O)[C@H]23)cc1", "logP": -0.681, "QED": 0.741, "PPBR_AZ": 62.122, "DILI": 0.601, "Caco2_Wang": -5.117},
  {"Round": "round6", "SMILES": "O=C(Cc1cc(OC)c(OC)c(OC)c1)N[C@@H]1C(=O)N2CCS[C@H]12", "logP": 0.655, "QED": 0.758, "PPBR_AZ": 58.070, "DILI": 0.684, "Caco2_Wang": -5.007},
  {"Round": "round6", "SMILES": "O=C(Cc1ccc(N)cc1)N[C@@H]1C(=O)N2CCSC(=O)[C@H]12", "logP": -0.220, "QED": 0.595, "PPBR_AZ": 50.395, "DILI": 0.597, "Caco2_Wang": -5.615},
  {"Round": "round7", "SMILES": "CC(O)C(=O)N[C@@H]1C(O)N2CCS[C@H]12", "logP": -1.441, "QED": 0.529, "PPBR_AZ": 26.409, "DILI": 0.184, "Caco2_Wang": -5.507},
  {"Round": "round7", "SMILES": "CC(O)NC(=O)[C@@H]1C(=O)N2CCS[C@H]12", "logP": -1.028, "QED": 0.352, "PPBR_AZ": 20.482, "DILI": 0.403, "Caco2_Wang": -5.372},
  {"Round": "round7", "SMILES": "O=C(NCc1ccc(O)cc1)[C@@H]1C(=O)N2CCS[C@H]12", "logP": 0.540, "QED": 0.625, "PPBR_AZ": 58.618, "DILI": 0.298, "Caco2_Wang": -5.198},
  {"Round": "round7", "SMILES": "O=C(Cc1ccc(O)cc1)N[C@@H]1C(=O)N2CC(O)C(=O)N[C@H]12", "logP": -1.921, "QED": 0.485, "PPBR_AZ": 46.641, "DILI": 0.272, "Caco2_Wang": -6.120},
  {"Round": "round7", "SMILES": "COc1ccc(CC(N)=O)cc1", "logP": 0.723, "QED": 0.717, "PPBR_AZ": 48.959, "DILI": 0.100, "Caco2_Wang": -4.318},
  {"Round": "round8", "SMILES": "O=C(NCc1ccc(O)cc1)[C@@H]1C(=O)N2CC(O)S[C@H]12", "logP": -0.142, "QED": 0.533, "PPBR_AZ": 47.531, "DILI": 0.296, "Caco2_Wang": -5.717},
  {"Round": "round8", "SMILES": "CC(O)NC(=O)[C@@H]1C(=O)N2CC(O)S[C@H]12", "logP": -1.709, "QED": 0.300, "PPBR_AZ": 19.324, "DILI": 0.407, "Caco2_Wang": -5.716},
  {"Round": "round8", "SMILES": "O=C(Cc1ccc(OC)cc1)N[C@@H]1C(=O)N2CC(OC(=O)C)S[C@H]12", "logP": 0.527, "QED": 0.616, "PPBR_AZ": 66.110, "DILI": 0.661, "Caco2_Wang": -5.217},
  {"Round": "round8", "SMILES": "CC(O)C(=O)N[C@@H]1C(=O)N2CC(SC(=O)C)[C@H]12", "logP": -1.275, "QED": 0.616, "PPBR_AZ": 22.795, "DILI": 0.288, "Caco2_Wang": -5.865},
  {"Round": "round8", "SMILES": "O=C(NCc1ccc(O)cc1)[C@@H]1C(=O)N2CCSC(=O)[C@H]12", "logP": 0.109, "QED": 0.611, "PPBR_AZ": 60.489, "DILI": 0.437, "Caco2_Wang": -5.550},
  {"Round": "round9", "SMILES": "O=C(NCc1ccc(O)cc1)[C@@H]1C(=O)N2CC(O)SC(=O)[C@H]12", "logP": -0.573, "QED": 0.508, "PPBR_AZ": 51.638, "DILI": 0.443, "Caco2_Wang": -5.920},
  {"Round": "round9", "SMILES": "O=C(NCc1ccc(O)c(O)c1)[C@@H]1C(=O)N2CCS[C@H]12", "logP": 0.245, "QED": 0.422, "PPBR_AZ": 52.828, "DILI": 0.375, "Caco2_Wang": -5.680},
  {"Round": "round9", "SMILES": "CC(O)NC(=O)[C@@H]1C(=O)N2CCSC(=O)[C@H]12", "logP": -1.459, "QED": 0.352, "PPBR_AZ": 24.559, "DILI": 0.557, "Caco2_Wang": -5.545},
  {"Round": "round9", "SMILES": "O=C(NCc1ccc(O)cc1)[C@@H]1C(=O)N2CC(N)SC(=O)[C@H]12", "logP": -0.606, "QED": 0.506, "PPBR_AZ": 53.033, "DILI": 0.305, "Caco2_Wang": -5.909},
  {"Round": "round9", "SMILES": "O=C(NCc1ccccc1)[C@@H]1C(=O)N2CCSC(=O)[C@H]12", "logP": 0.403, "QED": 0.646, "PPBR_AZ": 56.554, "DILI": 0.552, "Caco2_Wang": -5.066},
  {"Round": "round10", "SMILES": "O=C(Cc1ccc(O)cc1)N[C@@H]1C(=O)N2CCSC(=O)N[C@H]12", "logP": 0.044, "QED": 0.683, "PPBR_AZ": 65.798, "DILI": 0.498, "Caco2_Wang": -5.693},
  {"Round": "round10", "SMILES": "O=C(NCc1ccc(OC)cc1)[C@@H]1C(=O)N2CCSC(=O)[C@H]12", "logP": 0.412, "QED": 0.642, "PPBR_AZ": 65.706, "DILI": 0.632, "Caco2_Wang": -5.009},
  {"Round": "round10", "SMILES": "O=C(NCc1ccc(O)cc1)[C@@H]1C(=O)N2CC(F)SC(=O)[C@H]12", "logP": 0.404, "QED": 0.621, "PPBR_AZ": 64.508, "DILI": 0.560, "Caco2_Wang": -5.650},
  {"Round": "round10", "SMILES": "O=C(Cc1ccc(O)cc1)N[C@@H]1C(=O)N2CC(N)SC(=O)N[C@H]12", "logP": -0.671, "QED": 0.543, "PPBR_AZ": 57.019, "DILI": 0.343, "Caco2_Wang": -6.075},
  {"Round": "round10", "SMILES": "O=C(NCc1ccc(O)cc1)[C@@H]1C(=O)N2CC(Cl)SC(=O)[C@H]12", "logP": 0.674, "QED": 0.480, "PPBR_AZ": 73.151, "DILI": 0.465, "Caco2_Wang": -5.546},
  {"Round": "round11", "SMILES": "O=C(Cc1ccc(O)cc1)N[C@@H]1C(=O)N2CC(N)SC(=O)N[C@H]12", "logP": -0.671, "QED": 0.543, "PPBR_AZ": 57.019, "DILI": 0.343, "Caco2_Wang": -6.075},
  {"Round": "round11", "SMILES": "O=C(Cc1ccc(O)cc1)N[C@@H]1C(=O)N2CC(O)SC(=O)N[C@H]12", "logP": -0.637, "QED": 0.545, "PPBR_AZ": 54.622, "DILI": 0.512, "Caco2_Wang": -6.152},
  {"Round": "round11", "SMILES": "O=C(NCc1ccc(OC)cc1)[C@@H]1C(=O)N2CCSC(=O)N[C@H]12", "logP": 0.552, "QED": 0.620, "PPBR_AZ": 67.113, "DILI": 0.736, "Caco2_Wang": -5.218},
  {"Round": "round11", "SMILES": "O=C(Cc1ccc(OC)cc1)N[C@@H]1C(=O)N2CCSC(=O)N[C@H]12", "logP": 0.347, "QED": 0.775, "PPBR_AZ": 69.274, "DILI": 0.706, "Caco2_Wang": -5.182},
  {"Round": "round11", "SMILES": "O=C(NCc1ccc(OC)cc1)N[C@@H]1C(=O)N2CCOC(=O)N[C@H]12", "logP": -0.229, "QED": 0.659, "PPBR_AZ": 65.429, "DILI": 0.684, "Caco2_Wang": -5.234},
  {"Round": "round12", "SMILES": "O=C(Cc1ccc(O)cc1)N[C@@H]1C(=O)N2CCSC(=O)N[C@H]12", "logP": 0.044, "QED": 0.683, "PPBR_AZ": 65.798, "DILI": 0.498, "Caco2_Wang": -5.693},
  {"Round": "round12", "SMILES": "O=C(Cc1cc(O)ccc1C=O)N[C@@H]1C(=O)N2CCSC(=O)N[C@H]12", "logP": -0.143, "QED": 0.515, "PPBR_AZ": 63.678, "DILI": 0.630, "Caco2_Wang": -5.927},
  {"Round": "round12", "SMILES": "O=C(Cc1ccc(N)cc1)N[C@@H]1C(=O)N2CCSC(=O)N[C@H]12", "logP": -0.079, "QED": 0.534, "PPBR_AZ": 49.673, "DILI": 0.702, "Caco2_Wang": -5.742},
  {"Round": "round12", "SMILES": "COc1ccc(CC(=O)N[C@@H]2C(=O)N3CCSC(=O)N[C@H]23)cc1", "logP": 0.347, "QED": 0.775, "PPBR_AZ": 69.274, "DILI": 0.706, "Caco2_Wang": -5.182},
  {"Round": "round12", "SMILES": "O=C(Cc1cc(O)ccc1C(C)C)N[C@@H]1C(=O)N2CCSC(=O)N[C@H]12", "logP": 1.168, "QED": 0.698, "PPBR_AZ": 77.846, "DILI": 0.450, "Caco2_Wang": -5.614},
  {"Round": "round13", "SMILES": "O=C(Cc1cc(O)cc(O)c1)N[C@@H]1C(=O)N2CCS[C@H]12", "logP": 0.040, "QED": 0.685, "PPBR_AZ": 57.409, "DILI": 0.272, "Caco2_Wang": -5.607},
  {"Round": "round13", "SMILES": "O=C(Cc1ccccc1F)N[C@@H]1C(=O)N2CCSC(=O)N[C@H]12", "logP": 0.478, "QED": 0.793, "PPBR_AZ": 62.834, "DILI": 0.788, "Caco2_Wang": -5.145},
  {"Round": "round13", "SMILES": "O=C(NCc1ccc(OC)cc1)[C@@H]1C(=O)N2CC(O)SC(=O)N[C@H]12", "logP": -0.129, "QED": 0.515, "PPBR_AZ": 57.038, "DILI": 0.771, "Caco2_Wang": -5.578},
  {"Round": "round13", "SMILES": "O=C(NCc1ccc(F)cc1)[C@@H]1C(=O)N2CCSC(=O)N[C@H]12", "logP": 0.683, "QED": 0.633, "PPBR_AZ": 63.100, "DILI": 0.776, "Caco2_Wang": -5.199},
  {"Round": "round13", "SMILES": "O=C(NCc1ccc(Cl)cc1)[C@@H]1C(=O)N2CCSC(=O)N[C@H]12", "logP": 1.197, "QED": 0.640, "PPBR_AZ": 74.662, "DILI": 0.794, "Caco2_Wang": -5.135},
  {"Round": "round14", "SMILES": "O=C(Cc1cc(O)cc(O)c1)N[C@@H]1C(=O)N2CCSC(=O)N[C@H]12", "logP": -0.250, "QED": 0.565, "PPBR_AZ": 63.980, "DILI": 0.489, "Caco2_Wang": -5.983},
  {"Round": "round14", "SMILES": "O=C(Cc1ccc(O)cc1)N[C@@H]1C(=O)N2CC(=O)SC(=O)N[C@H]12", "logP": -0.429, "QED": 0.646, "PPBR_AZ": 65.337, "DILI": 0.676, "Caco2_Wang": -5.879},
  {"Round": "round14", "SMILES": "O=C(Cc1cc(OC)c(OC)c(OC)c1)N[C@@H]1C(=O)N2CCSC(=O)N[C@H]12", "logP": 0.364, "QED": 0.670, "PPBR_AZ": 65.084, "DILI": 0.826, "Caco2_Wang": -5.318},
  {"Round": "round14", "SMILES": "O=C(NCc1ccc(O)c(OC)c1)[C@@H]1C(=O)N2CCSC(=O)N[C@H]12", "logP": 0.258, "QED": 0.530, "PPBR_AZ": 64.160, "DILI": 0.583, "Caco2_Wang": -5.751},
  {"Round": "round14", "SMILES": "COc1cc(OC)c(CC(=O)N[C@@H]2C(=O)N3CCSC(=O)N[C@H]23)c(OC)c1", "logP": 0.364, "QED": 0.670, "PPBR_AZ": 69.194, "DILI": 0.819, "Caco2_Wang": -5.229},
  {"Round": "final", "SMILES": "O=C(Cc1cc(O)cc(O)c1)N[C@@H]1C(=O)N2CCS[C@H]12", "logP": 0.040, "QED": 0.685, "PPBR_AZ": 57.409, "DILI": 0.272, "Caco2_Wang": -5.607}
];

let roundOrder = ['initial', 'round1', 'round2', 'round3', 'round4', 'round5', 'round6', 'round7', 'round8', 'round9', 'round10', 'round11', 'round12', 'round13', 'round14', 'final'];

function loadData() {
    processAndRender();
    setupToggleButtons();
}

function setupToggleButtons() {
    const toggleRoundsBtn = document.getElementById('toggle-rounds');
    const autoRevealBtn = document.getElementById('auto-reveal');

    let roundsHidden = false;
    let isRevealing = false;
    let revealTimeouts = [];

    toggleRoundsBtn.addEventListener('click', () => {
        roundsHidden = !roundsHidden;
        const rounds = ['round1', 'round2', 'round3', 'round4', 'round5', 'round6', 'round7', 'round8', 'round9', 'round10', 'round11', 'round12', 'round13', 'round14'];

        rounds.forEach(round => {
            const section = document.getElementById(`round-${round}`);
            const navItem = document.querySelector(`#nav-list a[href="#round-${round}"]`);

            if (section) {
                section.style.display = roundsHidden ? 'none' : 'block';
            }
            if (navItem) {
                navItem.parentElement.style.display = roundsHidden ? 'none' : 'block';
            }
        });

        toggleRoundsBtn.textContent = roundsHidden ? '显示 Round 1-14' : '隐藏 Round 1-14';
        toggleRoundsBtn.classList.toggle('active', roundsHidden);
    });

    autoRevealBtn.addEventListener('click', () => {
        // If already revealing, stop it
        if (isRevealing) {
            revealTimeouts.forEach(timeout => clearTimeout(timeout));
            revealTimeouts = [];
            isRevealing = false;
            window.isAutoRevealing = false;
            autoRevealBtn.classList.remove('active');
            autoRevealBtn.textContent = '自动展示';

            // Show all sections when stopped
            roundOrder.forEach(round => {
                const section = document.getElementById(`round-${round}`);
                if (section) {
                    section.style.display = 'block';
                    section.style.opacity = '1';
                }
            });

            return;
        }

        isRevealing = true;
        window.isAutoRevealing = true;
        autoRevealBtn.classList.add('active');
        autoRevealBtn.textContent = '停止';

        // First hide all sections
        roundOrder.forEach(round => {
            const section = document.getElementById(`round-${round}`);
            if (section) {
                section.style.display = 'none';
                section.style.opacity = '0';
                section.style.animation = 'none';
            }
        });

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Reveal sections one by one
        let delay = 1000;
        roundOrder.forEach((round, index) => {
            const timeout = setTimeout(() => {
                if (!isRevealing) return;

                const section = document.getElementById(`round-${round}`);
                if (section) {
                    section.style.display = 'block';
                    section.style.transition = 'opacity 0.5s ease-in';
                    setTimeout(() => {
                        section.style.opacity = '1';
                    }, 50);

                    // Scroll to the section
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }

                // Update sidebar active state
                document.querySelectorAll('#nav-list a').forEach(link => link.classList.remove('active'));
                const navLink = document.querySelector(`#nav-list a[href="#round-${round}"]`);
                if (navLink) {
                    navLink.classList.add('active');
                }

                // Reset button when done
                if (index === roundOrder.length - 1) {
                    setTimeout(() => {
                        isRevealing = false;
                        window.isAutoRevealing = false;
                        autoRevealBtn.classList.remove('active');
                        autoRevealBtn.textContent = '自动展示';
                        revealTimeouts = [];
                    }, 1000);
                }
            }, delay + index * 1600);

            revealTimeouts.push(timeout);
        });
    });
}

function processAndRender() {
    const groupedData = groupByRound(moleculeData);
    displayMoleculeCount(moleculeData.length);
    renderRounds(groupedData);
    generateNavigation(groupedData);
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

function detectElements(smiles) {
    // Extract unique elements from SMILES string
    const elements = new Set();

    // Always include C and H (implicit in SMILES)
    elements.add('C');
    elements.add('H');

    // Match element symbols in SMILES
    // Two-letter elements: Cl, Br
    const twoLetterMatches = smiles.match(/Cl|Br/g);
    if (twoLetterMatches) {
        twoLetterMatches.forEach(el => elements.add(el));
    }

    // Single-letter elements: N, O, S, F, P, I
    const singleLetterMatches = smiles.match(/[NOSFPI]/g);
    if (singleLetterMatches) {
        singleLetterMatches.forEach(el => elements.add(el));
    }

    // Return in a consistent order
    const order = ['C', 'H', 'N', 'O', 'F', 'S', 'Cl', 'Br', 'I', 'P'];
    return order.filter(el => elements.has(el));
}

function generateNavigation(groupedData) {
    const navList = document.getElementById('nav-list');
    navList.innerHTML = '';

    roundOrder.forEach(round => {
        if (groupedData[round]) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#round-${round}`;
            a.textContent = round === 'initial' ? 'Initial' : round === 'final' ? 'Final' : `Round ${round.replace('round', '')}`;

            // Add special class for initial and final
            if (round === 'initial' || round === 'final') {
                a.classList.add('special-round');
            }

            // Smooth scroll on click
            a.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.getElementById(`round-${round}`);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

                    // Update active state
                    document.querySelectorAll('#nav-list a').forEach(link => link.classList.remove('active'));
                    a.classList.add('active');
                }
            });

            li.appendChild(a);
            navList.appendChild(li);
        }
    });

    // Highlight active section on scroll
    window.addEventListener('scroll', () => {
        // Don't update active state during auto reveal
        if (window.isAutoRevealing) return;

        let current = '';
        roundOrder.forEach(round => {
            const section = document.getElementById(`round-${round}`);
            if (section) {
                const sectionTop = section.offsetTop - 120;
                if (window.pageYOffset >= sectionTop) {
                    current = round;
                }
            }
        });

        document.querySelectorAll('#nav-list a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#round-${current}`) {
                link.classList.add('active');
            }
        });
    });
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
    section.id = `round-${roundName}`;
    section.style.animationDelay = `${index * 0.1}s`;

    const title = document.createElement('h2');
    title.className = 'round-title';
    title.textContent = roundName === 'initial' ? 'Initial' : roundName === 'final' ? 'Final' : `Round ${roundName.replace('round', '')}`;
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

    const smilesDiv = document.createElement('div');
    smilesDiv.className = 'smiles-display';
    smilesDiv.textContent = molecule.SMILES;
    card.appendChild(smilesDiv);

    // Detect elements present in the molecule from SMILES
    const elementsPresent = detectElements(molecule.SMILES);

    const legend = document.createElement('div');
    legend.className = 'element-legend';

    // CPK color scheme matching 3Dmol.js defaults
    const elementColors = {
        'C': '#909090',  // Carbon - gray
        'H': '#FFFFFF',  // Hydrogen - white
        'N': '#3050F8',  // Nitrogen - blue
        'O': '#FF0D0D',  // Oxygen - red
        'S': '#FFFF30',  // Sulfur - yellow
        'F': '#00FF00',  // Fluorine - green
        'Cl': '#1FF01F', // Chlorine - green
        'Br': '#A62929', // Bromine - dark red
        'I': '#940094',  // Iodine - purple
        'P': '#FF8000'   // Phosphorus - orange
    };

    let legendHTML = '';
    elementsPresent.forEach(element => {
        if (elementColors[element]) {
            const borderStyle = element === 'H' ? 'border: 2px solid #333;' : 'border: 1px solid #999;';
            legendHTML += `<div><span class="color-circle" style="background-color: ${elementColors[element]}; ${borderStyle}"></span><span>${element}</span></div>`;
        }
    });

    legend.innerHTML = legendHTML;
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

        try {
            // Get MOL data from the pre-generated map
            const molData = molDataMap[smiles];

            if (!molData) {
                console.error(`No MOL data found for SMILES: ${smiles}`);
                container.innerHTML = '<p style="text-align: center; padding: 80px 20px; color: #999;">No 3D data</p>';
                return;
            }

            // Create 3Dmol viewer
            const viewer = $3Dmol.createViewer(container, {
                backgroundColor: '#ffffff'
            });

            // Add model from MOL data
            viewer.addModel(molData, 'mol');

            // Set style with ball and stick representation
            viewer.setStyle({}, {
                sphere: {
                    scale: 0.3,
                    colorscheme: 'default'
                },
                stick: {
                    radius: 0.15,
                    colorscheme: 'default'
                }
            });

            viewer.zoomTo();
            viewer.render();

        } catch (error) {
            console.error(`Error rendering molecule:`, error);
            container.innerHTML = '<p style="text-align: center; padding: 80px 20px; color: #999;">Render error</p>';
        }
    });
}

document.addEventListener('DOMContentLoaded', loadData);
