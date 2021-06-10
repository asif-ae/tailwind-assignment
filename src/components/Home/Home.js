import React, { Fragment } from 'react';
import CountrySearch from '../CountrySearch/CountrySearch';
import Header from '../Header/Header';

const Home = () => {
  return (
    <Fragment>
      <Header></Header>
      <div className="xl:container mx-auto">
        <CountrySearch />
      </div>
    </Fragment>
  );
};

export default Home;