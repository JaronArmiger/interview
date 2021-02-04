import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PubForm from '../components/PubForm';
import {
  createPublication,
} from '../functions/publication';
import { 
  useHistory,
} from 'react-router-dom';

const initialValues = {
  student: '',
  title: '',
  year: '',
}

const PubCreate = () => {
  const [values, setValues] = useState(initialValues);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    createPublication(values)
    .then((res) => {
        console.log(res.data);
        toast.success(`"${res.data.title}" created successfully!`);
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
        toast.error('An error has occurred.');
      });
  }

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  }

  return (
    <div className="container-fluid">
      <h1 className='text-center'>PubCreate</h1>
      <div className="row">
        <div className="col-md-8 offset-2">
          <PubForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            values={values}
          />
        </div>
      </div>
    </div>
  );
};

export default PubCreate;