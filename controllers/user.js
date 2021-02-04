const User = require('../models/user');
const Publication = require('../models/publication');

exports.list = async (req, res) => {
  try {
    const users = await User
      .find()
      .sort({ last_name: -1 });
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err: err.message,
    })
  }
}

exports.listUsersAndPubs = async (req, res) => {
  try {
    const users = await User.aggregate([
      {
        $lookup: {
          from: 'publications',
          localField: '_id',
          foreignField: 'student',
          as: 'publications'
        }
      }
    ]);


    res.json(users);
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
      userId
    } = req.params;
    const user = await User.findById(userId);
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err: err.message,
    })
  }
}

exports.create = async (req, res) => {
  try {
    const newUser = await new User(req.body).save();
    res.json(newUser);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err: err.message,
    })
  }
}

exports.update = async (req, res) => {
  try {
    
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
      userId
    } = req.params;

    await Publication
      .deleteMany({ student: userId });
    
    const deletedUser = await User
      .findByIdAndDelete(userId);

    res.json({
      deletedUser,
      ok: true,
    })
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err: err.message,
    })
  }
}