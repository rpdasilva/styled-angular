import { Component } from "@angular/core";
import { space } from "styled-system";

import { Styled, StyledComponent, css } from "angular-emotion";
// Why is this necessary?
import { StyledInputs } from "../../../projects/angular-emotion/src/lib/inputs";

const color = css`
  color: black;
`;
const borderStyle = css`
  border-style: solid;
`;

@Styled(
  space,
  {
    borderWidth: "4px",
    borderRadius: "8px",
  },
  `border-color: blue;`,
  borderStyle,
  (props) => css`
    background-color: ${props.bg || "hotpink"};
    font-size: 1.5rem;
    ${color}
    &:hover {
      color: ${props.color || "white"};
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
  selector: "button",
  template: `<ng-content></ng-content>`,
  // tslint:disable-next-line:no-inputs-metadata-property
  inputs: [...StyledInputs.color, ...StyledInputs.space],
})
export class ButtonComponent extends StyledComponent {}
