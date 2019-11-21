import { StyledComponent } from './component';
import { ClassLike } from './utils';

const ngComponentDefAlias = 'ɵcmp';

export function Styled(...styles) {
  // tslint:disable-next-line:only-arrow-functions
  return function <T extends ClassLike>(component: T) {
    if (!(component.prototype instanceof StyledComponent)) {
      throw new Error('Class must extend StyledComponent');
    }

    console.log({component});

    const styledBase = Object.getPrototypeOf(component.prototype);
    const { doCheck: componentDoCheck } = component[ngComponentDefAlias];
    const { __applyStyles } = styledBase;

    component[ngComponentDefAlias].doCheck = function() {
      __applyStyles.call(this, styles);
      console.log('Apply styles', styles);
      if (componentDoCheck) {
        componentDoCheck.call(this);
      }
    };

    return component;
  };
}
