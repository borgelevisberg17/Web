// gameState.js

export const gameState = {
    playerName: '',
    playerGender: '',
    currentChapter: 0,
    evidences: [],
    relationships: {
        sarah: 0,
        lucas: 0,
        maxwell: 0,
    },
    choices: [],
    unlockedClues: [],
};

export function updateRelationships(character, points) {
    if (gameState.relationships[character] !== undefined) {
        gameState.relationships[character] += points;
    }
}

export function addEvidence(evidence) {
    gameState.evidences.push(evidence);
}