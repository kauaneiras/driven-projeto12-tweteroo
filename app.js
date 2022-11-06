import express from "express";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

let user = {username: "", avatar: ""};

app.post('/sign-up', (req, res) => {
    let login = req.body;
    user.username = login.username;
    user.avatar = login.avatar;
    res.send("OK");  
})

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const port = 5000;
app.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})
