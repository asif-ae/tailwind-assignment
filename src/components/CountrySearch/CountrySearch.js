import React, { Fragment, useEffect, useState } from 'react';
import CountryCard from '../CountryCard/CountryCard';

const CountrySearch = () => {
  const [countryName, setCountryName] = useState('');

  const [countryInfo, setCountryInfo] = useState([]);
  
  useEffect(() => {
    let country = countryName || '';
    let countryURL = `https://restcountries.eu/rest/v2/name/${country}`;
    fetch(countryURL)
      .then(res => res.json())
      .then(data => setCountryInfo(data))
  }, [countryName]);
  // capital
  const onChangeFunction = (e) => {
    setCountryName(e.target.value)
  }
  return (
    <Fragment>
      <div className="p-4">
        <h3 className="text-2xl text-blue-900 uppercase px-3 text-center">
          Search By Country Name
        </h3>
        <div className="w-full md:w-1/2 mx-auto p-1">
          <input type="text" name="Search" id="search" className="w-full mx-auto py-2 px-3 border focus:border-blue-900 rounded text-blue-900 text-lg outline-none" onChange={onChangeFunction} placeholder="Search by country name..." />
        </div>
      </div>
      <div className="p-4">
        <div className="grid md:grid-cols-3 gap-4">
          {
            countryInfo.status !== 404 && countryInfo.map(info => <CountryCard info={info} key={info.name} />)
          }
        </div>
        {
          countryInfo.status === 404 && <h3 className="text-red-500 text-center text-xl">Your search doesn't match with any country name!</h3>
        }
      </div>
    </Fragment>
  );
};

export default CountrySearch;