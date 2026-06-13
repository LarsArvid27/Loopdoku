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
  { image: 'images/maluma.png', text: 'Maluma estaba en un sillón' },
  { image: 'images/beele.png', text: 'Beéle estaba en la biblioteca' },
  { image: 'images/rauw.png', text: 'Rauw Alejandro estaba al lado de una planta' },
  { image: 'images/beyonce.png', text: 'Beyoncé era la única en una alfombra' },
  { image: 'images/carlos.png', text: 'Carlos Vives estaba en la entrada' },
  { image: 'images/shakira.png', text: 'Shakira estaba a solas con su colab' }
];

const SOLUTION = "Shakira está con Beyoncé";

const CONSTRAINTS = {
  uniqueRowColumn: true,
  artistsOnlyInEmpty: true,
  shakiraAlone: true
};
