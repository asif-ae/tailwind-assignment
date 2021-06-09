import React, { Fragment } from 'react';

const CountryCard = ({ info }) => {
  const { flag, name, capital } = info;
  return (
    <Fragment>
      <div className="p-6 min-w-full mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="h-auto w-12" src={flag} alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">{name}</div>
          <p className="text-gray-500">{capital}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default CountryCard;