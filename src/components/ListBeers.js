import React, { useState, useEffect } from 'react';
export default function ListBeers() {
  const [beers, setBeers] = useState();
  let curr_page = 0,
    prev_page = 0,
    next_page = 0;
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
      <h1>List of Beers</h1>
      {beers &&
        beers.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      <button>Prev</button>
      Page: {curr_page}
      <button>Next</button>
    </div>
  );
}
