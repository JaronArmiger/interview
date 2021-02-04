import React, { useState } from 'react';
import { toast } from 'react-toastify';
import {
  createUser,
} from '../functions/user';
import { 
  useHistory,
} from 'react-router-dom';


const initialValues = {
  email: '',
  first_name: '',
  last_name: '',
}

const UserCreate = () => {
  const [values, setValues] = useState(initialValues);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(values)
    .then((res) => {
        console.log(res.data);
        toast.success(`"User ${res.data.title}" added!`);
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
      <h1 className='text-center'>UserCreate</h1>
      <div className="row">
        <div className="col-md-8 offset-2">
          <form
            onSubmit={handleSubmit}
          >
            
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                name="email"
                className='form-control'
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <br /> 
            <div className="form-group">
              <label>First Name</label>
              <input 
                type="text" 
                name="first_name"
                className='form-control'
                value={values.first_name}
                onChange={handleChange}
              />
            </div>
            <br /> 
            <div className="form-group">
              <label>Last Name</label>
              <input 
                type="text" 
                name="last_name"
                className='form-control'
                value={values.last_name}
                onChange={handleChange}
              />
            </div>
            <br /> 
            <button
              className='btn btn-outline-info'
            >
              Create User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserCreate;