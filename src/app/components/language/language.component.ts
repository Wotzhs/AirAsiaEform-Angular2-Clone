import {Component, OnInit} from '@angular/core';
import {LanguagesService} from './language.service';

@Component({
  selector: 'language',
  templateUrl: 'language.component.html',
  styleUrls: ['language.component.css'],
  providers: [LanguagesService]
})

export class LanguageComponent implements OnInit {
  languages: any[] = this.languagesService.getLanguages();
  preferredLanguage: string = "en-gb";
  languageLabel: string;

  constructor(
    private languagesService: LanguagesService
  ){}

  ngOnInit():void{
    this.refreshLanguageLabel(this.preferredLanguage);
  }

  refreshLanguageLabel =(preferredLanguage: string)=>{
    this.languageLabel = this.languages.filter((language)=>{
      return language.value === preferredLanguage;
    })[0]['label']
  }

  updatePreferredLanguage = (language:string) =>{
    this.preferredLanguage = language;
    this.refreshLanguageLabel(this.preferredLanguage)
  }
}
