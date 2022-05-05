import Header from "../components/Header"
import Card from "../components/Card"
import Title from "../components/Title"

const WorldPage = (props) => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <Header />
      <Title />
      <Card allCountriesData={props.allCountriesData} />
    </div>
  );
};

export default WorldPage;
