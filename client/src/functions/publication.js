import axios from 'axios';

export const removePublication = async (pubId) => {
  return await axios.delete(
    `${process.env.REACT_APP_API}/pub/${pubId}`,
  );
};

export const createPublication = async (publication) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/pub`,
    publication
  );
}

export const getPublication = async (pubId) => {
  return await axios.get(
    `${process.env.REACT_APP_API}/pub/${pubId}`
  );
}

export const updatePublication = async (pubId, publication) => {
  return await axios.put(
    `${process.env.REACT_APP_API}/pub/${pubId}`,
    publication
  );
}