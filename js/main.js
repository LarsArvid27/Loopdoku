class GameState {
  constructor() {
    this.grid = this.initializeGrid();
  }

  initializeGrid() {
    const grid = [];
    for (let i = 0; i < 25; i++) {
      grid.push({
        index: i,
        row: Math.floor(i / 5),
        col: i % 5,
        collaborator: null,
        location: null,
        song: null,
        isObstacle: false,
        obstacle: null
      });
    }
    return grid;
  }

  reset() {
    this.grid = this.initializeGrid();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const gameState = new GameState();
  const ui = new GameUI(gameState);
  ui.init();

  window.gameState = gameState;
  window.ui = ui;
  window.solver = new GameSolver(gameState);
  
  console.log('Loopdoku initialized!');
});