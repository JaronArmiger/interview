const express = require('express');
const router = express.Router();

const {
  list,
  create,
  read,
  update,
  remove,
} = require('../controllers/publication');

router.get(
  '/pubs',
  list
);

router.get(
  '/pub/:pubId',
  read
);

router.post(
  '/pub',
  create
);

router.put(
  '/pub/:pubId',
  update
);

router.delete(
  '/pub/:pubId',
  remove
);

module.exports = router;