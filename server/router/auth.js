const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send(`Hello world from the server router.js`);
});

// Register Data save with promise
// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: "Plz filled the blank property" });
//   }

//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "Email ID already exist" });
//       }
//       const user = new User({ name, email, phone, work, password, cpassword });
//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "user registered successfully" });
//         })
//         .catch((err) => {
//           res.status(500).json({ error: "failed to registered" });
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// Register Data Save with async await
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Plz filled the blank property" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email ID already exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password are not matched" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });

      await user.save();

      res.status(201).json({ message: "user registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please filled the data" });
    }
    const userLogin = await User.findOne({ email: email });
    //console.log(userLogin);

    if (userLogin) {
      const passMatch = await bcrypt.compare(password, userLogin.password);

      if (!passMatch) {
        res.status(400).json({ error: "Invalid cridentials1" });
      } else {
        res.json({ message: "User signin successfully... " });
      }
    } else {
      res.status(400).json({ error: "Invalid cridentials2" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
