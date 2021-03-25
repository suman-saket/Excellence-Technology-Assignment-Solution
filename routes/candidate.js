const express = require("express");
const router = express.Router();
const Candidate = require("../model/candidateSchema");

router.get("/", (req, res) => {
  res.send("Hello world");
});

//Route to post name,email of candidate in database

router.post("/register", async (req, res) => {
  const { name, email } = req.body;
  console.log(req.body);

  if (!name || !email) {
    return res.status(422).json({ error: "Please fill Details to proceed" });
  }

  try {
    const candidatePrsesnt = await Candidate.findOne({ email: email });
    if (candidatePrsesnt) {
      return res
        .status(400)
        .json({ error: "Email already prsesnt ,Enter new email" });
    } else {
      const candidate = new Candidate({
        name,
        email,
      });
      const candidateRegistered = await candidate.save();
      res.status(201).json(candidateRegistered);
    }
  } catch (err) {
    console.log(err);
  }
});

//route to save score of candidate in different round by his/her _id
router.put("/students/:id", async (req, res) => {
  const { first_round, second_round, third_round } = req.body;
  const newScore = { first_round, second_round, third_round };

  try {
    const _id = req.params.id;
    //console.log(_id);

    const edituserData = await Candidate.findById(_id);
    //console.log(edituserData);

    edituserData.test.unshift(newScore);
    await edituserData.save();
    //console.log(edituserData);

    res.json(edituserData);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
