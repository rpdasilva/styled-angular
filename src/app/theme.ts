import { Theme } from 'angular-emotion';

const breakpoints = ['40em', '52em', '64em'];

export const theme: Theme = {
  fontSizes: [12, 14, 16, 20, 24, 32],
  colors: {
    blue: '#07c',
    blues: [
      '#004170',
      '#006fbe',
      '#2d8fd5',
      '#5aa7de',
    ],
    pink: '#d36ac2',
    pinks: [
      '#ff79c6',
      '#ff69b4'
    ],
    green: '#90ee90',
    greens: [
      '#50fa7b',
      '#008000'
    ]
  },
  space: [0, 4, 8, 16, 32, 64],
  breakpoints,
  mediaQueries: {
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
    large: `@media screen and (min-width: ${breakpoints[2]})`,
  }
};
