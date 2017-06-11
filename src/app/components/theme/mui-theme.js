import spacing from 'material-ui/styles/spacing';
import {fade} from 'material-ui/utils/colorManipulator';
import {mustard, darkGunmetal, silver, bistre} from './colors';

const canvasDark = darkGunmetal['600'];
const canvasLight = mustard['A200'];
const textDark = darkGunmetal['800'];
const textLight = mustard['200'];
const shadowDark = bistre['800'];
const shadowLight = bistre['700'];

export const muiThemeLight = {
  spacing,
  fontFamily: 'Roboto, sans-serif',
  borderRadius: 2,
  palette: {
    primary1Color: darkGunmetal['500'],
    primary2Color: darkGunmetal['700'],
    primary3Color: darkGunmetal['300'],
    accent1Color: mustard['500'],
    accent2Color: mustard['A400'],
    accent3Color: mustard['A700'],
    textColor: textDark,
    alternateTextColor: textLight,
    canvasColor: canvasLight,
    borderColor: silver['300'],
    disabledColor: fade(textDark, 0.3),
    pickerHeaderColor: darkGunmetal['500'],
    clockCircleColor: fade(textDark, 0.07),
    shadowColor: shadowDark
  }
};

export const muiThemeDark = {
  spacing,
  fontFamily: 'Roboto, sans-serif',
  borderRadius: 2,
  palette: {
    primary1Color: mustard['500'],
    primary2Color: mustard['700'],
    primary3Color: mustard['300'],
    accent1Color: darkGunmetal['500'],
    accent2Color: darkGunmetal['A400'],
    accent3Color: darkGunmetal['A700'],
    textColor: textLight,
    alternateTextColor: textDark,
    canvasColor: canvasDark,
    borderColor: silver['300'],
    disabledColor: fade(textLight, 0.3),
    pickerHeaderColor: darkGunmetal['500'],
    clockCircleColor: fade(textLight, 0.07),
    shadowColor: shadowLight
  }
};
