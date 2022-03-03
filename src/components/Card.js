import React from 'react'

export default function Card({country}) {
  const numberFormat = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  return (
    <li className="card">
        <img src={country.flags.png} alt={`drapeau: ${country.name.common}`} />
        <div className="data-container">
            <ul>
                <li>{country.name.common}</li>
                <li>{country.capital}</li>
                <li>{numberFormat(country.population)}</li>
            </ul>
        </div>
    </li>
  )
}
