import Header from "../components/Header"
import Title from "../components/Title"
import Selector from "../components/Selector"
import Results from "../components/Results"

const TopPage = (props) => {
  console.log("TopPageのpropsです:", props)
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen">
      <Header className="" />
      <div className="">
        <div className="">
          <Title />
          <Selector countriesJson={props.countriesJson} setCountry={props.setCountry} getCountryData={props.getCountryData} />

          <div className="">
            <Results countryData={props.countryData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPage;
