import { Component, OnInit } from '@angular/core';
import { TermsandconditionService } from '../../../_services/termsandcondition.service';
import { AlertifyService } from '../../../_services/alertify.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TermsAndCondition } from '../../../models/TermsAndCondition';

@Component({
  selector: 'app-termsandcondition',
  templateUrl: './termsandcondition.component.html',
  styleUrls: ['./termsandcondition.component.css']
})
export class TermsandconditionComponent implements OnInit {
  termsAndConditions: TermsAndCondition[];
  countryid: string;
  constructor(private termsAndConditionService: TermsandconditionService, private alertify: AlertifyService
    , private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const params: any = this.route.snapshot.params;
    this.countryid = params.id.toString();
    this.getTermsAndConditions(this.countryid);
  }

  getTermsAndConditions(countryid) {
    this.termsAndConditionService.gerTermsByCountry(countryid).subscribe((_terms: TermsAndCondition[]) => {
      console.log(_terms);
      this.termsAndConditions = _terms;
    }, error => {
      this.alertify.error(error);
    });
  }

  editTerm(id: string) {
    this.router.navigate(['/countries/editterm', id, this.countryid]);
  }

  deleteTerm(id: string){
    this.alertify.confirm('Are you sure you want to delete this', () => {
      this.termsAndConditionService.delete(id).subscribe(() => {
        this.alertify.success('Deleted successfully');
        this.getTermsAndConditions(this.countryid);
      }, error => {
        this.alertify.error(error);
      });
    });
  }


}
