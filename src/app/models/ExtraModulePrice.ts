import { ExtraModule } from './extramodule';
import { Country } from './Country';
import { CurrencySymbol } from './CurrencySymbol';

export interface ExtraModulePrice {
    id: string;
    extraModuleId: string;
    countryId: string;
    currencySymbolId: string;
    price: number;

    extraModule: ExtraModule;
    country: Country;
    currencySymbol: CurrencySymbol;

    // form data
    extraModules: ExtraModule[];
    countries: Country[];
    currencies: CurrencySymbol[];
}
