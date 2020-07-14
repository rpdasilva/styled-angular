import { Component } from '@angular/core';
import {
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow
} from 'styled-system';

import { Styled, StyledComponent } from 'angular-emotion';
// Why is this necessary?
import { StyledInputs } from '../../../projects/angular-emotion/src/lib/inputs';

@Styled(
  `display: block;`,
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow
)
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'box',
  template: `<ng-content></ng-content>`,
  // tslint:disable-next-line:no-inputs-metadata-property
  inputs: [...StyledInputs.all]
})
export class BoxComponent extends StyledComponent {}
