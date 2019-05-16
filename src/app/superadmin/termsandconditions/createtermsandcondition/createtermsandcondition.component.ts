import { Component, OnInit } from '@angular/core';
import { TermsandconditionService } from '../../../_services/termsandcondition.service';
import { AlertifyService } from '../../../_services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TermsAndCondition } from '../../../models/TermsAndCondition';

@Component({
  selector: 'app-createtermsandcondition',
  templateUrl: './createtermsandcondition.component.html',
  styleUrls: ['./createtermsandcondition.component.css']
})
export class CreatetermsandconditionComponent implements OnInit {
  termsAndConditionForm: FormGroup;
  termsAndCondition: TermsAndCondition;
  addBtn: boolean;
  fileUploaded: null;
  countryid: string;
  constructor(private termAndConditionService: TermsandconditionService, private alertify: AlertifyService,
              private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.getFormData();
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      this.countryid = param.get('countryid');
      this.addBtn = true;
      this.termsAndConditionForm = this.fb.group({
        id: [''],
        name: ['', Validators.required],
        countryId: [this.countryid, Validators.required ],
        fileupload: [null]
      });
      if(id.toString() !== '0'){
        this.addBtn = false;
        this.termAndConditionService.getById(id).subscribe(data => {
          this.termsAndConditionForm.setValue({
            id: data.id,
            name: data.name,
            countryId: data.countryId,
            fileupload: null
          });
        }, error => {
          this.alertify.error('Could not retrieve data');
        });
      }
    });
  }

  fileSelectedEvent(event){
    this.termsAndConditionForm.get('fileupload').setValue(event.target.files[0]);
  }

  getFormData(): any {
    this.route.data.subscribe(data => {
      this.termsAndCondition = data['termsdata'];
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('id', this.termsAndConditionForm.get('id').value);
    formData.append('name', this.termsAndConditionForm.get('name').value);
    formData.append('countryId', this.termsAndConditionForm.get('countryId').value);
    formData.append('file', this.termsAndConditionForm.get('fileupload').value);
    this.termsAndCondition = Object.assign({}, this.termsAndConditionForm.value);
    if (formData.get('id') === '') {
      formData.set('id', '00000000-0000-0000-0000-000000000000')
      this.termAndConditionService.create(formData).subscribe(() => {
        this.alertify.success('Created successfully');
        this.router.navigate(['/countries/termsandconditions', this.countryid]);
      }, error => {
        this.alertify.error(error);
      });
    } else {
      this.termAndConditionService.update(this.termsAndCondition).subscribe(() => {
        this.router.navigate(['/termsandconditions']);
      }, error => {
        this.alertify.error(error);
      });
    }
  }

}
