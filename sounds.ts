const sort = (input) => input.sort((a, b) => (a.name < b.name ? -1 : 1));

export default [
  {
    message: 'NEW sounds',
    files: sort([{ name: 'Baii', file: './sounds/baiii.mp3' }]),
  },
  {
    message: "<img height='40' src='/niki.png' /> 4 ever ❤️ ",
    files: sort([
      { name: 'Merning', file: './sounds/merning.mp3' },
      { name: 'After Merning', file: './sounds/after-merning.mp3' },
    ]),
  },

  {
    message: 'TourRadar random noises',
    files: sort([
      {
        name: 'Dog',
        file: './sounds/dog.mp3',
      },
      {
        name: 'Elephant',
        file: './sounds/elephant.mp3',
      },
      {
        name: 'Sheep',
        file: './sounds/sheep.mp3',
      },
    ]),
  },
  {
    message: 'in memoriam Alexis 😢',
    files: sort([
      {
        name: 'Duck',
        file: '/sounds/duck.mp3',
      },
      {
        name: 'Final countdown',
        file: './sounds/final_countdown.mp3',
      },
      {
        name: 'Frog',
        file: './sounds/frog.mp3',
      },
      {
        name: 'Frog #2',
        file: './sounds/frog_2.mp3',
      },
      {
        name: 'Trumpet',
        file: './sounds/trompet.mp3',
      },
      {
        name: 'Trumpet #2',
        file: './sounds/trompet_2.mp3',
      },
      {
        name: 'Owl',
        file: './sounds/owl.mp3',
      },
    ]),
  },
];
