import ShowMessage from "../components/ShowMessage";
import SearchInput from "../components/SearchInput";
import RegionMenu from "../components/RegionMenu";
import CountryList from "../components/CountryList";
import useFetchData from "../useFetchData";

export default function Home() {
  const {
    result,
    isLoading,
    isError,
    filteredCountries,
    setFilteredCountries,
  } = useFetchData();

  return (
    <>
      {isError && <ShowMessage message="Something went wrong!"></ShowMessage>}
      {isLoading && (
        <ShowMessage message="Loading countries data...!"></ShowMessage>
      )}
      {!isError && !isLoading && (
        <>
          <div className="flex flex-col justify-between gap-10 px-20 md:h-14 md:flex-row md:gap-0">
            <SearchInput
              countriesList={result}
              filterCountriesList={setFilteredCountries}
            />
            <RegionMenu
              countriesList={result}
              filterCountriesList={setFilteredCountries}
            />
          </div>
          <CountryList data={filteredCountries} />
        </>
      )}
    </>
  );
}
