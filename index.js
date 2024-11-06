const express = require("express");

const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
    res.status(200).render("index", {});
});

app.set("view engine", "ejs");
app.use(express.static("public"));

// Listen on port 3001
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

