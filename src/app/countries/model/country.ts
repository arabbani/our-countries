import { Language } from './language';
import { Currency } from './currency';

export interface Country {
    name: Record<string, string>;
    cioc: string;
    capital: string;
    flags: Record<string, string>;
    population: number;
    region: string;
    subregion: string;
    languages: Language[];
    currencies: Currency[];
    nativeName: string;
    tld: string[];
    borders: string[];
}
