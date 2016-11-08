import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent} from './components/header/header.component';
import { LanguageComponent} from './components/language/language.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, HeaderComponent, LanguageComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
