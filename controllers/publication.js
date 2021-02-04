const Publication = require('../models/publication');
const User = require('../models/user');

exports.list = async (req, res) => {
  try {
    const pubs = await Publication
      .find()
      .populate('student');
    res.json(pubs);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err: err.message,
    })
  }
}

exports.read = async (req, res) => {
  try {
    const {
      pubId,
    } = req.params;
    const pub = await Publication
      .findById(pubId)
      // .populate('student');
    res.json(pub);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err: err.message,
    })
  }
}

exports.create = async (req, res) => {
  try {
    const newPub = await new Publication(req.body).save();
    res.json(newPub);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err: err.message,
    })
  }
}

exports.update = async (req, res) => {
  try {
    const {
      pubId,
    } = req.params;

    const pub = await Publication
      .findByIdAndUpdate(pubId, req.body, { new: true })
      .populate('student');

    res.json(pub);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err: err.message,
    })
  }
}

exports.remove = async (req, res) => {
  try {
    const {
      pubId,
    } = req.params;

    const deleted = await Publication
      .findByIdAndDelete(pubId);

    res.json({
      deleted,
      ok: true,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err: err.message,
    })
  }
}