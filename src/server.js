import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackConfig from "../webpack.config";

const app = express();
const HASH = "093ec68e021f601123e0ad575ea0660e";
const API = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=77b69bc414714de8cf42e55417670ac4&hash=${HASH}`;

app.set("port", process.env.PORT || 3000);

app.use(webpackDevMiddleware(webpack(webpackConfig)));

app.get("/", (request, response) => {
    response.send("Server a navegador");
});

app.get("/api", (request, response) => {
	response.json({api: "works!"});
});


app.listen(app.get("port"), () => {
  	console.log(`El servidor está inicializado en el puerto ${app.get("port")}`);
});
