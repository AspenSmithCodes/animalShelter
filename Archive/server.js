const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the sundaes routes function from our pet.routes.js file
const AllMyPetRoutes = require("./server/routes/pet.routes");
AllMyPetRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));

