const fs = require('fs');

function select_ariism() {
    fs.readFile("assets/ariisms.txt", (err, data) => {
        if (err) throw err;
      
        console.log(data.toString());
      });
    
}