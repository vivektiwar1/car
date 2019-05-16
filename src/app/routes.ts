import { Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { PackageplanComponent } from './superadmin/packages/packageplan/packageplan.component';
import { CreatepackageComponent } from './superadmin/packages/createpackage/createpackage.component';
import { CountryListComponent } from './superadmin/countries/country-list/country-list.component';
import { CountryAddComponent } from './superadmin/countries/country-add/country-add.component';
import { DefinitionResolver } from './_resolvers/definition.resolver';
import { HomeComponent } from './home/home.component';
import { RegisterResolver } from './_resolvers/register.resolver';
import { RegisterComponent } from './register/register.component';
import { PackageplanpriceComponent } from './superadmin/packages/packageplanprice/packageplanprice.component';
import { CreatepackageplanpriceComponent } from './superadmin/packages/createpackageplanprice/createpackageplanprice.component';
import { ExtramoduleComponent } from './superadmin/extramodule/extramodule/extramodule.component';
import { ExtramodulepriceComponent } from './superadmin/extramodule/extramoduleprice/extramoduleprice.component';
import { CreateextramoduleComponent } from './superadmin/extramodule/createextramodule/createextramodule.component';
import { CreateextramodulepriceComponent } from './superadmin/extramodule/createextramoduleprice/createextramoduleprice.component';
import { LanguageComponent } from './superadmin/language/language/language.component';
import { CurrencysymbolComponent } from './superadmin/currencysymbol/currencysymbol/currencysymbol.component';
import { CreatelanguageComponent } from './superadmin/language/createlanguage/createlanguage.component';
import { CreatecurrencysymbolComponent } from './superadmin/currencysymbol/createcurrencysymbol/createcurrencysymbol.component';
import { VehiclecategoryListComponent } from './superadmin/VehicleCategories/vehiclecategory-list/vehiclecategory-list.component';
// tslint:disable-next-line:max-line-length
import { VehicleCategoryAddEditComponent } from './superadmin/VehicleCategories/vehicle-category-add-edit/vehicle-category-add-edit.component';
import { PackagePlanPriceResolver } from './_resolvers/packageprice.resolver';
import { ExtraModulePriceResolver } from './_resolvers/extramoduleprice.resolver';
import { CreatetermsandconditionComponent } from './superadmin/termsandconditions/createtermsandcondition/createtermsandcondition.component';
import { TermsandconditionComponent } from './superadmin/termsandconditions/termsandcondition/termsandcondition.component';
import { TermsResolver } from './_resolvers/terms.resolver';
import { CountryNotifySettingsComponent } from './superadmin/countries/country-notify-settings/country-notify-settings.component';
import { AdmindashboardComponent } from './superadmin/admindashboard/admindashboard.component';
import { VehiclecategoryComponent } from './localadmin/vehiclecategory/vehiclecategory.component';
import { CreatevehiclecategoryComponent } from './localadmin/createvehiclecategory/createvehiclecategory.component';
import { CreateemployeeComponent } from './localadmin/createemployee/createemployee.component';
import { EmployeeComponent } from './localadmin/employee/employee.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { AbcComponent } from './superadmin/abc/abc.component';
import { ProtocolComponent } from './superadmin/protocol/protocol.component';
import {CreateclientComponent} from './superadmin/clients/createclient/createclient.component';
import {ClientdetailsComponent} from './superadmin/clients/clientdetails/clientdetails.component';

// new code
import { ClientsComponent } from './superadmin/clients/clients.component';

export const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent, resolve: {countries: RegisterResolver} },
        {
            path: '',
            runGuardsAndResolvers: 'always',
            canActivate: [AuthGuard],
            children: [
                    { path: 'packages', component: PackageplanComponent, },
                    { path: 'editpackage/:id', component: CreatepackageComponent },
                    { path: 'countries', component: CountryListComponent },
                    { path: 'createcountry/:id', component: CountryAddComponent, resolve: {coyntrydataaddupdate: DefinitionResolver}  },
                    { path: 'countries/notifysettings/:id', component: CountryNotifySettingsComponent},
                    { path: 'packageplanprices/:id', component: PackageplanpriceComponent },
                    {
                        path: 'editpackageplanprice/:id/:packageid', component: CreatepackageplanpriceComponent,
                        resolve: { packageplanpricedata: PackagePlanPriceResolver }
                    },
                    { path: 'vehiclecategories', component: VehiclecategoryListComponent },
                    { path: 'editvehiclecategory/:id', component: VehicleCategoryAddEditComponent,
                        resolve: { coyntrydataaddupdate: DefinitionResolver }},
                    { path: 'extramodule', component: ExtramoduleComponent },
                    { path: 'extramoduleprice/:id', component: ExtramodulepriceComponent },
                    { path: 'editextramodule/:id', component: CreateextramoduleComponent },
                    {
                        path: 'editextramoduleprice/:id/:extramoduleid', component: CreateextramodulepriceComponent,
                        resolve: { extramodulepricedata: ExtraModulePriceResolver }
                    },
                    { path: 'languages', component: LanguageComponent },
                    { path: 'editlanguage/:id', component: CreatelanguageComponent },
                    { path: 'currencysymbols', component: CurrencysymbolComponent },
                    { path: 'editcurrencysymbol/:id', component: CreatecurrencysymbolComponent },
                    { path: 'countries/editterm/:id/:countryid', component: CreatetermsandconditionComponent,
                         resolve: { termsdata: TermsResolver } },
                    { path: 'countries/termsandconditions/:id', component: TermsandconditionComponent },
                    { path: 'dashboard/superadmin', component: AdmindashboardComponent },
                    { path: 'vehicletypes', component: VehiclecategoryComponent },
                    { path: 'editvehicletype/:id', component: CreatevehiclecategoryComponent },
                    { path: 'editemployee/:id', component: CreateemployeeComponent },
                    { path: 'employees', component: EmployeeComponent },
                    { path: 'editprofile/:id', component: EditprofileComponent },
                    { path: 'superadmin/abc', component: AbcComponent },
                    { path: 'superadmin/clients', component: ClientsComponent },
                    { path: 'superadmin/protocol', component: ProtocolComponent },
                    { path: 'editclient/:id', component: CreateclientComponent },
                    { path: 'superadmin/clientdetails', component: ClientdetailsComponent }


                    
                ]
        },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
