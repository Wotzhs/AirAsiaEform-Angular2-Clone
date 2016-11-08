import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent} from './components/header/header.component';
import { LanguageComponent} from './components/language/language.component';
import { FormComponent} from './components/form/form.component';
import { FooterComponent} from './components/footer/footer.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, HeaderComponent, LanguageComponent, FormComponent, FooterComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
