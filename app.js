import express from "express";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

let user = {username: "", avatar: ""};


app.post('/sign-up', (req, res) => {
    console.log("API Sign Up");
    let login = req.body;
    user = {username: login.username, avatar: login.avatar}
    res.send("OK");  
})

let posts =[];

app.post('/tweets', (req, res) => {
    console.log("API Tweets");
    posts.push(
        {
            username: user.username,
            avatar: user.avatar,
            tweet: req.body.tweet,
        }
    );
    res.send("OK");
})

app.get('/tweets', (req, res) => {
    let alltweets = [];
    if(posts.length > 10) {
        for(let i = 0; i < 9; i++) {
            alltweets.push(posts[posts.length -1 - i])
        }
    }else{
        for(let i = 0; i < posts.length; i++) {
            alltweets.push(posts[posts.length -1 - i])
        }
    }
    res.send(alltweets)
})

app.listen(5000, () => {
    console.log(`Running at http://localhost:${5000}`)
})
