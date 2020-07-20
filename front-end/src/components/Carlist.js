import React, { useState, useEffect } from 'react';
import {SERVER_URL} from '../constants.js';
import Table from "./Table";

const Carlist = () => {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(SERVER_URL + 'api/cars')
      .then((response) => response.json())
      .then((responseData) => {
          setCars(responseData._embedded.cars);
          console.log(responseData._embedded.cars[0].color)
      })
      .catch(err => console.error(err));
  }, []);

  const columns = React.useMemo(
      () => [
      {
        Header: 'Brand',
        accessor: 'brand'
      }, {
        Header: 'Model',
        accessor: 'model'
      }, {
        Header: 'Color',
        accessor: 'color'
      }, {
        Header: 'Year',
        accessor: 'year'
      }, {
        Header: 'Price',
        accessor: 'price'
      }
      ],
      []
    );

    return (
      <div className="App">
        <Table columns={columns} data={cars} />
      </div>
    );
}

export default Carlist;
