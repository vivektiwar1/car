import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ExtramodulepriceService } from '../_services/extramoduleprice.service';
import { ExtraModulePrice } from '../models/ExtraModulePrice';

@Injectable()
export class ExtraModulePriceResolver implements Resolve<ExtraModulePrice> {

    constructor(private extraModulePriceService: ExtramodulepriceService, private router: Router,
        private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<ExtraModulePrice> {
        return this.extraModulePriceService.getDataForForm().pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}