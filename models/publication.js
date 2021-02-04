const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const publicationSchema = mongoose.Schema({
  student: {
    type: ObjectId,
    ref: 'User',
  },
  title: {
    type: String,
    required: true,
    text: true,
    maxlength: 2000,
  },
  year: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Publication', publicationSchema);