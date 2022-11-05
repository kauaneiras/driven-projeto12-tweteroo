import express from "express";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const port = 5000;
app.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})
