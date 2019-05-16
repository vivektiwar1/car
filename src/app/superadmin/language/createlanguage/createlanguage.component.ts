import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../_services/language.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../../../_services/alertify.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Language } from '../../../models/Language';

@Component({
  selector: 'app-createlanguage',
  templateUrl: './createlanguage.component.html',
  styleUrls: ['./createlanguage.component.css']
})
export class CreatelanguageComponent implements OnInit {
  languageForm: FormGroup;
  language: Language;
  addBtn: boolean;
  constructor(private languageService: LanguageService, private router: Router, private route: ActivatedRoute,
              private alertify: AlertifyService, private fb: FormBuilder) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.addBtn = true;
      const id = param.get('id');
      this.languageForm = this.fb.group({
        id: [''],
        name: ['', Validators.required],
        code: ['', Validators.required]
      });
      if (id.toString() !== '0') {
        this.addBtn = false;
        this.languageService.getLanguage(id).subscribe(data => {
          this.languageForm.setValue({
            id: data.id,
            name: data.name,
            code: data.code
          });
        });
      }
    });
  }

  onSubmit() {

    this.language = Object.assign({}, this.languageForm.value);
    if (this.language.id === '') {
      this.language.id = '00000000-0000-0000-0000-000000000000';
      this.languageService.create(this.language).subscribe(() => {
        this.alertify.success('Created successfully');
        this.router.navigate(['/languages']);
      }, error => {
        this.alertify.error(error);
      });
    } else {
      this.languageService.update(this.language).subscribe(() => {
        this.router.navigate(['/languages']);
      }, error => {
        this.alertify.error(error);
      });
    }
  }

}
