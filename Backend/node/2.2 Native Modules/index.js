const fileSystemModule = require("fs");

fileSystemModule.writeFile("message.txt", "O my god", (error) => {
    if (error) {
        throw error;
    }

    console.log("Text saved");
});

fileSystemModule.readFile("message.txt", "utf-8", (error, data) => {
    if (error) {
        throw error;
    }

    console.log(data);
})