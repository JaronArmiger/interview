import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import {
  getUsers,
} from '../functions/user';

const PubForm = ({
  handleSubmit,
  handleChange,
  values,
}) => {
  const {
    student,
    year,
    title,
  } = values;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, [])

  const loadUsers = () => {
    getUsers()
      .then(res => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <label>Author</label>
        <select 
          name="student"
          className='form-control'
          onChange={handleChange}
          value={student}
        >
          <option>** select a student **</option>
          {users.map((u, idx) => {
            return (
              <option 
                key={idx}
                value={u._id}>
                {`${u.first_name} ${u.last_name}`}
              </option>
            );
          })}
        </select>
      </div>
      <br />
      <div className="form-group">
        <label>Title</label>
        <input 
          type="text" 
          name="title"
          className='form-control'
          value={title}
          onChange={handleChange}
        />
      </div>
      <br />
      <div className="form-group">
        <label>Year</label>
        <input 
          type="number" 
          name="year"
          className='form-control'
          value={year}
          onChange={handleChange}
        />
      </div>
      <br /> 
      <button
        className='btn btn-outline-info'
      >
        Publish
      </button>
    </form>
  );
};

export default PubForm;