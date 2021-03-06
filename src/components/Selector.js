

const Selector = ({ setCountry, countriesJson }) => {
  return (
    <div className="flex justify-center">
      <select onChange={(event) => setCountry(event.target.value)} className="
        form-select
        appearance-none
        block
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding bg-no-repeat
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700
        focus:bg-white
        focus:border-blue-600
        focus:outline-none
        mr-2
        md:w-2/3
        md:justify-center"
        aria-label="Default select example">
        <option>Japan</option>
        {countriesJson.map((country, index) =>
          <option key={index} value={country.Slug}>{country.Country}</option>
        )}
      </select >
    </div >
  );
};

export default Selector;
