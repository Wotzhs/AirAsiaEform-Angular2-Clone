import {Component, OnInit} from '@angular/core';
import {LanguagesService} from './language.service';

@Component({
  selector: 'language',
  templateUrl: 'language.component.html',
  styleUrls: ['language.component.css'],
  providers: [LanguagesService]
})

export class LanguageComponent implements OnInit {
  languages: Object[];

  constructor(
    private languagesService: LanguagesService
  ){}

  ngOnInit(): void{
    this.languages = this.languagesService.getLanguages();
  }
}
