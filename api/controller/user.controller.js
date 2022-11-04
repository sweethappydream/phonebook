let prevFilter = "";
const db = require("../model/db");
const model = require("../model/user.model");
const Op = db.Sequelize.Op;

const get = async (req, res) => {
  let { lastname } = req.query;
  console.log(lastname);
  const users = await db.User.findAll({
    where: {
      lastname: {
        [Op.like]: `%${lastname}%`,
      },
    },
  });

  res.json(users);
};

const post = (req, res) => {
  const data = req.query;
  console.log(data);
  let newUser = db.User.create(data);
  res.json(newUser);
};

const put = async (req, res) => {
  console.log(req.query);
  const body = req.query;
  const updateDoc = {
    firstname: body.firstname,
    lastname: body.lastname,
    phone: body.phone,
  };
  const result = await db.User.update(updateDoc, { where: { id: body.id } });
  res.json(result);
};

const del = async (req, res) => {
  let { id } = req.query;
  console.log(id);
  const result = await db.User.destroy({ where: { id: id } });
  res.json(result);
};

module.exports = {
  get,
  post,
  put,
  del,
};
