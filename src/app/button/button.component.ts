import { Component } from '@angular/core';
import { space } from 'styled-system';

import { Styled, StyledComponent, StyledInputs, css } from 'angular-emotion';
// Why is this necessary?
// import { StyledInputs } from '../../../projects/angular-emotion/src/lib/inputs';

const color = css`color: blue`;

console.log('Space', space({ mt: 2, px: 3 }));

@Styled(
  space,
  props => css`
    background-color: ${props.bg};
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
  template: `
    <ng-content></ng-content>
    <div>{{inputs.join(', ')}}</div>
  `,
  // tslint:disable-next-line:no-inputs-metadata-property
  inputs: [
    'color',
    'bg',
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
  ]
  // inputs: [
  //   ...StyledInputs.color,
  //   ...StyledInputs.space
  // ]
})
export class ButtonComponent extends StyledComponent {
  inputs = [
    ...StyledInputs.color,
    ...StyledInputs.space
  ];
}
