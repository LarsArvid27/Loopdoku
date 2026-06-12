class GameSolver {
  constructor(gameState) {
    this.gameState = gameState;
  }

  validateGrid() {
    if (!this.checkUniqueRowColumn()) {
      return { valid: false, message: 'Duplicate in row or column' };
    }

    if (!this.checkAllClues()) {
      return { valid: false, message: 'Some clues are not satisfied' };
    }

    return { valid: true, message: 'Puzzle solved!' };
  }

  checkUniqueRowColumn() {
    const grid = this.gameState.grid;
    const size = 6;

    for (let row = 0; row < size; row++) {
      const rowValues = [];
      for (let col = 0; col < size; col++) {
        const cell = grid[row * size + col];
        if (cell.collaborator) {
          if (rowValues.includes(cell.collaborator)) return false;
          rowValues.push(cell.collaborator);
        }
      }
    }

    for (let col = 0; col < size; col++) {
      const colValues = [];
      for (let row = 0; row < size; row++) {
        const cell = grid[row * size + col];
        if (cell.collaborator) {
          if (colValues.includes(cell.collaborator)) return false;
          colValues.push(cell.collaborator);
        }
      }
    }

    return true;
  }

  checkAllClues() {
    const grid = this.gameState.grid;
    const placedCollaborators = new Set();

    grid.forEach(cell => {
      if (cell.collaborator) {
        placedCollaborators.add(cell.collaborator);
      }
    });

    return placedCollaborators.size === COLLABORATORS.length;
  }

  getHint() {
    const unplaced = this.getUnplacedCollaborators();
    if (unplaced.length === 0) return null;

    const nextCollaborator = unplaced[0];
    const solution = SOLUTION[nextCollaborator];

    return {
      collaborator: nextCollaborator,
      location: solution.location,
      message: `${nextCollaborator} should be placed in ${solution.location}`
    };
  }

  getUnplacedCollaborators() {
    const grid = this.gameState.grid;
    const placedCollaborators = new Set();

    grid.forEach(cell => {
      if (cell.collaborator) {
        placedCollaborators.add(cell.collaborator);
      }
    });

    return COLLABORATORS
      .map(c => c.id)
      .filter(id => !placedCollaborators.has(id));
  }

  getSolution() {
    return SOLUTION;
  }
}
