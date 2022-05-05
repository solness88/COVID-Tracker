const Results = (props) => {
  console.log("Resultsのprops:", props)
  return (
    <div className="flex justify-center">
      <div className="bg-gradient-to-r from-fuchsia-300 to-rose-200 px-32 py-10 rounded-3xl mt-10 sm:px-5">
        <p className="text-gray-800 my-5">     日付：<span className="text-gray-800 text-5xl ml-3 sm:text-3xl">{props.countryData.date.slice(0, 10)}</span></p>
        <p className="text-gray-800 my-5">新規感染者：<span className="text-gray-800 text-5xl ml-3 sm:text-3xl">{props.countryData.newConfirmed.toLocaleString()}</span></p>
        <p className="text-gray-800 my-5">新規回復者：<span className="text-gray-800 text-5xl ml-3 sm:text-3xl">{props.countryData.newRecovered.toLocaleString()}</span></p>
        <p className="text-gray-800 my-5">新規死者数：<span className="text-gray-800 text-5xl ml-3 sm:text-3xl">{props.countryData.newDeaths.toLocaleString()}</span></p>
      </div>
    </div>
  );
};

export default Results;
