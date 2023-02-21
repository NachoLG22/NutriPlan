const express = require("express");

//Create app SERVER:
const app = express();

//Configure HBS as view engine:
require("./config/hbs.config");

app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);

const routes = require("./config/routes.config");
app.use("/", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.info(`App listening at port ${port}`));
