import { PackagePlan } from './PackagePlan';
import { Country } from './Country';
import { CurrencySymbol } from './CurrencySymbol';

export interface PackagePlanPrice {
    id: string;
    currencySymbolId: string;
    countryId: string;
    packagePlanId: string;
    price: number;

    country: Country;
    currencySymbol: CurrencySymbol;
    packagePlan: PackagePlan;

    // data for add and update
    countries: Country[];
    packages: PackagePlan[];
    currencies: CurrencySymbol[];
}
