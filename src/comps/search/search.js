import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { url, apioptions } from '../../api';

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    };

    const loadOptions = (inputValue) => {
      return fetch(
        `${url}/cities?minPopulation=1000&countryIds=US&namePrefix=${inputValue}`,
        apioptions
      )
        .then((response) => response.json())
        .then((response) => {
          return {
            options: response.data.map((city) => {
              // console.log(city);
              return {
                value: `${city.latitude} ${city.longitude} ${city.wikiDataId}`,
                label: `${city.name}, ${city.region}`,
              };
            }),
          };
        });
    };

    return (
        <AsyncPaginate
          placeholder="search for city!"
          debounceTimeout={600}
          value={search}
          onChange={handleOnChange}
          loadOptions={loadOptions}
          loadOptionsOnMenuOpen={false}
        />
      );
}

export default Search;