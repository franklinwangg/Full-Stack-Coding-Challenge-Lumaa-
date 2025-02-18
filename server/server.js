const express = require("express");
const cors = require("cors");
const userRoutes = require("./userAuth/routes/userRoutes");

const PORT = 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);

app.listen(PORT, () => {
    console.log("App running on port ", PORT);
});