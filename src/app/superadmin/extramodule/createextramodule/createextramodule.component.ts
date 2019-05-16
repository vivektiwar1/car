import { Component, OnInit } from '@angular/core';
import { ExtramoduleService } from '../../../_services/extramodule.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ExtraModule } from '../../../models/extramodule';
import { AlertifyService } from '../../../_services/alertify.service';

@Component({
  selector: 'app-createextramodule',
  templateUrl: './createextramodule.component.html',
  styleUrls: ['./createextramodule.component.css']
})
export class CreateextramoduleComponent implements OnInit {

  extraModuleForm: FormGroup;
  extraModule: ExtraModule;
  addBtn: boolean;

  constructor(private extraModuleService: ExtramoduleService, private fb: FormBuilder,
              private router: Router, private route: ActivatedRoute, private alertify: AlertifyService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      this.addBtn = true;
      this.extraModuleForm = this.fb.group({
        id: [''],
        name: ['', Validators.required],
        description: [''],
      });
      if (id.toString() !== '0') {
        this.extraModuleService.getExtraModule(id.toString()).subscribe((data: ExtraModule ) => {
          this.addBtn = false;
          this.extraModuleForm.
          setValue
          ({  id: data.id,
              name: data.name,
              description: data.description
          });
        });
      }
    });
  }

  onSubmit() {
    this.extraModule = Object.assign({}, this.extraModuleForm.value);
    if (this.extraModule.id === '') {
      this.extraModule.id = '00000000-0000-0000-0000-000000000000';
      this.extraModuleService.create(this.extraModule).subscribe(() => {
        this.alertify.success('Created  successfully');
        this.router.navigate(['/extramodule']);
      }, error => {
        this.alertify.error(error);
      });
    } else {
      this.extraModuleService.update(this.extraModule).subscribe(() => {
        this.router.navigate(['/extramodule']);
      });
    }
  }
}
