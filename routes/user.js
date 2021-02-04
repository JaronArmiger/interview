const express = require('express');
const router = express.Router();

const {
  list,
  listUsersAndPubs,
  create,
  read,
  update,
  remove,
} = require('../controllers/user');

router.get(
  '/users',
  list
);

router.get(
  '/users-and-pubs',
  listUsersAndPubs
);

router.get(
  '/user/:userId',
  read
);

router.post(
  '/user',
  create
);

router.put(
  '/user/:userId',
  update
);

router.delete(
  '/user/:userId',
  remove
);

module.exports = router;