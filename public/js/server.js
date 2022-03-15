const express = require("express");
const path = require("path");
const fileupload = require("express-fileupload");

const app = express();
app.use(express.static("public"));
app.use(fileupload());

/** Routes
 * -> Route for Home
 * -> Route for Editor
 * -> Route for Upload
 */
app.get("/", (req, res    ) => {
  res.sendFile(path.join(__dirname, "../html", "home.html"));
});

app.get("/editor", (req, res) => {
  res.sendFile(path.join(__dirname, "../html", "editor.html"));
});

// Upload links

app.post("/upload", (req, res) => {
  let file = req.files.image;
  let path = "BlogJS/uploads" + imageName;
  let imageName = date.getDate + date.getTime + file.name;
  let date = new Date();
  file.mv(path, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.json(`uploads/${imageName}`);
    }
  });
});

app.listen("3000", () => {
  console.log("Listening");
});
