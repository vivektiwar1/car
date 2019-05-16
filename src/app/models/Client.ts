import { CurrencySymbol } from './CurrencySymbol';
import { Language } from './Language';
import { CurrencyFormat } from './CurrencyFormat';

export interface Client {
    id: string;
    name: string;
    firstname: string;
    lastname: string;
    country: string;
    zip: string;
    code: string;
    vat: string;
    isDeleted: boolean;
    language: Language;
    currencySymbol: CurrencySymbol;
    currencyFormat: CurrencyFormat;

    notifyByEmail: boolean;
    notifyBySMS: boolean;
    otherNotify: boolean;

    // lists needed in add-update forms
    currencySymbols: CurrencySymbol[];
    currencyFormats: CurrencyFormat[];
    languages: Language[];
}
