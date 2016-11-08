import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent} from './components/header/header.component';
import { LanguageComponent} from './components/language/language.component';
import { FormComponent} from './components/form/form.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HeaderComponent, LanguageComponent, FormComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
