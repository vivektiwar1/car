import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PackageplanpriceService } from '../_services/packageplanprice.service';
import { PackagePlanPrice } from '../models/PackagePlanPrice';

@Injectable()
export class PackagePlanPriceResolver implements Resolve<PackagePlanPrice> {

    constructor(private packagePlanPriceService: PackageplanpriceService, private router: Router,
        private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<PackagePlanPrice> {
        return this.packagePlanPriceService.getDataForForm().pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}