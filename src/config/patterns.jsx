export const patterns = [
  {
    name: 'kana',
    numOfTiles: {
      default: 20,
      min: 1,
      max: 25,
    },
    numOfColors: {
      min: 3,
      max: 10,
    },
    palette: {
      default: [
        '#368E35',
        '#1F8A29',
        '#51A652',
        '#082106',
      ],
      list: [
        ['#60d6b0', '#43967b', '#dcfff4'],
        ['#4664b5', '#31467f', '#d8e2ff'],
        ['#c4356b', '#89254b', '#ffd0e2', '#ffa2c5'],
        ['#92efce', '#66a790', '#e6fff6', '#cdffee'],
        ['#355a68', '#748a6d', '#9c1928', '#2e2652'],
        ['#0f1c20', '#60c740', '#c45865', '#593fcc'],
      ],
    },
  },
  {
    name: 'scribble',
    numOfTiles: {
      default: 6,
      min: 1,
      max: 25,
    },
    numOfColors: {
      min: 3,
      max: 7,
    },
    palette: {
      default: [
        '#D9CBC2',
        '#77A9C2',
      ],
      list: [
        ['#c2fafc', '#88afb0', '#f0ffff'],
        ['#2aa1cc', '#437237', '#2e2652'],
        ['#408ba7', '#39ac17', '#4b2b2f'],
        ['#408ba7', '#39ac17', '#4b2b2f', '#2e2652'],
        ['#355a68', '#748a6d', '#9c1928', '#2e2652'],
      ],
    },
  },
  {
    name: 'basic-circle',
    numOfTiles: {
      default: 6,
      min: 1,
      max: 30,
    },
    numOfColors: {
      min: 4,
      max: 7,
    },
    palette: {
      default: [
        '#D4CFB1',
        '#0D3149',
        '#F2822B',
        '#F7BC47',
      ],
      list: [
        ['#3E494D', '#93515D', '#E85165'],
        ['#2aa1cc', '#437237', '#2e2652'],
        ['#408ba7', '#39ac17', '#4b2b2f'],
        ['#408ba7', '#39ac17', '#4b2b2f', '#2e2652'],
        ['#355a68', '#748a6d', '#9c1928', '#2e2652'],
      ],
    },
  },
];
