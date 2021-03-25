const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  // first_round: {
  //   type: Number,
  //   required: true,
  // },
  // second_round: {
  //   type: Number,
  //   required: true,
  // },
  // third_round: {
  //   type: Number,
  //   required: true,
  // },

  test: [
    {
      first_round: {
        type: Number,
        required: true,
      },
      second_round: {
        type: Number,
        required: true,
      },
      third_round: {
        type: Number,
        required: true,
      },
    },
  ],
});

const candidate = mongoose.model("CANDIDATE", candidateSchema);

module.exports = candidate;
