import { Country } from './Country';

export interface TermsAndCondition {
    id: string;
    name: string;
    countryId: string;
    country: Country;
    file: File;
    filePath: string;
    // form data
    countries: Country[];
}
