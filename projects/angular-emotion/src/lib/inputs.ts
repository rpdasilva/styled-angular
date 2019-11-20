const space = [
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'p',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py'
];

const width = [
  'width'
];

const fontSize = [
  'fontSize'
];

const color = [
  'color',
  'bg'
];

const typography = [
  'fontFamily',
  'textAlign',
  'textDecoration',
  'lineHeight',
  'fontWeight',
  'letterSpacing'
];

const layout = [
  'display',
  'maxWidth',
  'minWidth',
  'height',
  'maxHeight',
  'minHeight',
  'size',
  'ratio',
  'verticalAlign'
];

const flexbox = [
  'alignItems',
  'alignContent',
  'alignSelf',
  'flex',
  'flexBasis',
  'flexDirection',
  'flexWrap',
  'justifyContent',
  'justifySelf',
  'order'
];

const grid = [
  'gridGap',
  'gridColumnGap',
  'gridRowGap',
  'gridColumn',
  'gridRow',
  'gridAutoFlow',
  'gridAutoColumns',
  'gridAutoRows',
  'gridTemplateColumns',
  'gridTemplateRows'
];

const borders = [
  'border',
  'borderTop',
  'borderRight',
  'borderBottom',
  'borderLeft',
  'borderColor',
  'borderRadius'
];

const position = [
  'position',
  'top',
  'right',
  'bottom',
  'left',
  'zIndex'
];

const misc = [
  'boxShadow',
  'background',
  'backgroundImage',
  'backgroundSize',
  'backgroundPosition',
  'backgroundRepeat',
  'opacity'
];

const variants = [
  'textStyle',
  'colors',
  'buttons'
];

const all = [
  ...space,
  ...width,
  ...fontSize,
  ...color,
  ...typography,
  ...layout,
  ...flexbox,
  ...grid,
  ...borders,
  ...position,
  ...misc,
  ...variants
];

export const StyledInputs = {
  space,
  width,
  fontSize,
  color,
  typography,
  layout,
  flexbox,
  grid,
  borders,
  position,
  misc,
  variants,
  all
};
