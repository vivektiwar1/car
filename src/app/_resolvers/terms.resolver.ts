import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TermsAndCondition } from '../models/TermsAndCondition';
import { TermsandconditionService } from '../_services/termsandcondition.service';

@Injectable()
export class TermsResolver implements Resolve<TermsAndCondition> {

    constructor(private termsService: TermsandconditionService, private router: Router,
        private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<TermsAndCondition> {
        return this.termsService.getFormData().pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}