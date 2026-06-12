const COLLABORATORS = [
  { id: 'maluma', name: 'Maluma', emoji: '🎤' },
  { id: 'beele', name: 'Beéle', emoji: '🎤' },
  { id: 'rauw', name: 'Rauw Alejandro', emoji: '🎤' },
  { id: 'beyonce', name: 'Beyoncé', emoji: '👑' },
  { id: 'carlos', name: 'Carlos Vives', emoji: '🎸' }
];

const LOCATIONS = [
  { id: 'entrada', name: 'Entrada', emoji: '🚪', description: 'Entrance' },
  { id: 'estudio', name: 'Estudio', emoji: '🎧', description: 'Studio' },
  { id: 'terraza', name: 'Terraza', emoji: '🌿', description: 'Terrace' },
  { id: 'snacks', name: 'Zona de Snacks', emoji: '🍕', description: 'Snack Zone' },
  { id: 'biblioteca', name: 'Biblioteca', emoji: '📚', description: 'Library' }
];

const SONGS = [
  { id: 'song1', name: 'Canción 1' },
  { id: 'song2', name: 'Canción 2' },
  { id: 'song3', name: 'Canción 3' },
  { id: 'song4', name: 'Canción 4' },
  { id: 'song5', name: 'Canción 5' }
];

const CLUES = [
  "🪑 Maluma estaba en un sillón (chair)",
  "📚 Beéle estaba en la biblioteca (library)",
  "🌿 Rauw Alejandro estaba al lado de una planta (next to a plant)",
  "🪞 Beyoncé era la única en una alcoba (alone in a corner)",
  "🚪 Carlos Vives estaba en la entrada (entrance)"
];

// Level 1 Solution: Map collaborator -> {location, song}
const SOLUTION = {
  maluma: { location: 'snacks', song: 'song1' },
  beele: { location: 'biblioteca', song: 'song2' },
  rauw: { location: 'terraza', song: 'song3' },
  beyonce: { location: 'entrada', song: 'song4' },
  carlos: { location: 'estudio', song: 'song5' }
};

// Grid constraints and obstacles
// Index represents position in 5x5 grid (0-24)
// Based on the puzzle image layout
const GRID_SETUP = {
  // Cells with obstacles (plants, shelves, tables, etc.) - cannot place collaborators
  obstacles: [
    // Entrada section obstacles
    { index: 2, type: 'plant', emoji: '🌱' },
    { index: 3, type: 'decor', emoji: '🎨' },
    { index: 4, type: 'decor', emoji: '🎨' },
    // Estudio section obstacles
    { index: 8, type: 'plant', emoji: '🌱' },
    { index: 9, type: 'decor', emoji: '🎨' },
    { index: 11, type: 'shelf', emoji: '📦' },
    { index: 13, type: 'shelf', emoji: '📦' },
    { index: 14, type: 'decor', emoji: '🎨' },
    // Terraza section obstacles
    { index: 15, type: 'decor', emoji: '🎨' },
    { index: 16, type: 'decor', emoji: '🎨' },
    { index: 17, type: 'decor', emoji: '🎨' },
    { index: 18, type: 'decor', emoji: '🎨' },
    { index: 19, type: 'decor', emoji: '🎨' },
    // Zona de Snacks & Biblioteca section obstacles
    { index: 20, type: 'plant', emoji: '🌱' },
    { index: 21, type: 'decor', emoji: '🎨' },
    { index: 22, type: 'plant', emoji: '🌱' },
    { index: 23, type: 'decor', emoji: '🎨' },
    { index: 24, type: 'decor', emoji: '🎨' }\n  ]\n};\n\nconst CONSTRAINTS = {\n  // Only one collaborator per row\n  uniqueRows: true,\n  // Only one collaborator per column\n  uniqueColumns: true,\n  // Artists can only be placed in empty squares (no obstacles)\n  artistsOnlyInEmpty: true,\n  // Shakira is alone with only one collaborator\n  shakiraAlone: true\n};\n\nconst GAME_LEVELS = {\n  level1: {\n    title: '¿Qué canción está escribiendo Shakira?',\n    description: 'Ayuda a Shakira a descubrir quién colabora en cada canción y dónde están en el estudio.',\n    difficulty: 'Easy',\n    clues: CLUES,\n    solution: SOLUTION,\n    gridSetup: GRID_SETUP,\n    collaborators: COLLABORATORS,\n    locations: LOCATIONS,\n    songs: SONGS\n  }\n};\n