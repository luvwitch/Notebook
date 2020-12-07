const noteData = require("../db/db.json");
const path = require("path");
const fs = require("fs");


module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    res.json(noteData);
  });

  app.post("/api/notes/", function(req, res) {
     let num = 0;
     num++;
     const newNote = req.body;
     newNote.id = num;   
     noteData.push(newNote);
     fs.writeFile(path.join(__dirname + "/../db/db.json"), JSON.stringify(noteData), (err) => err ? console.error(err) : console.log("Note added."));    
     res.json(noteData);
  });

  app.delete("/api/notes/:id", function(req, res){  
    const id = req.param.id;
    const noteIndex = noteData.findIndex(p => p.id == id);
    noteData.splice(noteIndex, 1);    
    res.send();
    fs.writeFile(path.join(__dirname + "/../db/db.json"), JSON.stringify(noteData), (err) => err ? console.error(err) : console.log("Note deleted."));
    res.json(noteData);
  });

}; 