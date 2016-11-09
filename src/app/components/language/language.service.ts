import {Injectable} from '@angular/core';

const LANGUAGES: any[] = [
    {label: "Please select your preferred language", value:"en-gb", display:"English"},
    {label: "언어를 선택하세요", value:"ko-kr", display:"한국어"},
    {label: "ご希望の言語をお選びください", value:"ja-jp", display:"日本語"},
    {label: "Sila pilih bahasa", value:"ms-my", display:"Bahasa Melayu"},
    {label: "Pilih bahasa anda", value:"id-id", display:"Bahasa Indonesia"},
    {label: "选择您的首选语言", value:"zh-cn", display:"简体中文"},
    {label: "請選擇語言", value:"zh-hk", display:"繁體中文"},
    {label: "กรุณาเลือกภาษาที่คุณต้องการ", value:"th-th", display:"ภาษาไทย"},
]

@Injectable()
export class LanguagesService {
  getLanguages(){
    return LANGUAGES;
  }
}
