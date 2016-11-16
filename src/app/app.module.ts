import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent} from './components/header/header.component';
import { LanguageComponent} from './components/language/language.component';
import { FormComponent} from './components/form/form.component';
import { FooterComponent} from './components/footer/footer.component';
import { DatepickerModule} from 'ng2-bootstrap/components/datepicker';
import { ModalModule} from 'ng2-bootstrap/components/modal';
import { TimepickerModule} from 'ng2-bootstrap/components/timepicker'
import { TextMaskModule} from 'angular2-text-mask';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, DatepickerModule, ModalModule, TimepickerModule, TextMaskModule],
  declarations: [AppComponent, HeaderComponent, LanguageComponent, FormComponent, FooterComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
