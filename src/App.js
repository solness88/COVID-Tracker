import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import TopPage from "./pages/TopPage";
import countriesJson from "./countries.json"
import WorldPage from "./pages/WorldPage"

function App() {

  const [country, setCountry] = useState("");

  const [countryData, setCountryData] = useState({
    date: "",
    newConfirmed: "",
    newRecovered: "",
    newDeaths: "",
  });

  const [allCountriesData, setAllCountriesData] = useState([]);

  const getCountryData = () => {
    fetch(`https://api.covid19api.com/country/${country}`)
      .then(res => res.json())
      .then(data => {
        setCountryData({
          date: data[data.length - 1].Date,
          newConfirmed: data[data.length - 1].Confirmed,
          newRecovered: data[data.length - 1].Recovered,
          newDeaths: data[data.length - 1].Deaths,
        })
      })
  };

  useEffect(() => {
    console.log("テスト")
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
            <Route exaxt path="/" element={<TopPage countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData} countryData={countryData} />} />
            <Route exact path="/world" element={<WorldPage allCountriesData={allCountriesData} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
