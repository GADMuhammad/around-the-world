import { Link, useParams } from "react-router-dom";
import useFetchData from "../useFetchData";
import ShowMessage from "../components/ShowMessage";

export default function Country() {
  const { country } = useParams();
  const { result, isLoading, isError } = useFetchData(country);

  return (
    <>
      {isError && <ShowMessage message="Something went wrong!" />}
      {isLoading && <ShowMessage message="Loading countries data...!" />}
      {!isError && !isLoading && (
        <div className="m-20">
          <Link
            className="mb-16 inline-block rounded-md bg-white p-3 md:mb-20"
            to="/"
          >
            <svg
              width="19"
              height="13"
              viewBox="0 0 19 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.89269 0.535534L7.0712 1.71405L3.18211 5.60313L18.0314 5.60313L18.0314 7.25305L3.18211 7.25305L7.0712 11.1421L5.89269 12.3206L0.000132627 6.42809L5.89269 0.535534Z"
                fill="#111827"
              />
            </svg>
          </Link>
          <div className="grid gap-11 lg:grid-cols-2 lg:gap-36">
            <img
              className="w-full"
              src={result.flags?.svg}
              alt={result.flags?.alt}
            />
            <div>
              <h1 className="mb-4 text-3xl font-extrabold lg:mb-7">
                {result?.name?.common}
              </h1>
              <div className="md:gap-30 flex flex-col gap-20 lg:flex-row">
                <div className="flex flex-col gap-5">
                  <p>
                    <span className="font-semibold">Population: </span>
                    <span className="font-light">
                      {parseInt(result?.population).toLocaleString()}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Region: </span>
                    <span className="font-light">{result?.region}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Region: </span>
                    <span className="font-light">{result?.subregion}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Capital: </span>
                    <span className="font-light">{result?.capital}</span>
                  </p>
                </div>
                <div className="flex flex-col gap-5">
                  <p>
                    <span className="font-semibold">Top level Domain: </span>
                    <span className="font-light">
                      {result?.tld?.join(", ")}
                    </span>
                  </p>

                  <p>
                    <span className="font-semibold">Currencies: </span>
                    <span className="font-light">
                      {result?.currencies &&
                        Object.keys(result.currencies)
                          .map(
                            (currency) =>
                              `${result?.currencies[currency].name}`,
                          )
                          .join(", ")}
                    </span>
                  </p>

                  <p>
                    <span className="font-semibold">Languages: </span>
                    <span className="font-light">
                      {result?.languages &&
                        Object.values(result.languages)
                          .map((language) => `${language}`)
                          .join(", ")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
