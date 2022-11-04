import express from "express";
import mongoose from "mongoose";
// import Router from "./routes/route.js"
import cors from "cors";
import jwt  from "jsonwebtoken";
import UserModel from "./model/user.model.js";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true })), app.use(express.json());
// app.use('/',Router);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/signup", async (req, res) => {
  // console.log(res.body);
  try {
    const userD = await UserModel.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (e) {
    console.log(e.message);
    res.json({ status: "error", error: "Duplicate Email" });
  }
});

app.post("/login", async (req, res) => {
  const userD = await UserModel.findOne({
    email: req.body.email,
    password: req.body.password,
  })
  if (userD) {
    const token= jwt.sign({
       email: userD.email,
       name: userD.name
    },'secretkey123')
    return res.json({ status: "ok", user:token });
  } else {
    console.log("error")
    return res.json({ status: "error", user: false });
  }
});

mongoose.connect("mongodb://localhost:27017/blog-website").then(() => {
  app.listen(8080, () => {
    console.log("listening on port 8080");
  });
});
