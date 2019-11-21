import { HostBinding, Directive } from '@angular/core';
import { css } from 'emotion';

import { computeStyles } from './styles';

// tslint:disable-next-line:directive-class-suffix
@Directive({})
// tslint:disable-next-line:directive-class-suffix
export class StyledComponent {
  // tslint:disable-next-line:variable-name
  @HostBinding('class') __classNames = '';

  private __applyStyles(styles) {
    console.log('Applying styles', {styles});
    const styledClass = computeStyles(css, styles, this);
    this.__classNames = styledClass;
  }
}
