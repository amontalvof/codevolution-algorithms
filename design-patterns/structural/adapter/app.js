"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var countries_repository_1 = require("./countries-repository");
var countriesRepo = new countries_repository_1.CountriesRepository();
// let countriesRepo = new RestCountriesAdapter(new RestCountries());
countriesRepo.allByCurrency('EUR').then(function (euroCountries) {
    console.log('Euro countries: ', euroCountries);
});
countriesRepo.allByContinent(countries_repository_1.Continent.NorthAmerica).then(function (northAmerica) {
    console.log("Number of north american countries stored: ".concat(northAmerica.length));
});
