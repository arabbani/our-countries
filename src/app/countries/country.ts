import { Language } from './language';
import { Currency } from './currency';

export interface Country {
    name: string;
    alpha3Code: string;
    capital: string;
    flag: string;
    population: number;
    region: string;
    subregion: string;
    languages: Language[];
    currencies: Currency[];
    nativeName: string;
    topLevelDomain: string[]
}
