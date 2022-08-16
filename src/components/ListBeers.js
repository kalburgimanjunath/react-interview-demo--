import React, { useState, useEffect } from 'react';
export default function ListBeers({ beers }) {
  // const [beers, setBeers] = useState();

  return (
    <div className="card_container">
      {beers && beers.length > 0 ? (
        <>
          {beers &&
            beers.map((item) => {
              return (
                <div key={item.id} className="card" id={item.id}>
                  <h1>{item.name}</h1>
                  <img src={item.image_url} width="100" height="100" />
                  <div>{item.tagline}</div>
                  <div className="disc">
                    <i>{item.description}</i>
                  </div>
                </div>
              );
            })}
        </>
      ) : (
        <h4>Loading...</h4>
      )}
    </div>
  );
}
