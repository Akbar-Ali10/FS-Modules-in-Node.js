const fs = require("fs");

// Step 1: Write File
fs.writeFile("example.txt", "Yeh nayi file ka data hai.", (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File created and data written successfully!");

    // Step 2: Rename File
    fs.rename("example.txt", "newname.txt", (err) => {
      if (err) {
        console.error("Error renaming file:", err);
      } else {
        console.log("File renamed successfully!");

        // Step 3: Update File
        fs.appendFile("newname.txt", "\nYeh updated data hai.", (err) => {
          if (err) {
            console.error("Error updating file:", err);
          } else {
            console.log("File updated successfully!");

            // Step 4: Delete File
            fs.unlink("newname.txt", (err) => {
              if (err) {
                console.error("Error deleting file:", err);
              } else {
                console.log("File deleted successfully!");
              }
            });
          }
        });
      }
    });
  }
});
