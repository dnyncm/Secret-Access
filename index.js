//Learing Node Middleware
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let answer = ""

app.use(bodyParser.urlencoded({ extended: true }));

function checkAnswer(req, res, next) {
  console.log(req.body.password);
  answer = req.body.password;
  next();
}

app.use(checkAnswer);


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if(answer !== "ILoveProgramming") {
        res.sendFile(__dirname + "/public/index.html");
    } res.sendFile(__dirname + "/public/secret.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
