class GameUI {
  constructor(gameState) {
    this.gameState = gameState;
    this.solver = new GameSolver(gameState);
    this.selectedCollaborator = null;
  }

  init() {
    this.renderGrid();
    this.renderClues();
    this.attachEventListeners();
  }

  renderGrid() {
    const gridContainer = document.getElementById('gameGrid');
    gridContainer.innerHTML = '';
    gridContainer.className = 'grid';

    const grid = this.gameState.grid;

    grid.forEach((cell, index) => {
      const cellEl = document.createElement('div');
      cellEl.className = 'cell';
      cellEl.dataset.index = index;

      if (cell.isObstacle) {
        cellEl.classList.add('obstacle');
        cellEl.textContent = cell.obstacle || '🚫';
      } else if (cell.collaborator) {
        cellEl.classList.add('collaborator');
        const collab = COLLABORATORS.find(c => c.id === cell.collaborator);
        cellEl.textContent = collab ? collab.name : cell.collaborator;
      } else {
        cellEl.textContent = '';
      }

      cellEl.addEventListener('click', () => this.onCellClick(index));
      gridContainer.appendChild(cellEl);
    });
  }

  renderClues() {
    const cluesList = document.getElementById('cluesList');
    cluesList.innerHTML = '';

    CLUES.forEach(clue => {
      const li = document.createElement('li');
      li.textContent = clue;
      cluesList.appendChild(li);
    });
  }

  attachEventListeners() {
    document.getElementById('resetBtn').addEventListener('click', () => this.resetGame());
    document.getElementById('hintBtn').addEventListener('click', () => this.showHint());
    document.getElementById('solveBtn').addEventListener('click', () => this.showSolution());
  }

  onCellClick(index) {
    const cell = this.gameState.grid[index];
    if (cell.isObstacle) return;

    // Toggle collaborator selection
    if (cell.collaborator) {
      cell.collaborator = null;
    } else {
      // Simple cycle through collaborators
      const unplaced = this.solver.getUnplacedCollaborators();
      if (unplaced.length > 0) {
        cell.collaborator = unplaced[0];
      }
    }

    this.updateDisplay();
  }

  resetGame() {
    this.gameState.reset();
    this.renderGrid();
  }

  showHint() {
    const hint = this.solver.getHint();
    if (hint) {
      alert(`💡 Hint: ${hint.message}`);
    } else {
      alert('✅ All collaborators are placed!');
    }
  }

  showSolution() {
    const solution = this.solver.getSolution();
    const solText = Object.entries(solution)
      .map(([collab, data]) => `${collab}: ${data.location} (${data.song})`)
      .join('\n');
    alert(`Solution:\n${solText}`);
  }

  updateDisplay() {
    this.renderGrid();
  }
}