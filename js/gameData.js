const COLLABORATORS = [
  { id: 'maluma', name: 'Maluma', emoji: '🎤', image: 'images/maluma.png' },
  { id: 'beele', name: 'Beéle', emoji: '🎤', image: 'images/beele.png' },
  { id: 'rauw', name: 'Rauw Alejandro', emoji: '🎤', image: 'images/rauw.png' },
  { id: 'beyonce', name: 'Beyoncé', emoji: '👑', image: 'images/beyonce.png' },
  { id: 'carlos', name: 'Carlos Vives', emoji: '🎸', image: 'images/carlos.png' },
  { id: 'shakira', name: 'Shakira', emoji: '👩', image: 'images/shakira.png' }
];


const LOCATIONS = [
  { id: 'entrada', name: 'Entrada', emoji: '🚪', description: 'Entrada' },
  { id: 'estudio', name: 'Estudio', emoji: '🎧', description: 'Estudio' },
  { id: 'terraza', name: 'Terraza', emoji: '🌿', description: 'Terraza' },
  { id: 'snacks', name: 'Zona de Snacks', emoji: '🍕', description: 'Zona de snacks' },
  { id: 'biblioteca', name: 'Biblioteca', emoji: '📚', description: 'Biblioteca' }
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
