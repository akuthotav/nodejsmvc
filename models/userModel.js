const mongoose = require("mongoose");

// const empCrud = mongoose.model('empcrud',
//     {
//         uname: String,
//         email : String,
//         password : String,
//         city : String,
//     })
// module.exports = empCrud;

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add username"],
    },
    email: {
      type: String,
      required: [true, "Please add user email"],
      unique: [true, "Email must be unique"],
    },
    password: {
      type: String,
      required: [true, "Please add password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
