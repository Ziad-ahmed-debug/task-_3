const path = require("path");
let hbs = require('hbs');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');

const publicDirectory = path.join(__dirname, '../public');
app.use(express.static(publicDirectory));


const viewsDirectory = path.join(__dirname, '../temp/views');
app.set('views', viewsDirectory);

const partialsPath = path.join(__dirname, "../Temp/partials");
hbs.registerPartials(partialsPath);

app.get('/', (req, res) => {
    res.render('index', {
        title: "HOME",
        desc: "This is home page",
        img1: "images/1111.jpg"
    });
});

app.get('/service', (req, res) => {
    res.render('service', {
        title: "SERVICE",
        name: "Ziad",
        city: "Assiut",
        age: 18,
        img2: "images/ziad.jpg"
    });
});

app.get('/team', (req, res) => {
    res.render('team', {
        title: "TEAM",
        name: "Ahmed",
        city: "cairo",
        age: 18,
        img3: "images/3333.png"
    });
});

app.get("/anime", (req, res) => {
    res.render("anime", {
        title: "ANIME",
        characterName: "Itachi",
        desc: "The Uncrownded Hokagi💔",
        city: "japan",
        age: 20,
        img4: "images/hhhh.jpg",
    });
});

app.get("/car", (req, res) => {
    res.render("car", {
        title: "CAR",
        desc: "The New AMG Class",
        img5: "images/car.jpeg",
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
