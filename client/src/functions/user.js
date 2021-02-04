import axios from 'axios';

export const getUsersAndPubs = async () => {
  return await axios.get(
    `${process.env.REACT_APP_API}/users-and-pubs`
  );
}

export const getUsers = async () => {
  return await axios.get(
    `${process.env.REACT_APP_API}/users`
  );
}

export const createUser = async (user) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/user`,
    user
  );
}