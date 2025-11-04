// Type effectiveness data for defense (what types are effective against this type)
const defenseEffectiveness = {
    "Normal": {
        "weak": ["Fighting"],
        "resist": [],
        "immune": ["Ghost"]
    },
    "Fire": {
        "weak": ["Water", "Ground", "Rock"],
        "resist": ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
        "immune": []
    },
    "Water": {
        "weak": ["Electric", "Grass"],
        "resist": ["Fire", "Water", "Ice", "Steel"],
        "immune": []
    },
    "Electric": {
        "weak": ["Ground"],
        "resist": ["Electric", "Flying", "Steel"],
        "immune": []
    },
    "Grass": {
        "weak": ["Fire", "Ice", "Poison", "Flying", "Bug"],
        "resist": ["Water", "Electric", "Grass", "Ground"],
        "immune": []
    },
    "Ice": {
        "weak": ["Fire", "Fighting", "Rock", "Steel"],
        "resist": ["Ice"],
        "immune": []
    },
    "Fighting": {
        "weak": ["Flying", "Psychic", "Fairy"],
        "resist": ["Bug", "Rock", "Dark"],
        "immune": []
    },
    "Poison": {
        "weak": ["Ground", "Psychic"],
        "resist": ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
        "immune": []
    },
    "Ground": {
        "weak": ["Water", "Grass", "Ice"],
        "resist": ["Poison", "Rock"],
        "immune": ["Electric"]
    },
    "Flying": {
        "weak": ["Electric", "Ice", "Rock"],
        "resist": ["Grass", "Fighting", "Bug"],
        "immune": ["Ground"]
    },
    "Psychic": {
        "weak": ["Bug", "Ghost", "Dark"],
        "resist": ["Fighting", "Psychic"],
        "immune": []
    },
    "Bug": {
        "weak": ["Fire", "Flying", "Rock"],
        "resist": ["Grass", "Fighting", "Ground"],
        "immune": []
    },
    "Rock": {
        "weak": ["Water", "Grass", "Fighting", "Ground", "Steel"],
        "resist": ["Normal", "Fire", "Poison", "Flying"],
        "immune": []
    },
    "Ghost": {
        "weak": ["Ghost", "Dark"],
        "resist": ["Poison", "Bug"],
        "immune": ["Normal", "Fighting"]
    },
    "Dragon": {
        "weak": ["Ice", "Dragon", "Fairy"],
        "resist": ["Fire", "Water", "Electric", "Grass"],
        "immune": []
    },
    "Dark": {
        "weak": ["Fighting", "Bug", "Fairy"],
        "resist": ["Ghost", "Dark"],
        "immune": ["Psychic"]
    },
    "Steel": {
        "weak": ["Fire", "Fighting", "Ground"],
        "resist": ["Normal", "Grass", "Ice", "Flying", "Psychic", "Bug", "Rock", "Dragon", "Steel", "Fairy"],
        "immune": ["Poison"]
    },
    "Fairy": {
        "weak": ["Poison", "Steel"],
        "resist": ["Fighting", "Bug", "Dark"],
        "immune": ["Dragon"]
    }
};

// Type effectiveness data for attack (what types this type is effective against)
const attackEffectiveness = {
    "Normal": {
        "super": [],
        "notVery": ["Rock", "Steel"],
        "noEffect": ["Ghost"]
    },
    "Fire": {
        "super": ["Grass", "Ice", "Bug", "Steel"],
        "notVery": ["Fire", "Water", "Rock", "Dragon"],
        "noEffect": []
    },
    "Water": {
        "super": ["Fire", "Ground", "Rock"],
        "notVery": ["Water", "Grass", "Dragon"],
        "noEffect": []
    },
    "Electric": {
        "super": ["Water", "Flying"],
        "notVery": ["Electric", "Grass", "Dragon"],
        "noEffect": ["Ground"]
    },
    "Grass": {
        "super": ["Water", "Ground", "Rock"],
        "notVery": ["Fire", "Grass", "Poison", "Flying", "Bug", "Dragon", "Steel"],
        "noEffect": []
    },
    "Ice": {
        "super": ["Grass", "Ground", "Flying", "Dragon"],
        "notVery": ["Fire", "Water", "Ice", "Steel"],
        "noEffect": []
    },
    "Fighting": {
        "super": ["Normal", "Ice", "Rock", "Dark", "Steel"],
        "notVery": ["Poison", "Flying", "Psychic", "Bug", "Fairy"],
        "noEffect": ["Ghost"]
    },
    "Poison": {
        "super": ["Grass", "Fairy"],
        "notVery": ["Poison", "Ground", "Rock", "Ghost"],
        "noEffect": ["Steel"]
    },
    "Ground": {
        "super": ["Fire", "Electric", "Poison", "Rock", "Steel"],
        "notVery": ["Grass", "Bug"],
        "noEffect": ["Flying"]
    },
    "Flying": {
        "super": ["Grass", "Fighting", "Bug"],
        "notVery": ["Electric", "Rock", "Steel"],
        "noEffect": []
    },
    "Psychic": {
        "super": ["Fighting", "Poison"],
        "notVery": ["Psychic", "Steel"],
        "noEffect": ["Dark"]
    },
    "Bug": {
        "super": ["Grass", "Psychic", "Dark"],
        "notVery": ["Fire", "Fighting", "Poison", "Flying", "Ghost", "Steel", "Fairy"],
        "noEffect": []
    },
    "Rock": {
        "super": ["Fire", "Ice", "Flying", "Bug"],
        "notVery": ["Fighting", "Ground", "Steel"],
        "noEffect": []
    },
    "Ghost": {
        "super": ["Psychic", "Ghost"],
        "notVery": ["Dark"],
        "noEffect": ["Normal"]
    },
    "Dragon": {
        "super": ["Dragon"],
        "notVery": ["Steel"],
        "noEffect": ["Fairy"]
    },
    "Dark": {
        "super": ["Psychic", "Ghost"],
        "notVery": ["Fighting", "Dark", "Fairy"],
        "noEffect": []
    },
    "Steel": {
        "super": ["Ice", "Rock", "Fairy"],
        "notVery": ["Fire", "Water", "Electric", "Steel"],
        "noEffect": []
    },
    "Fairy": {
        "super": ["Fighting", "Dragon", "Dark"],
        "notVery": ["Fire", "Poison", "Steel"],
        "noEffect": []
    }
};

// Type colors
const typeColors = {
    "Normal": "#A8A878",
    "Fire": "#F08030",
    "Water": "#6890F0",
    "Electric": "#F8D030",
    "Grass": "#78C850",
    "Ice": "#98D8D8",
    "Fighting": "#C03028",
    "Poison": "#A040A0",
    "Ground": "#E0C068",
    "Flying": "#A890F0",
    "Psychic": "#F85888",
    "Bug": "#A8B820",
    "Rock": "#B8A038",
    "Ghost": "#705898",
    "Dragon": "#7038F8",
    "Dark": "#705848",
    "Steel": "#B8B8D0",
    "Fairy": "#EE99AC"
};

// Icon path configuration
const iconPath = "icons/"; // Change this to your actual icons folder path
const iconExtension = ".png"; // Change this if using different file extension

// DOM elements
const typeGrid = document.getElementById('typeGrid');
const weaknessList = document.getElementById('weaknessList');
const resistanceList = document.getElementById('resistanceList');
const immuneList = document.getElementById('immuneList');
const neutralList = document.getElementById('neutralList');
const modeRadios = document.querySelectorAll('input[name="mode"]');

// Section title elements
const weaknessTitle = document.getElementById('weaknessTitle');
const resistanceTitle = document.getElementById('resistanceTitle');
const immuneTitle = document.getElementById('immuneTitle');
const neutralTitle = document.getElementById('neutralTitle');

// Selected types
let selectedTypes = [];
let currentMode = 'defense'; // Default mode

// Initialize type buttons
function initializeTypeButtons() {
    Object.keys(typeColors).forEach(type => {
        const button = document.createElement('button');
        button.className = 'type-btn';
        button.textContent = type;
        button.setAttribute('data-type', type);
        button.style.borderColor = typeColors[type];
        button.addEventListener('click', () => toggleType(type));
        typeGrid.appendChild(button);
    });
}

// Toggle type selection
function toggleType(type) {
    const index = selectedTypes.indexOf(type);
    
    if (index === -1) {
        if (currentMode === 'defense') {
            // Defense mode: allow up to 2 types
            if (selectedTypes.length < 2) {
                selectedTypes.push(type);
            } else {
                // Replace the first selected type if already 2 are selected
                selectedTypes[0] = type;
            }
        } else {
            // Attack mode: allow only 1 type
            selectedTypes = [type]; // Replace entire selection with the new type
        }
    } else {
        // Remove type if already selected
        selectedTypes.splice(index, 1);
    }
    
    updateTypeSelection();
    calculateEffectiveness();
}

// Update visual selection of types
function updateTypeSelection() {
    const buttons = document.querySelectorAll('.type-btn');
    buttons.forEach(button => {
        const buttonType = button.getAttribute('data-type');
        if (selectedTypes.includes(buttonType)) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
}

// Update section titles based on mode
function updateSectionTitles() {
    if (currentMode === 'defense') {
        // Defense mode titles
        weaknessTitle.textContent = 'Weakness';
        resistanceTitle.textContent = 'Resistance';
        immuneTitle.textContent = 'Immune';
        neutralTitle.textContent = 'Neutral';
    } else {
        // Attack mode titles
        weaknessTitle.textContent = 'Super Effective';
        resistanceTitle.textContent = 'Not Very Effective';
        immuneTitle.textContent = 'Ineffective';
        neutralTitle.textContent = 'Neutral';
    }
}

// Calculate type effectiveness based on current mode
function calculateEffectiveness() {
    // Reset lists
    weaknessList.innerHTML = '';
    resistanceList.innerHTML = '';
    immuneList.innerHTML = '';
    neutralList.innerHTML = '';
    
    if (selectedTypes.length === 0) {
        Object.keys(typeColors).forEach(type => {
            const tag = createEffectivenessTag(type, 1);
            neutralList.appendChild(tag);
        });
        return;
    }
    
    if (currentMode === 'defense') {
        calculateDefenseEffectiveness();
    } else {
        calculateAttackEffectiveness();
    }
}

// Create an effectiveness tag with PNG icon and darker multiplier section
function createEffectivenessTag(type, multiplier) {
    const li = document.createElement('li');
    li.className = 'effectiveness-tag';
    li.setAttribute('data-type', type);
    
    // Create icon using PNG file
    const icon = document.createElement('img');
    icon.className = 'type-icon';
    icon.src = `${iconPath}${type.toLowerCase()}${iconExtension}`;
    icon.alt = `${type} type icon`;
    
    // Create type name section
    const typeName = document.createElement('span');
    typeName.className = 'type-name';
    typeName.textContent = type;
    
    // Create multiplier section (darker background)
    const multiplierSpan = document.createElement('span');
    multiplierSpan.className = 'multiplier';
    multiplierSpan.textContent = `${multiplier}x`;
    
    li.appendChild(icon);
    li.appendChild(typeName);
    li.appendChild(multiplierSpan);
    
    return li;
}

// Calculate defense effectiveness (what types are effective against selected types)
function calculateDefenseEffectiveness() {
    const effectiveness = {};
    
    Object.keys(typeColors).forEach(attackingType => {
        let multiplier = 1;
        
        selectedTypes.forEach(defendingType => {
            const typeData = defenseEffectiveness[defendingType];
            
            if (typeData.weak.includes(attackingType)) {
                multiplier *= 2;
            } else if (typeData.resist.includes(attackingType)) {
                multiplier *= 0.5;
            } else if (typeData.immune.includes(attackingType)) {
                multiplier *= 0;
            }
        });
        
        effectiveness[attackingType] = multiplier;
    });
    
    // Sort and display results
    displayResults(effectiveness);
}

// Calculate attack effectiveness (what types selected types are effective against)
function calculateAttackEffectiveness() {
    const effectiveness = {};
    
    Object.keys(typeColors).forEach(defendingType => {
        let multiplier = 1;
        
        selectedTypes.forEach(attackingType => {
            const typeData = attackEffectiveness[attackingType];
            
            if (typeData.super.includes(defendingType)) {
                multiplier *= 2;
            } else if (typeData.notVery.includes(defendingType)) {
                multiplier *= 0.5;
            } else if (typeData.noEffect.includes(defendingType)) {
                multiplier *= 0;
            }
        });
        
        effectiveness[defendingType] = multiplier;
    });
    
    // Sort and display results
    displayResults(effectiveness);
}

// Display results in appropriate lists
function displayResults(effectiveness) {
    Object.keys(effectiveness)
        .sort((a, b) => effectiveness[b] - effectiveness[a])
        .forEach(type => {
            const multiplier = effectiveness[type];
            const tag = createEffectivenessTag(type, multiplier);
            
            if (multiplier === 0) {
                immuneList.appendChild(tag);
            } else if (multiplier > 1) {
                weaknessList.appendChild(tag);
            } else if (multiplier < 1) {
                resistanceList.appendChild(tag);
            } else {
                neutralList.appendChild(tag);
            }
        });
}

// Get current mode from radio buttons
function getCurrentMode() {
    const checkedRadio = document.querySelector('input[name="mode"]:checked');
    return checkedRadio ? checkedRadio.value : 'defense';
}

// Mode change handler
modeRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        currentMode = e.target.value;
        
        // Update section titles
        updateSectionTitles();
        
        // When switching to attack mode, limit to one type
        if (currentMode === 'attack' && selectedTypes.length > 1) {
            selectedTypes = [selectedTypes[0]]; // Keep only the first selected type
            updateTypeSelection();
        }
        
        calculateEffectiveness();
    });
});

// Initialize the calculator
function init() {
    // Set current mode from radio buttons
    currentMode = getCurrentMode();
    
    initializeTypeButtons();
    updateSectionTitles(); // Set initial titles based on current mode
    calculateEffectiveness();
}

// Start everything when the page loads
document.addEventListener('DOMContentLoaded', init);
