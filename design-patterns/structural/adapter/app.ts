import { Continent, CountriesRepository } from './countries-repository';
import { RestCountries } from './rest-countries';
import { RestCountriesAdapter } from './rest-countries-adapter';

let countriesRepo = new CountriesRepository();
// let countriesRepo = new RestCountriesAdapter(new RestCountries());

countriesRepo.allByCurrency('EUR').then((euroCountries: any) => {
    console.log('Euro countries: ', euroCountries);
});

countriesRepo.allByContinent(Continent.NorthAmerica).then((northAmerica) => {
    console.log(
        `Number of north american countries stored: ${northAmerica.length}`
    );
});
