import Header from "../components/Header"
import Title from "../components/Title"
import Selector from "../components/Selector"
import Results from "../components/Results"
import Loading from "../components/Loading"

const TopPage = ({ countriesJson, setCountry, countryData, loading }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen">
      <Header className="" />
      <div className="">
        <div className="">
          <Title />
          <Selector countriesJson={countriesJson} setCountry={setCountry} />
          <div className="">
            <Results countryData={countryData} loading={loading} />
          </div>
          <div className="flex justify-center mt-5">{loading ? <Loading /> : ""} </div>
        </div>
      </div>
    </div>
  );
};

export default TopPage;
