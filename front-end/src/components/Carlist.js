import React, { useState, useEffect } from 'react';
import {SERVER_URL} from '../constants.js';
import Table from './Table';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddCar from './AddCar';
import EditCar from './EditCar';
import {CSVLink} from 'react-csv';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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

  const addCar = (car) => {
    fetch(SERVER_URL + 'api/cars',
        { method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(car)
        })
      .then(res => fetchCars())
      .catch(err => console.error(err));
  }

  const updateCar = (car, link) => {
    fetch(link,
      { method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(car)
      })
      .then(res => {
        toast.success("Changes saved", {
          position: toast.POSITION.BOTTOM_LEFT
        });
        fetchCars();
      })
      .catch(err =>
        toast.error("Error when saving", {
          position: toast.POSITION.BOTTOM_LEFT
        })
      )
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
        id: 'editbutton',
        sortable: false,
        filterable: false,
        width: 100,
        accessor: '_links.self.href',
        Cell: ({value, row}) => (<EditCar car={row} link={value}
          updateCar={updateCar} fetchCars={fetchCars} />),
      }, {
        id: 'delbutton',
        sortable: false,
        filterable: false,
        width: 100,
        accessor: '_links.self.href',
        Cell: ({value}) => (<Button size="small" color="secondary" onClick={() => {onDelClick(value)}}>Delete</Button>)
      }
      ],
      []
    );

    return (
      <div className="App">
        <Grid container>
          <Grid item>
            <AddCar addCar={addCar} fetchCars={fetchCars} />
          </Grid>
          <Grid item style={{padding: 15}}>
            <CSVLink data={cars} separator=";">Export CSV</CSVLink>
          </Grid>
        </Grid>
          <Table columns={columns} data={cars} />
          <ToastContainer autoClose={1500} />
      </div>
    );
}

export default Carlist;
