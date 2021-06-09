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
        <div className="w-full md:w-1/2 mx-auto p-1">
          <input type="text" name="Search" id="search" className="w-full mx-auto p-2" onChange={onChangeFunction} placeholder="Search..." />
        </div>
      </div>
      <div className="p-4">
        <div className="grid md:grid-cols-3 gap-4">
          {
            countryInfo.status !== 404 && countryInfo.map(info => <CountryCard info={info} key={info.name} />)
          }
        </div>
      </div>
    </Fragment>
  );
};

export default CountrySearch;