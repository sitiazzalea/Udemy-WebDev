const fs = require("fs");

// fs.writeFile("message.txt", "Hello World from Node JS\nHello from Angela Yu", (err) => {
//     if (err) throw err;
//         console.log('The file has been saved!');
// })

// fs.readFile("message2.txt", "utf-8", function(err, data) {
//     if (err) throw err;
//     console.log(data)
//   });

fs.readFile("message2.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data)
});

setTimeout(function(){
    console.log("About You...");
}, 500);
