import Select from "react-select";

const options = [
  { value: "all countries", label: "All Countries" },
  { value: "Africa", label: "Africa" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
  { value: "Arabic", label: "Arabic" },
  { value: "English", label: "English" },
  { value: "German", label: "German" },
  { value: "Spanish", label: "Spanish" },
  { value: "French", label: "French" },
  { value: "Euro", label: "Euro 💶" },
  { value: "United States dollar", label: "United States Dollar 💸" },
];

export default function RegionMenu({ countriesList, filterCountriesList }) {
  const handleRegionChange = (e) => {
    const region = e.value;

    function filterCountries() {
      if (region === "all countries") {
        return countriesList;
      } else if (
        region === "Africa" ||
        region === "Asia" ||
        region === "Europe" ||
        region === "Oceania"
      ) {
        return countriesList.filter((country) => country.region === region);
      } else if (
        region === "Arabic" ||
        region === "English" ||
        region === "German" ||
        region === "Spanish" ||
        region === "French"
      ) {
        return countriesList.filter(
          (country) =>
            country.languages &&
            Object.values(country.languages).includes(region)
        );
      } else if (region === "Euro" || region === "United States dollar") {
        return countriesList.filter(
          (country) =>
            country.currencies &&
            Object.values(country.currencies).some(
              (currency) => currency.name === region
            )
        );
      }
    }

    filterCountriesList(filterCountries);
  };

  return (
      <Select
        defaultValue={options[0]}
        onChange={handleRegionChange}
        options={options}
        classNames={{
          input: () => "dark:!text-gray-100",
          singleValue: () => "dark:text-gray-100",
          control: () =>
            "flex h-12 items-center justify-between gap-12 rounded-md !border-none pl-4 pr-2 shadow dark:bg-gray-800",
          indicatorSeparator: () => "hidden",
          option: () => "hover:text-gray-800",
          menu: () => "bg-gray-100 dark:bg-gray-800 dark:text-gray-100",
        }}
      />
  );
}
