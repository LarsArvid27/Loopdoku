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
      cellEl.textContent = cell.obstacle || '❌';
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

    cellEl.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.onCellClick(index);
    }, { passive: false });

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

  if (cell.isObstacle) {
    return;
  }

  const collaboratorIds = COLLABORATORS.map(c => c.id);

  // Get collaborators already placed elsewhere
  const usedCollaborators = this.gameState.grid
    .filter((c, i) => i !== index && c.collaborator)
    .map(c => c.collaborator);

  // Available collaborators for this cell
  const availableCollaborators = collaboratorIds.filter(
    id =>
      !usedCollaborators.includes(id) ||
      id === cell.collaborator
  );

  let nextCollaborator;

  // Empty cell -> first available collaborator
  if (!cell.collaborator) {
    nextCollaborator = availableCollaborators[0] || null;
  } else {
    const currentIndex = availableCollaborators.indexOf(cell.collaborator);

    // Last available collaborator -> empty
    if (currentIndex === availableCollaborators.length - 1) {
      nextCollaborator = null;
    } else {
      nextCollaborator = availableCollaborators[currentIndex + 1];
    }
  }

  // Validate row/column rule
  if (
    nextCollaborator &&
    !this.isValidPlacement(index)
  ) {
    alert('❌ Solo puede haber un artista por columna o fila');
    return;
  }

  cell.collaborator = nextCollaborator;

  this.updateDisplay();
}
  
isValidPlacement(cellIndex) {
  const cell = this.gameState.grid[cellIndex];
  const row = cell.row;
  const col = cell.col;

  // Check row
  for (let c = 0; c < 6; c++) {
    const idx = row * 6 + c;

    if (idx === cellIndex) continue;

    const checkCell = this.gameState.grid[idx];

    if (checkCell.collaborator) {
      return false;
    }
  }

  // Check column
  for (let r = 0; r < 6; r++) {
    const idx = r * 6 + col;

    if (idx === cellIndex) continue;

    const checkCell = this.gameState.grid[idx];

    if (checkCell.collaborator) {
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
    alert(`💡 Pista: ${hint.message}`);
  } else {
    alert('✅ Todos han sido colocados');
  }
}

showSolution() {
  alert(`🔍 Solución:\n\n${SOLUTION}`);
}
  updateDisplay() {
    this.renderGrid();
  }
}
