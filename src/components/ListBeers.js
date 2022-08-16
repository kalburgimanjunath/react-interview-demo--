import React, { useState, useEffect } from 'react';
export default function ListBeers({ beers }) {
  // const [beers, setBeers] = useState();
  const [curr_page, setCurr] = useState(1);
  const [prev_page, setPrev] = useState();
  const [next_page, setNext] = useState();
  
  // let curr_page = 0,
  //   prev_page = 0,
  //   next_page = 0;
  // useEffect(() => {
  //   const api = 'https://api.punkapi.com/v2/beers?page=2&per_page=8';
  //   fetch(api)
  //     .then((res) => res.json())
  //     .then((response) => {
  //       // console.log(response);
  //       setBeers(response);
  //     })
  //     .catch((error) => {
  //       console.log('failed to load data');
  //     });
  // }, [beers]);
  const page_step = 80;

  const nextPage = ({ curr }) => {
    const api = `https://api.punkapi.com/v2/beers?page=2&per_page=${
      curr + page_step
    }`;
    fetch(api)
      .then((res) => res.json())
      .then((response) => {
        // console.log(response);
        setBeers(response);
      })
      .catch((error) => {
        console.log('failed to load data');
      });
  };

  return (
    <div>
      <h1>List of Beers</h1>
      {beers && beers.length > 0 ? (
        <>
          {beers &&
            beers.map((item) => {
              return <div key={item.id}>{item.name}</div>;
            })}
          <button>Prev</button>
          Page: {curr_page}
          <button onClick={nextPage}>Next</button>
        </>
      ) : (
        <h4>Loading...</h4>
      )}
    </div>
  );
}
