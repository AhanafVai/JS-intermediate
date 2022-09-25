const url = "https://restcountries.com/v3.1/all";

const loadCountries = async () => {
  const getData = await fetch(url);
  const data = await getData.json();
  displayCountries(data);
};

loadCountries();

const displayCountries = async (countries) => {
  countries.forEach((country) => {});
};
