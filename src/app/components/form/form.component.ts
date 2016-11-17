import {Component, Input, OnInit, DoCheck} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService} from './form.service';

@Component({
  selector: 'eform',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css'],
  providers: [FormService]
})

export class FormComponent implements OnInit {
  @Input() preferredLanguage:string;
  labels: Object = this.formService.getLabels(this.preferredLanguage);
  caseOptions: Object[] = this.formService.getCaseOptions(this.preferredLanguage);
  flightOptions: Object[] = this.formService.getFlightOptions();
  refund: any;
  routingCodes: string[];
  wellnetOptions: Object[];
  paymentMethods: Object[];
  acknowledgementMesssage: Object[];
  chineseCurrency: string;
  currencies: string[];
  eform: FormGroup;
  typeOptions: Object[] = [''];
  submittedWithErrors: boolean = false;
  selectedHomeCode: string = "MY";
  selectedMobileCode: string = "MY";
  dialCodes: any = this.formService.getDialCodes() //.map((country)=>{
  //   return '<option value="'+country.dial+'">'+country.name+' ('+country.code+')';
  // }).join("</option>").concat("</option>")
  timemask = [/[0-1]/, /[1-9]/, ':', /[0-5]/, /[0-9]/];

  constructor(
    private formService: FormService,
    private formBuilder: FormBuilder
  ){}

  ngOnInit(){
    this.eform = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z]{1,}')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z]{1,}')]],
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")]],
      mobilenumdialcode: ['', Validators.required],
      mobilenum: [60, [Validators.required, Validators.pattern('[0-9]{5,}')]],
      homenumdialcode: [''],
      homenum: [60],
      case: ['', Validators.required],
      type: ['', Validators.required],
      bookingnumber: [''],
      flightcode: ['', Validators.required],
      flightnumber: ['', Validators.required],
      flightdate: [''],
      flighttime: [''],
      flighthour: ['am'],
      attachment1: [''],
      attachment2: [''],
      attachment3: [''],
      feedback: ['', Validators.required],
      paymentmethod: ['1'],
      bank: this.formBuilder.group({
        currency: [''],
        name: [''],
        accountholdername: [''],
        accountnumber: [''],
        branch: [''],
        province: [''],
        city: [''],
        routecode: [''],
        routenumber: ['']
      }),
      banknonenglish: this.formBuilder.group({
        name: [''],
        accountholdername: [''],
        branch: [''],
        province: [''],
        city: ['']
      }),
      wellnet: this.formBuilder.group({
        bankcode: [''],
        branchcode: [''],
        accounttype: ['']
      }),
      acknowledged: ['']
    })
    this.subscribeToPaymentMethodChanges();
  }

  subscribeToPaymentMethodChanges(){
    const paymentMethodChanges = this.eform.controls['paymentmethod'].valueChanges;
    const bankSubFields = this.eform.controls['bank']['controls'];
    const wellnetSubFields = this.eform.controls['wellnet']['controls'];
    paymentMethodChanges.subscribe((paymentMethodValue:any)=>{
      this.removeRequired(bankSubFields);
      if (paymentMethodValue === '2' || paymentMethodValue === '3'){
        this.setRequired(bankSubFields);
        this.currencies = this.formService.getCurrencies();
        this.routingCodes = this.formService.getRoutingCodes();
      } else if (paymentMethodValue === '5') {
        this.wellnetOptions = this.formService.getWellnetOptions(this.preferredLanguage);
        this.setRequired(['name', 'accountholdername', 'accountnumber'], 'bank');
        this.setRequired(wellnetSubFields);
        this.resetField(bankSubFields, ['name', 'accountholdername', 'accountnumber']);
      } else {
        this.resetField(bankSubFields);
      }
    })
  }
  ngDoCheck(){
    this.labels = this.formService.getLabels(this.preferredLanguage);
    this.caseOptions = this.formService.getCaseOptions(this.preferredLanguage);
    this.fetchTypeOption(this.eform.controls['case'].value);
    if (this.eform.controls['case'].value === "8"){
      this.paymentMethods = this.formService.getPaymentMethods(this.preferredLanguage);
      this.acknowledgementMesssage = this.formService.getAcknowledgementMessage(this.preferredLanguage);
      this.setRequired([this.eform.controls['acknowledged']]);
    }
  }
  haha(eformValues:any, eformValid:boolean){
    console.log(eformValues)
    if (!eformValid) { return this.submittedWithErrors = true; }

  }
  setMobileDialInfo(selected:any){
    this.selectedMobileCode = selected.code;
    this.eform.patchValue({mobilenum:selected.dial});
  }
  setHomeDialInfo(selected:any){
    this.selectedHomeCode = selected.code;
    this.eform.patchValue({homenum:selected.dial});
  }
  setFlightDate(date:string){
    const parsedDate = new Date(date);
    const formattedDate = parsedDate.getDate()+'-'+(parsedDate.getMonth()+1)+'-'+parsedDate.getFullYear();
    this.eform.patchValue({flightdate: formattedDate});
  }
  fetchTypeOption(option:string){
    this.typeOptions = this.formService.getTypeOptions(this.preferredLanguage, option);
  }
  bindType(value:string){
    this.refund = this.typeOptions.filter((typeData:any)=>{
      return typeData.value === value;
    })[0];
    console.log(this.refund.popup)
  }
  validateNonUnicode(input:any, field:string){
    const chineseUnicodePattern = /[\u2E80-\u2EFF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF\ud840-\ud868\udc00-\udfff\ud869\udc00-\udede]/g;
    if (input.replace(chineseUnicodePattern, "").length !== 0){
      this.eform.controls['banknonenglish']['controls'][field].reset();
    }
  }
  checkIfChineseCurrency(currency:string){
    if (currency === "cny" || currency === "twd"){
      this.chineseCurrency = currency;
      this.setRequired(this.eform.controls['banknonenglish']['controls']);
    } else {
      this.chineseCurrency = '';
      this.removeRequired(this.eform.controls['banknonenglish']['controls']);
    }
  }
  resetCurrency(){
    this.eform.controls['bank']['controls']['currency'].reset();
    this.chineseCurrency = '';
  }
  triggerValidation(){
    this.submittedWithErrors = true;
  }
  setRequired(fields:any, formgroup:string = ''){
    if (fields instanceof Array && formgroup){
      fields.map((field)=>{
        this.eform.controls[formgroup]['controls'][field].setValidators(Validators.required);
        this.eform.controls[formgroup]['controls'][field].updateValueAndValidity();
      })
    } else {
      Object.keys(fields).map((field)=>{
        fields[field].setValidators(Validators.required);
        fields[field].updateValueAndValidity();
      })
    }
  }
  removeRequired(fields:Object){
    Object.keys(fields).map((field)=>{
      fields[field].setValidators(null);
      fields[field].updateValueAndValidity();
    })
  }
  resetField(fields:Object, exclude:string[] = ['']){
    Object.keys(fields).map((field)=>{
      if (exclude.indexOf(field) === -1){
        fields[field].reset();
      }
    })
  }
}
