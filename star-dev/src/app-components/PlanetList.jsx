import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import Pagination from "./Pagination";

// import PropTypes from 'prop-types';

export default function PlanetList({planets}) {

  return(
    <div>

      <div>

        <Pagination
          previous={planets.previous}
          next={planets.next}
        />

      </div>

      {planets.results.map((planet)=>(
        // const url = starship.url

        <div key={planet.url}>
          <Link to={planet.url} style={{
            textDecoration:"none"
          }}>
            <h2>{planet.name}</h2>
            <p>Population: {planet.population}</p>
          </Link>

        </div>

      ))}

    </div>

  )

}

