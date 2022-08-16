import React, { useState, useEffect } from 'react';
import './style.css';
import ListBeers from './components/ListBeers';
// import beers from './data/data.js';
export default function App() {
  const [beers, setBeers] = useState([]);
  const [curr_page, setCurr] = useState(1);
  const [prev_page, setPrev] = useState(0);
  const [next_page, setNext] = useState(0);
  useEffect(() => {
    const page_step = 8;
    const api = `https://api.punkapi.com/v2/beers?page=${curr_page}&per_page=${page_step}`;
    fetch(api)
      .then((res) => res.json())
      .then((response) => {
        setBeers(response);
      })
      .catch((error) => {
        console.log('failed to load data');
      });
  }, [curr_page]);
  const updateBeer = () => {
    console.log(curr_page);
    const page_step = 8;
    const api = `https://api.punkapi.com/v2/beers?page=${curr_page}&per_page=${page_step}`;
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

  const nextPage = () => {
    updateBeer();
    setCurr(curr_page + 1);
    setPrev(curr_page);
  };
  const prevPage = () => {
    updateBeer();
    setCurr(curr_page - 1);
    setPrev(curr_page);
  };
  return (
    <div className="main">
      <>
        <button onClick={prevPage}>Prev</button>
        <h3>Page: {curr_page}</h3>
        <button onClick={nextPage}>Next</button>
      </>
      <ListBeers beers={beers} />
    </div>
  );
}
