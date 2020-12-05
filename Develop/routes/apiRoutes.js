const noteData = require("../db/db.json");
const path = require("path");
const fs = require("fs");


module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    res.json(noteData);
  });

  app.get("/api/notes/id", function(req, res) {
    res.json(activeNote.id);
  });

  app.post("/api/notes/", function(req, res) {
      noteData.push(req.body);
      fs.writeFile(path.join(__dirname + "/../db/db.json"), JSON.stringify(noteData), (err) => err ? console.error(err) : console.log("Note added."));
      
      res.json(noteData);
  });

  app.delete("/api/notes/", function(req, res){   
    res.json(noteData);
  });

}; 