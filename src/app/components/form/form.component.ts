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
  paymentMethods: Object[];
  acknowledgementMesssage: Object[];
  eform: FormGroup;
  typeOptions: Object[] = [''];
  submitted: boolean = false;
  selectedHomeCode: string = "MY";
  selectedMobileCode: string = "MY";
  dialCodes: any = this.formService.getDialCodes() //.map((country)=>{
  //   return '<option value="'+country.dial+'">'+country.name+' ('+country.code+')';
  // }).join("</option>").concat("</option>")

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
      flighthour: [''],
      attachment1: [''],
      attachment2: [''],
      attachment3: [''],
      feedback: ['', Validators.required],
      bank: this.formBuilder.group({
        paymentmethod: ['1'],
        name: [''],
        accountholdername: [''],
        accountnumber: [''],
        branch: [''],
        currency: [''],
        routecode: [''],
        routenumber: ['']
      })
    })
    this.subscribeToCaseChanges();
  }

  subscribeToCaseChanges(){
    const caseCategoryChanges = this.eform.controls['case'].valueChanges;
    const bankSubFields = this.eform.controls['bank']['controls'];
    caseCategoryChanges.subscribe((change:any)=>{
      if (change === "8" ){
        Object.keys(bankSubFields).map((fieldName)=>{
          bankSubFields[fieldName].setValidators(Validators.required)
          bankSubFields[fieldName].updateValueAndValidity();
        })
        this.paymentMethods = this.formService.getPaymentMethods(this.preferredLanguage);
        this.acknowledgementMesssage = this.formService.getAcknowledgementMessage(this.preferredLanguage);
      }
      else {
        Object.keys(bankSubFields).map((fieldName)=>{
          bankSubFields[fieldName].setValidators(null)
          bankSubFields[fieldName].updateValueAndValidity();
        })
      }
    })
  }

  ngDoCheck(){
    this.labels = this.formService.getLabels(this.preferredLanguage);
    this.caseOptions = this.formService.getCaseOptions(this.preferredLanguage);
    if (this.eform.controls['case'].value === "8"){
      this.paymentMethods = this.formService.getPaymentMethods(this.preferredLanguage);
      this.acknowledgementMesssage = this.formService.getAcknowledgementMessage(this.preferredLanguage);
    }
  }
  haha(a:any){
    // alert(JSON.stringify(a))
    console.log(a)
    // this.eform.patchValue({mobilenumdialcode: a.code})
    this.submitted = true;
  }
  setMobileDialInfo(selected:any){
    this.selectedMobileCode = selected.code;
    this.eform.patchValue({mobilenum:selected.dial});
  }
  setHomeDialInfo(selected:any){
    this.selectedHomeCode = selected.code;
    this.eform.patchValue({homenum:selected.dial});
  }
  fetchTypeOption(option:string){
    this.typeOptions = this.formService.getTypeOptions(this.preferredLanguage, option);
  }
}
