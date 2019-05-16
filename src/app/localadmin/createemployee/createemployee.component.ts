import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';
import { User } from '../../models/User';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../models/Employee';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {
  employee: Employee;
  employeeForm: FormGroup;
  addBtn: boolean;
  roles: string[];

  constructor(private fb: FormBuilder, private authService: AuthService,
    private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.roles = ['LocalAdmin', 'Employee'];
    this.createEmployeeForm();
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      if (id.toString() !== '0') {
        this.editEmployee(id.toString());
      }
    });
  }

  createEmployeeForm() {
    this.addBtn = true;
    this.employeeForm = this.fb.group({
        Id: [''],
        FirstName: ['', Validators.required],
        LastName: ['', Validators.required],
        Email: ['', Validators.required],
        Address: ['', Validators.required],
        Phone: ['', Validators.required],
        UserName: ['', Validators.required],
        Role: ['']
    });
  }

  editEmployee(id: string) {
    this.authService.getEmployee(id).subscribe(data => {
      console.log(data);
      this.employeeForm.setValue({
        Id: data.id,
        FirstName: data.firstName,
        LastName: data.lastName,
        Email: data.email,
        Address: data.address,
        Phone: data.phone,
        UserName: data.userName,
        Role: ''
      });
    });
  }


  assignValue(role){
    this.employeeForm.patchValue({
      Role: role
    });
  }

  onSubmit() {
    this.employee = Object.assign({}, this.employeeForm.value);
    if (this.employee.Role === '') {
      this.alertify.error('Choose Role');
    } else {
      if (this.employee.id === '') {
        this.employee.id = '00000000-0000-0000-0000-000000000000';
        this.authService.registerEmployee(this.employee).subscribe(() => {
        this.alertify.success('Employee registered successfully');
      }, error => {
        this.alertify.error(error);
      });
      } else {
        this.authService.updateEmployee(this.employee).subscribe(() => {
          this.alertify.success('Updated successfully');
        }, error => {
          console.log(error);
          this.alertify.error(error);
        });
      }
    }
  }

}
