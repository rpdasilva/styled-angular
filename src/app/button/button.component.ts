import { Component, HostBinding } from '@angular/core';
import { space } from 'styled-system';

import { Styled, StyledComponent, css } from 'angular-emotion';
// Why is this necessary in dev
import { StyledInputs } from '../../../projects/angular-emotion/src/lib/inputs';

const color = css`color: blue`;

console.log('Space', space({ mt: 2 }));

@Styled(
  space,
  props => css`
    background-color: ${props.bg};
    padding: 1rem;
    font-size: 1.5rem;
    border: none;
    ${color};
    &:hover {
      color: ${props.color};
    }
    &:active {
      background-color: rebeccapurple;
    }
    &:focus {
      outline: 0.25rem solid tomato;
    }
  `
)
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'button',
  template: `<ng-content></ng-content>`,
  // tslint:disable-next-line:no-inputs-metadata-property
  inputs: [
    ...StyledInputs.color,
    ...StyledInputs.space
  ]
})
export class ButtonComponent extends StyledComponent {}
