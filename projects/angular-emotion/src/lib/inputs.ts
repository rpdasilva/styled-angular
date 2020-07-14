const space = [
  'margin',
  'm',
  'marginTop',
  'mt',
  'marginRight',
  'mr',
  'marginBottom',
  'mb',
  'marginLeft',
  'ml',
  'marginX',
  'mx',
  'marginY',
  'my',
  'padding',
  'p',
  'paddingTop',
  'pt',
  'paddingRight',
  'pr',
  'paddingBottom',
  'pb',
  'paddingLeft',
  'pl',
  'paddingX',
  'px',
  'paddingY',
  'py'
];

const color = [
  'color',
  'bg',
  'backgroundColor',
  'opacity'
];

const typography = [
  'fontFamily',
  'fontSize',
  'fontWeight',
  'lineHeight',
  'letterSpacing',
  'textAlign',
  'fontStyle'
];

const layout = [
  'width',
  'height',
  'display',
  'minWidth',
  'minHeight',
  'maxWidth',
  'maxHeight',
  'size',
  'verticalAlign',
  'overflow',
  'overflowX',
  'overflowY'
];

const flexbox = [
  'alignItems',
  'alignContent',
  'justifyItems',
  'justifyContent',
  'flexWrap',
  'flexDirection',
  'flex',
  'flexGrow',
  'flexShrink',
  'flexBasis',
  'justifySelf',
  'alignSelf',
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
  'gridTemplateRows',
  'gridTemplateAreas',
  'gridArea'
];

const borders = [
  'border',
  'borderWidth',
  'borderStyle',
  'borderColor',
  'borderRadius',
  'borderTop',
  'borderTopWidth',
  'borderTopStyle',
  'borderTopColor',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderRight',
  'borderRightWidth',
  'borderRightStyle',
  'borderRightColor',
  'borderBottom',
  'borderBottomWidth',
  'borderBottomStyle',
  'borderBottomColor',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderLeft',
  'borderLeftWidth',
  'borderLeftStyle',
  'borderLeftColor',
  'borderX',
  'borderY'
];

const position = [
  'position',
  'top',
  'right',
  'bottom',
  'left',
  'zIndex'
];

const background = [
  'background',
  'backgroundImage',
  'backgroundSize',
  'backgroundPosition',
  'backgroundRepeat'
];

const shadow = [
  'textShadow',
  'boxShadow'
];

const variant = [
  'textStyle',
  'colors',
  'buttons'
];

const theme = [
  'theme'
];

const all = [
  ...space,
  ...color,
  ...typography,
  ...layout,
  ...flexbox,
  ...grid,
  ...borders,
  ...position,
  ...background,
  ...shadow,
  ...variant
];

export const StyledInputs = {
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  borders,
  position,
  background,
  shadow,
  theme,
  variant,
  all
};
