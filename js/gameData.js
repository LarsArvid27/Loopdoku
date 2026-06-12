const COLLABORATORS = [
  { id: 'maluma', name: 'Maluma', emoji: '🎤' },
  { id: 'beele', name: 'Beéle', emoji: '🎤' },
  { id: 'rauw', name: 'Rauw Alejandro', emoji: '🎤' },
  { id: 'beyonce', name: 'Beyoncé', emoji: '👑' },
  { id: 'carlos', name: 'Carlos Vives', emoji: '🎸' }
];

const LOCATIONS = [
  { id: 'entrada', name: 'Entrada', emoji: '🚪' },
  { id: 'estudio', name: 'Estudio', emoji: '🎧' },
  { id: 'terraza', name: 'Terraza', emoji: '🌿' },
  { id: 'snacks', name: 'Zona de Snacks', emoji: '🍕' },
  { id: 'biblioteca', name: 'Biblioteca', emoji: '📚' }
];

const SONGS = [
  { id: 'song1', name: 'Canción A' },
  { id: 'song2', name: 'Canción B' },
  { id: 'song3', name: 'Canción C' },
  { id: 'song4', name: 'Canción D' },
  { id: 'song5', name: 'Canción E' }
];

const CLUES = [
  "Maluma estaba en un sillón (chair)",
  "Beéle estaba en la biblioteca",
  "Rauw Alejandro estaba al lado de una planta",
  "Beyoncé era la única en una alcoba",
  "Carlos Vives estaba en la entrada"
];

const SOLUTION = {
  maluma: { location: 'snacks', song: 'song1' },
  beele: { location: 'biblioteca', song: 'song2' },
  rauw: { location: 'terraza', song: 'song3' },
  beyonce: { location: 'entrada', song: 'song4' },
  carlos: { location: 'estudio', song: 'song5' }
};

const CONSTRAINTS = {
  uniqueRowColumn: true,
  artistsOnlyInEmpty: true,
  shakiraAlone: true
};