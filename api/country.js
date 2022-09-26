const countries = document.getElementById("countries");

const url = "https://restcountries.com/v3.1/all";

const loadCountries = async () => {
  const getData = await fetch(url);
  const data = await getData.json();
  displayCountries(data);
};

loadCountries();

const displayCountries = async (datas) => {
  datas.map((data) => {
    const country = document.createElement("div");
    country.innerHTML = `  <div class="card">
  <img src=${data.flags.png} alt="brown couch" />
  <div class="card__content">
    <span class="card__title">${data.name.official}<span>
    <p>${data.capital}</p>
  </div>
</div>`;
    countries.appendChild(country);
  });
};
