export type CssParser = (...args) => string;

export const computeStyles = (
  cssParser: CssParser,
  styles: (string | { [key: string]: string | CssParser } | CssParser)[],
  props: any
)  => {
  const cssArgs = styles.map(style =>
    typeof style === 'function' ? style(props) : style);

  return cssParser(...cssArgs);
};
