//GET-ALL
exports.getAll = async (req, res, next) => {
  try {
    return res.status(200).json('GET ALL USERS');
  } catch (error) {
    return res.status(500).json(error);
  }
};

//GET-ONE
exports.getOne = async (req, res, next) => {
  try {
    return res.status(200).json('GET ONE USERS: ' + req.params.id);
  } catch (error) {
    return res.status(500).json(error);
  }
};

//CREATE-ONE
exports.createOne = async (req, res, next) => {
  try {
    return res.status(200).json('CREATE ONE USERS: ');
  } catch (error) {
    return res.status(500).json(error);
  }
};

//UPDATE-ONE
exports.updateOne = async (req, res, next) => {
  try {
    return res.status(200).json('UPDATE ONE USERS: ' + req.params.id);
  } catch (error) {
    return res.status(500).json(error);
  }
};

//DELETE-ONE
exports.deleteOne = async (req, res, next) => {
  try {
    return res.status(200).json('DELETE ONE USERS: ' + req.params.id);
  } catch (error) {
    return res.status(500).json(error);
  }
};
