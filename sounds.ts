import type { File, Sounds } from './types';

const sort = (input: File[]) =>
  input.sort((a, b) => (a.name < b.name ? -1 : 1));

const sounds: Sounds[] = [
  {
    message: 'NEW sounds',
    files: sort([
      {
        name: 'Maahlzeeeit',
        file: './sounds/maaaaahhlzeit.mp3'
      },
      {
        name: 'Wiederschaaaun',
        file: './sounds/wiederschaaauun.mp3'
      }
    ])
  },
  {
    message: 'TR legacy',
    files: sort([
      {
        name: 'Ai jai jaiii',
        file: './sounds/ai_jai_jai.mp3'
      },
      {
        name: 'Alrightiiii',
        file: './sounds/alrightiiiii.mp3'
      },
      {
        name: 'Tschüss Baba Servus Pfirti',
        file: './sounds/tschuss_baba_servus_pfirti.mp3'
      }
    ])
  },
  {
    message: "Baiii's",
    files: [
      {
        name: 'Jen',
        file: './sounds/baiii.mp3'
      },
      {
        name: 'Davincho',
        file: './sounds/baaaaiiii.mp3'
      }
    ]
  },
  {
    message: '4 ever ❤️ ',
    image: 'niki',
    files: sort([
      { name: 'Merning', file: './sounds/merning.mp3' },
      { name: 'After Merning', file: './sounds/after-merning.mp3' }
    ])
  },

  {
    message: 'Random noises',
    files: sort([
      {
        name: 'Dog',
        file: './sounds/dog.mp3'
      },
      {
        name: 'Elephant',
        file: './sounds/elephant.mp3'
      },
      {
        name: 'Sheep',
        file: './sounds/sheep.mp3'
      }
    ])
  },
  {
    message: 'in memoriam Alexis 😢',
    files: sort([
      {
        name: 'Duck',
        file: '/sounds/duck.mp3'
      },
      {
        name: 'Final countdown',
        file: './sounds/final_countdown.mp3'
      },
      {
        name: 'Frog',
        file: './sounds/frog.mp3'
      },
      {
        name: 'Frog #2',
        file: './sounds/frog_2.mp3'
      },
      {
        name: 'Trumpet',
        file: './sounds/trompet.mp3'
      },
      {
        name: 'Trumpet #2',
        file: './sounds/trompet_2.mp3'
      },
      {
        name: 'Owl',
        file: './sounds/owl.mp3'
      }
    ])
  }
];

export default sounds;
