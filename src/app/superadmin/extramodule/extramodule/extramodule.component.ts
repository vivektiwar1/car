import { Component, OnInit } from '@angular/core';
import { ExtramoduleService } from '../../../_services/extramodule.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ExtraModule } from '../../../models/extramodule';
import { AlertifyService } from '../../../_services/alertify.service';

@Component({
  selector: 'app-extramodule',
  templateUrl: './extramodule.component.html',
  styleUrls: ['./extramodule.component.css']
})
export class ExtramoduleComponent implements OnInit {
  extraModules: ExtraModule[];

  constructor(private extraModuleService: ExtramoduleService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
    this.getExtraModules();
  }

  editExtraModule(id: string) {
    this.router.navigate(['/editextramodule', id]); //
  }
  getExtraModules() {
    this.extraModuleService.getExtraModules().subscribe((extraModules: ExtraModule[]) => {
      this.extraModules = extraModules;
    }, error => {
      this.alertify.error(error);
    });
  }

  deleteExtraModule(id: string){
      this.alertify.confirm('Are you sure you want to delete this', () => {
        this.extraModuleService.delete(id).subscribe(() => {
          this.getExtraModules();
        }, error => {
          this.alertify.error(error);
        });
      });
  }

}
