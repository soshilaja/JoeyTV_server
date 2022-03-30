const UserData = require("../schema/userDataSchema");

const getUserData = async (req, res) => {
  const userData = await UserData.find();
  res.json(userData);
};

module.exports = getUserData;
