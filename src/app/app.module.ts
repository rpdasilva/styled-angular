import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StyledModule, ThemeProvider } from 'angular-emotion';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { BoxComponent } from './box/box.component';
import { theme } from './theme';

// ThemeProvider.themeConfig = theme;

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    StyledModule.provideTheme(theme)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
