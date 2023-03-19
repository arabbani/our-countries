import { Language } from './language';
import { Currency } from './currency';

export interface Country {
    name: Record<string, string>;
    cioc: string;
    capital: any;
    flags: Record<string, string>;
    population: number;
    region: string;
    subregion: string;
    languages: any;
    currencies: any;
    tld: string[];
    borders: string[];
}
