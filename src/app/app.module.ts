import { UserService } from './_services/user.service';
import { AuthGuard } from './guard/auth.guard';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule,  PaginationModule, ButtonsModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AuthService } from './_services/auth.service';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { LoginComponent } from './login/login.component';
import { LeftPartComponent } from './left-part/left-part.component';
import { RegisterResolver } from './_resolvers/register.resolver';
import { DatePipe } from '@angular/common';
import { ListsResolver } from './_resolvers/lists.resolver';
import { PackageplanComponent } from './superadmin/packages/packageplan/packageplan.component';
import { CreatepackageComponent } from './superadmin/packages/createpackage/createpackage.component';
import { PackageplanService } from './_services/packageplan.service';
import { CountryListComponent } from './superadmin/countries/country-list/country-list.component';
import { CountryAddComponent } from './superadmin/countries/country-add/country-add.component';
import { DefinitionResolver } from './_resolvers/definition.resolver';
import { PackageplanpriceComponent } from './superadmin/packages/packageplanprice/packageplanprice.component';
import { CreatepackageplanpriceComponent } from './superadmin/packages/createpackageplanprice/createpackageplanprice.component';
import { PackageplanpriceService } from './_services/packageplanprice.service';
import { CountryService } from './_services/country.service';
import { VehiclecategoryListComponent } from './superadmin/VehicleCategories/vehiclecategory-list/vehiclecategory-list.component';
import { VehicleCategoryAddEditComponent } from './superadmin/VehicleCategories/vehicle-category-add-edit/vehicle-category-add-edit.component';
import { LeftNavComponentComponent } from './left-nav-component/left-nav-component.component';
import { MainNavBarComponentComponent } from './main-nav-bar-component/main-nav-bar-component.component';
import { ExtramoduleComponent } from './superadmin/extramodule/extramodule/extramodule.component';
import { ExtramodulepriceComponent } from './superadmin/extramodule/extramoduleprice/extramoduleprice.component';
import { CreateextramoduleComponent } from './superadmin/extramodule/createextramodule/createextramodule.component';
import { CreateextramodulepriceComponent } from './superadmin/extramodule/createextramoduleprice/createextramoduleprice.component';
import { ExtramoduleService } from './_services/extramodule.service';
import { ExtramodulepriceService } from './_services/extramoduleprice.service';
import { LanguageService } from './_services/language.service';
import { CurrencysymbolService } from './_services/currencysymbol.service';
import { LanguageComponent } from './superadmin/language/language/language.component';
import { CreatelanguageComponent } from './superadmin/language/createlanguage/createlanguage.component';
import { CurrencysymbolComponent } from './superadmin/currencysymbol/currencysymbol/currencysymbol.component';
import { CreatecurrencysymbolComponent } from './superadmin/currencysymbol/createcurrencysymbol/createcurrencysymbol.component';
import { PackagePlanPriceResolver } from './_resolvers/packageprice.resolver';
import { ExtraModulePriceResolver } from './_resolvers/extramoduleprice.resolver';
import { TermsandconditionComponent } from './superadmin/termsandconditions/termsandcondition/termsandcondition.component';
import { CreatetermsandconditionComponent } from './superadmin/termsandconditions/createtermsandcondition/createtermsandcondition.component';
import { TermsandconditionService } from './_services/termsandcondition.service';
import { TermsResolver } from './_resolvers/terms.resolver';
import { CountryNotifySettingsComponent } from './superadmin/countries/country-notify-settings/country-notify-settings.component';
import { AdmindashboardComponent } from './superadmin/admindashboard/admindashboard.component';
import { VehicletypeService } from './_services/vehicletype.service';
import { VehiclecategoryComponent } from './localadmin/vehiclecategory/vehiclecategory.component';
import { CreatevehiclecategoryComponent } from './localadmin/createvehiclecategory/createvehiclecategory.component';
import { CreateemployeeComponent } from './localadmin/createemployee/createemployee.component';
import { EmployeeComponent } from './localadmin/employee/employee.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ClientsComponent } from './superadmin/clients/clients.component';
import { AbcComponent } from './superadmin/abc/abc.component';
import { ProtocolComponent } from './superadmin/protocol/protocol.component';
import { CreateclientComponent } from './superadmin/clients/createclient/createclient.component';
import { ClientdetailsComponent } from './superadmin/clients/clientdetails/clientdetails.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function getAccessToken(): string {
  return localStorage.getItem('token');
}

export const jwtConfig = {
  tokenGetter: getAccessToken
};

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      LoginComponent,
      LeftPartComponent,
      PackageplanComponent,
      CreatepackageComponent,
      CountryListComponent,
      PackageplanpriceComponent,
      CreatepackageplanpriceComponent,
      CountryAddComponent,
      ExtramoduleComponent,
      ExtramodulepriceComponent,
      CreateextramoduleComponent,
      CreateextramodulepriceComponent,
      LanguageComponent,
      CreatelanguageComponent,
      CurrencysymbolComponent,
      CreatecurrencysymbolComponent,
      LeftNavComponentComponent,
      MainNavBarComponentComponent,
      VehicleCategoryAddEditComponent,
      VehiclecategoryListComponent,
      TermsandconditionComponent,
      CreatetermsandconditionComponent,
      CountryNotifySettingsComponent,
      AdmindashboardComponent,
      VehiclecategoryComponent,
      CreatevehiclecategoryComponent,
      CreateemployeeComponent,
      EmployeeComponent,
      EditprofileComponent,
      ClientsComponent,
      AbcComponent,
      ProtocolComponent,
      CreateclientComponent,
      ClientdetailsComponent
   ],
   imports: [
      BrowserModule,
      HttpModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      ReactiveFormsModule,
      PaginationModule.forRoot(),
      ButtonsModule.forRoot(),
      HttpClientModule,
      TranslateModule.forRoot(),
      JwtModule.forRoot({
         config: {
           tokenGetter: getAccessToken,
           whitelistedDomains: ['localhost:51209'],
           blacklistedRoutes: ['localhost:51209/api/account', 'localhost:51209/api/login', 'localhost:51209/api/register','localhost:51209/api/refreshToken']
         }
       },)
   ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    ErrorInterceptorProvider,
    RegisterResolver,
    DatePipe,
    ListsResolver,
    PackageplanService,
    PackageplanpriceService,
    CountryService,
    DefinitionResolver,
    ExtramoduleService,
    ExtramodulepriceService,
    LanguageService,
    CurrencysymbolService,
    PackagePlanPriceResolver,
    ExtraModulePriceResolver,
    TermsandconditionService,
    TermsResolver,
    VehicletypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
