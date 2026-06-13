class GameUI {
  constructor(gameState) {
    this.gameState = gameState;
    this.solver = new GameSolver(gameState);
    this.selectedCollaborator = null;
  }

  init() {
    this.renderClues();
    this.renderGrid();
    this.attachEventListeners();
    console.log('GameUI initialized');
  }

  renderGrid() {
    const gridContainer = document.getElementById('gameGrid');
    if (!gridContainer) {
      console.error('Grid container not found!');
      return;
    }

    gridContainer.innerHTML = '';
    gridContainer.className = 'grid';

    const grid = this.gameState.grid;

    grid.forEach((cell, index) => {
      const cellEl = document.createElement('div');
      cellEl.className = 'cell';
      cellEl.dataset.index = index;

      if (cell.isObstacle) {
        cellEl.classList.add('obstacle');
        cellEl.textContent = '';
        cellEl.style.cursor = 'default';
      } else if (cell.collaborator) {
        cellEl.classList.add('collaborator');
        const collab = COLLABORATORS.find(c => c.id === cell.collaborator);
        const img = document.createElement('img');
        img.src = collab ? collab.image : '';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        img.style.borderRadius = '4px';
        cellEl.appendChild(img);
        cellEl.style.cursor = 'pointer';
      } else {
        cellEl.textContent =
