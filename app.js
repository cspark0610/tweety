//const { request } = require("express");

const express = require("express");
const morgan = require("morgan"); //middleware application logger
const nunjucks = require("nunjucks");
const bodyParser = require("body-parser");
const routes = require("./routes"); //importo todo lo contenido en la 
//carpeta routes

const app = express(); // crea una instancia de una aplicación de express

// let tweetsDeEjemplo = [
// 	{ id: 1, name: "juan", content: "este es un tweeettt de juan" },
// 	{ id: 2, name: "carlos", content: "este es un tweeettt de carlos" },
// 	{ id: 3, name: "pepe", content: "este es un tweeettt de pepe" },
// ];

//ARMO LA LOGICA DE LO Q LA APP DEBERIA HACER SECUENCIALMENTE

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// function logueo(req, res, next) {
// 	console.log(req.params);

// 	let user = req.params.name;
// 	if (user === "pepe" || user === "carlos" || user === "juan") {
// 		next();
// 	} else {
// 		res.sendStatus(403);
// 	}
// }

// Configurando Nunjucks
app.set("view engine", "html"); // hace que res.render funcione con archivos html
app.engine("html", nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure("views"); // apunta a nunjucks al directorio correcto para los templates

app.use(morgan("tiny"));
app.use(routes);//1


// app.get("/:id/:name", logueo, function (req, res) {
// 	res.render("index", { tweets: tweetsDeEjemplo });
// });

app.listen(3000, function () {
	console.log("Estas escuhando en el puerto 3000");
});


