import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TextComponent } from './text/text.component';
import { SearcherComponent } from './searcher/searcher.component';
import { FooterComponent } from './footer/footer.component';
import { CardsFooterComponent } from './cards-footer/cards-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TextComponent,
    SearcherComponent,
    FooterComponent,
    CardsFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
