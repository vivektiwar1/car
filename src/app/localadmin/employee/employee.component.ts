import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { User } from '../../models/User';
import { AlertifyService } from '../../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: User[];
  constructor(private authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
    this.getEmployees();
  }


  getEmployees() {
    this.authService.getEmployees().subscribe((_employees: User[]) => {
      this.employees = _employees;
      console.log(_employees)
    }, error => {
      this.alertify.error(error);
    });
  }

  editemployee(id){
    this.router.navigate(['/editemployee', id]);
  }

  deleteEmployee(id: string){
    this.alertify.confirm('Are you sure you want to delete this', () => {
      this.authService.deleteEmploee(id).subscribe(() => {
        this.router.navigate(['/employees']);
      }, error => {
        console.log(error);
        this.alertify.error(error);
      });
    });
  }
}
