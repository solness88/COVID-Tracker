import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import TopPage from "./pages/TopPage";
import countriesJson from "./countries.json"
import WorldPage from "./pages/WorldPage"

function App() {

  const [loading, setLoading] = useState(false);

  const [country, setCountry] = useState("japan");

  const [countryData, setCountryData] = useState({
    date: "",
    newConfirmed: "",
    newRecovered: "",
    newDeaths: "",
  });

  const [allCountriesData, setAllCountriesData] = useState([]);

  useEffect(() => {
    const getCountryData = () => {
      setLoading(true);
      fetch(`https://api.covid19api.com/country/${country}`)
        .then(res => res.json())
        .then(data => {
          setCountryData({
            country: data[data.length - 1].Country,
            date: data[data.length - 1].Date,
            newConfirmed: data[data.length - 1].Confirmed,
            newRecovered: data[data.length - 1].Recovered,
            newDeaths: data[data.length - 1].Deaths,
          })
          setLoading(false);
        })
    };
    getCountryData();
  }, [country])

  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then(res => res.json())
      .then(data => setAllCountriesData(data.Countries))
  }, [])

  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            {console.log(countryData)}
            <Route exaxt path="/" element={<TopPage countriesJson={countriesJson} setCountry={setCountry} countryData={countryData} loading={loading} />} />
            <Route exact path="/world" element={<WorldPage allCountriesData={allCountriesData} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
