import { NgModule, ModuleWithProviders } from '@angular/core';

import { ThemeProvider } from './provider';
import { Theme } from './types';

@NgModule()
export class StyledModule {
  static provideTheme(themeConfig: Theme): ModuleWithProviders {
    ThemeProvider.themeConfig = themeConfig;

    return {
      ngModule: StyledModule
    };
  }
}
