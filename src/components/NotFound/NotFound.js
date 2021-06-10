import React, { Fragment } from 'react';
import Header from '../Header/Header';

const NotFound = () => {
  return (
    <Fragment>
      <Header></Header>
      <div className="p-5 text-center text-red-500 uppercase">
        <h3 className="text-6xl">404!</h3>
        <h3 className="text-2xl">Route not found</h3>
      </div>
    </Fragment>
  );
};

export default NotFound;