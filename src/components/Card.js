
const Card = (props) => {



  return (
    <div className="flex justify-center flex-wrap">
      {console.log(props.allCountriesData)}
      {props.allCountriesData.map((singleData, index) =>
        <div key={index} className="bg-gradient-to-r from-fuchsia-300 to-rose-200 m-3 py-10 rounded-3xl basis-1/6 text-center md:basis-56 sm:basis-64">
          <h2 className="text-gray-800 text-3xl mb-7">{singleData.Country}</h2>
          <p className="text-gray-800 my-3">感染者総数: {singleData.TotalConfirmed.toLocaleString()}</p>
          <p className="text-gray-800 my-3">累計死者数: {singleData.TotalDeaths.toLocaleString()}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
