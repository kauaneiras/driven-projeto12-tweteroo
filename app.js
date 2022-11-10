import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

let user = { username: "", avatar: "" };
let posts = [];

app.post("/sign-up", (req, res) => {
  let login = req.body;

  user.username = login.username;
  user.avatar = login.avatar;

  res.send("OK");
});

app.post("/tweets", (req, res) => {
  posts.push({
    username: user.username,
    avatar: user.avatar,
    tweet: req.body.tweet,
  });

  res.send("OK");
});

app.get("/tweets", (req, res) => {
  let alltweets = [];

  if (posts.length > 10) {
    for (let i = 0; i < 10; i++) {
      alltweets.push(posts[posts.length - 1 - i]);
    }
  } else {
    for (let i = 0; i < posts.length; i++) {
      alltweets.push(posts[posts.length - 1 - i]);
    }
  }

  res.send(alltweets);
});

app.listen(5000, () => {
  console.log(`API is unning at http://localhost:5000`);
});
