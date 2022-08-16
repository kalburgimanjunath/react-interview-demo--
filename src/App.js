import React, { useState, useEffect } from 'react';
import './style.css';
import ListBeers from './components/ListBeers';
export default function App() {
  const [beers, setBeers] = useState();
  useEffect(() => {
    const api = 'https://api.punkapi.com/v2/beers?page=2&per_page=8';
    fetch(api)
      .then((res) => res.json())
      .then((response) => {
        // console.log(response);
        setBeers(response);
      })
      .catch((error) => {
        console.log('failed to load data');
      });
  }, [beers]);
  return (
    <div>
      <ListBeers beers={beers} />
    </div>
  );
}
