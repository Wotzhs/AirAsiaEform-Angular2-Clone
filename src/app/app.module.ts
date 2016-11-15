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

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, DatepickerModule, ModalModule, TimepickerModule],
  declarations: [AppComponent, HeaderComponent, LanguageComponent, FormComponent, FooterComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
