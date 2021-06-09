import React from 'react';
import CountrySearch from '../CountrySearch/CountrySearch';
import Header from '../Header/Header';

const Home = () => {
  return (
    <div className="font-serif">
      <Header></Header>
      <div className="xl:container mx-auto">
        <CountrySearch />
      </div>
    </div>
  );
};

export default Home;