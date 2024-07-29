import CountryCard from "./CountryCard";
import EmptySearch from "./EmptySearch";

const CountryList = ({ data }) => {
  return (
    <div className="md:grid:cols-[repeat(2,minmax(0,_auto))] mx-10 mt-8 grid select-none gap-y-12 px-20 md:mt-12 lg:grid-cols-[repeat(4,minmax(0,_auto))] lg:gap-y-[70px]">
      {data && data.length ? (
        data.map((country) => (
          <CountryCard
            key={country.name.official}
            name={country.name.common}
            population={parseInt(country.population).toLocaleString()}
            region={country.region}
            capital={country.capital}
            flag={country.flags.svg}
          />
        ))
      ) : (
        <>
          <EmptySearch />
          <p>Nothing to display🙂.</p>
        </>
      )}
    </div>
  );
};

export default CountryList;
