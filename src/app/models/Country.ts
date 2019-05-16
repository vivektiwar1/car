import { CurrencySymbol } from './CurrencySymbol';
import { Language } from './Language';
import { CurrencyFormat } from './CurrencyFormat';

export interface Country {
    id: string;
    name: string;
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
