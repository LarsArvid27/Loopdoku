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
        cellEl.textContent = cell.obstacle || '🎨';
        cellEl.style.cursor = 'not-allowed';
      } else if (cell.collaborator) {
        cellEl.classList.add('collaborator');
        const collab = COLLABORATORS.find(c => c.id === cell.collaborator);
        cellEl.textContent = collab ? `${collab.emoji} ${collab.name}` : cell.collaborator;
        cellEl.style.cursor = 'pointer';
      } else {
        cellEl.textContent = '';
        cellEl.style.cursor = 'pointer';
      }

      cellEl.addEventListener('click', (e) => {
        e.preventDefault();
        this.onCellClick(index);
      });
      gridContainer.appendChild(cellEl);
    });
  }

  renderClues() {
    const cluesList = document.getElementById('cluesList');
    if (!cluesList) {
      console.error('Clues list not found!');
      return;
    }
    
    cluesList.innerHTML = '';

    CLUES.forEach(clue => {
      const li = document.createElement('li');
      li.textContent = clue;
      cluesList.appendChild(li);
    });
    
    console.log('Clues rendered:', CLUES.length);
  }

  attachEventListeners() {
    const resetBtn = document.getElementById('resetBtn');
    const hintBtn = document.getElementById('hintBtn');
    const solveBtn = document.getElementById('solveBtn');

    if (resetBtn) {
      resetBtn.addEventListener('click', () => this.resetGame());
    }
    if (hintBtn) {
      hintBtn.addEventListener('click', () => this.showHint());
    }
    if (solveBtn) {
      solveBtn.addEventListener('click', () => this.showSolution());
    }
    
    console.log('Event listeners attached');
  }

  onCellClick(index) {
    const cell = this.gameState.grid[index];
    
    console.log(`Cell ${index} clicked`, cell);

    if (cell.isObstacle) {
      console.log('Cannot place on obstacle');
      return;
    }

    // Get unplaced collaborators
    const unplaced = this.solver.getUnplacedCollaborators();
    
    if (cell.collaborator) {
      // Remove collaborator if already placed
      console.log(`Removing ${cell.collaborator} from cell ${index}`);
      cell.collaborator = null;
    } else if (unplaced.length > 0) {
      // Validate placement
      const nextCollab = unplaced[0];
      if (this.isValidPlacement(index, nextCollab)) {
        console.log(`Placing ${nextCollab} at cell ${index}`);
        cell.collaborator = nextCollab;
      } else {
        alert('❌ Invalid placement! A collaborator is already in this row or column.');
        return;
      }
    } else {
      alert('✅ All collaborators placed!');
      return;
    }

    this.updateDisplay();
  }

  isValidPlacement(cellIndex, collaborator) {
    const cell = this.gameState.grid[cellIndex];
    const row = cell.row;
    const col = cell.col;

    // Check if collaborator already exists in this row
    for (let c = 0; c < 5; c++) {
      const checkCell = this.gameState.grid[row * 5 + c];
      if (checkCell.collaborator === collaborator) {
        return false;
      }
    }

    // Check if another collaborator exists in this row
    for (let c = 0; c < 5; c++) {
      const checkCell = this.gameState.grid[row * 5 + c];
      if (checkCell.collaborator && checkCell.collaborator !== collaborator) {
        return false;
      }
    }

    // Check if another collaborator exists in this column
    for (let r = 0; r < 5; r++) {
      const checkCell = this.gameState.grid[r * 5 + col];
      if (checkCell.collaborator && checkCell.collaborator !== collaborator) {
        return false;
      }
    }

    return true;
  }

  resetGame() {
    this.gameState.reset();
    this.renderGrid();
    console.log('Game reset');
  }

  showHint() {
    const hint = this.solver.getHint();
    if (hint) {
      alert(`💡 Hint: ${hint.message}\nLocation: ${hint.location}\nSong: ${hint.song}`);
    } else {
      alert('✅ All collaborators are placed!');
    }
  }

  showSolution() {
    const solution = this.solver.getSolution();
    let solText = 'SOLUTION:\n\n';
    Object.entries(solution).forEach(([collab, data]) => {
      const location = LOCATIONS.find(l => l.id === data.location);
      const song = SONGS.find(s => s.id === data.song);
      solText += `${collab.toUpperCase()}: ${location.name} (${song.name})\n`;
    });
    alert(solText);
  }

  updateDisplay() {
    this.renderGrid();
  }
}
