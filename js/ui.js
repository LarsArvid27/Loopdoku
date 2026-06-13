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
      li.style.display = 'flex';
      li.style.alignItems = 'center';
      li.style.gap = '10px';

      const img = document.createElement('img');
      img.src = clue.image;
      img.style.width = '40px';
      img.style.height = '40px';
      img.style.objectFit = 'cover';
      img.style.borderRadius = '50%';
      img.style.flexShrink = '0';

      const span = document.createElement('span');
      span.textContent = clue.text;

      li.appendChild(img);
      li.appendChild(span);
      cluesList.appendChild(li);
    });

    console.log('Clues rendered:', CLUES.length);
  }

  attachEventListeners() {
    const resetBtn = document.getElementById('resetBtn');
    const hintBtn = document.getElementById('hintBtn');
    const solveBtn =
