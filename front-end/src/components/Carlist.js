import React, { useState, useEffect } from 'react';
import {SERVER_URL} from '../constants.js';
import Table from "./Table";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Carlist = () => {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = () => {
    fetch(SERVER_URL + 'api/cars')
      .then((response) => response.json())
      .then((responseData) => {
          setCars(responseData._embedded.cars);
          console.log(responseData._embedded.cars[0].color)
      })
      .catch(err => console.error(err));
  }

  const onDelClick = (link) => {
    if (window.confirm('Are you sure you want to delete?')) {
      fetch(link, {method: 'DELETE'})
        .then(res => {
          toast.success("Car deleted", {
            position: toast.POSITION.BOTTOM_LEFT
          });
          fetchCars();
        })
        .catch(err => {
          toast.error("Error when deleting", {
            position: toast.POSITION.BOTTOM_LEFT
          });
          console.error(err);
        });
    }
  }

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
      }, {
        id: 'delbutton',
        sortable: false,
        filterable: false,
        width: 100,
        accessor: '_links.self.href',
        Cell: ({value}) => (<button onClick={() => {onDelClick(value)}}>Delete</button>)
      }
      ],
      []
    );

    return (
      <div className="App">
        <Table columns={columns} data={cars} />
        <ToastContainer autoClose={1500} />
      </div>
    );
}

export default Carlist;
