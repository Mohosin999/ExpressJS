const fs = require("fs");

exports.homeController = (req, res) => {
  fs.readFile("./pages/index.html", (err, data) => {
    if (err) {
      console.log("Error", err);
      res.send("<h1>Something went wrong</h1>");
    } else {
      res.write(data);
      res.end();
    }
  });
};

exports.aboutController = (req, res) => {
  res.send("<h1>I am about route</h1>");
};

exports.helpController = (req, res) => {
  res.send("<h1>I am help route</h1>");
};
