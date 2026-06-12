const COLLABORATORS = [
  { id: 'maluma', name: 'Maluma', emoji: '🎤' },
  { id: 'beele', name: 'Beéle', emoji: '🎤' },
  { id: 'rauw', name: 'Rauw Alejandro', emoji: '🎤' },
  { id: 'beyonce', name: 'Beyoncé', emoji: '👑' },
  { id: 'carlos', name: 'Carlos Vives', emoji: '🎸' },
  { id: 'shakira', name: 'Shakira', emoji: '👩' }

];

const LOCATIONS = [
  { id: 'entrada', name: 'Entrada', emoji: '🚪', description: 'Entrada' },
  { id: 'estudio', name: 'Estudio', emoji: '🎧', description: 'Estudio' },
  { id: 'terraza', name: 'Terraza', emoji: '🌿', description: 'Terraza' },
  { id: 'snacks', name: 'Zona de Snacks', emoji: '🍕', description: 'Zona de snacks' },
  { id: 'biblioteca', name: 'Biblioteca', emoji: '📚', description: 'Biblioteca' }
];

const SONGS = [
  { id: 'song1', name: 'Canción 1' },
  { id: 'song2', name: 'Canción 2' },
  { id: 'song3', name: 'Canción 3' },
  { id: 'song4', name: 'Canción 4' },
  { id: 'song5', name: 'Canción 5' }
];

const CLUES = [
  "🪑 Maluma estaba en un sillón",
  "📚 Beéle estaba en la biblioteca",
  "🌿 Rauw Alejandro estaba al lado de una planta",
  "👣 Beyoncé era la única en una alfombra",
  "🚪 Carlos Vives estaba en la entrada",
  "🎤 Shakira estaba a solas con su colab"
];

const SOLUTION = "Shakira está con Beyoncé";

const CONSTRAINTS = {
  uniqueRowColumn: true,
  artistsOnlyInEmpty: true,
  shakiraAlone: true
};
