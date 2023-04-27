import userData from "../model/newUser.js";

const DisplayLog = async (req, res) => {
  try {
    const data = await userData.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(err.message);
  }
};

const addingUserAPI = async (req, res) => {
  try {
    // const { name, nationalty, age } = req.body;

    const new_user = await userData.create({
      name: req.body.name,
      nationality: req.body.nationality,
      age: req.body.age,
    });
    res.status(200).json({ new_user: new_user });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteUserAPI = async (req, res) => {
  try {
    let user = await userData.findById(req.params.id);
    if (!user) {
      res.status(404).send({ msg: "User not Found" });
    }
    user = await userData.findByIdAndDelete(req.params.id);
    return res.status(200).json({ msg: "User Deleted" });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const updataDatAPI = async (req, res) => {
  const idtoUpdate = req.params.id;
  try {
    const user = await userData.findById(idtoUpdate);
    if (!user) {
      res.status(404).json({ msg: "User Not Found" });
    }
    user = await userData.findByIdAndUpdate(
      idtoUpdate,
      {
        name: req.body.name,
        nationality: req.body.nationality,
        age: req.body.age,
      },
      { new: true }
      // enables to reflect immediately  in console
    );
    res.json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export { DisplayLog, addingUserAPI, updataDatAPI, deleteUserAPI };
