/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';

inquirer
    .prompt([
        {
            name: 'urlQuestion',
            message: 'Enter a url that will be converted to a QR code image:'
        },
    ])
    .then(answers => {
        fs.writeFile("URL1.txt", answers.urlQuestion, (error) => {
            if (error) {
                throw error;
            }

            console.log("Url saved successfully");
        });

        var qrPng = qr.image(answers.urlQuestion);
        qrPng.pipe(fs.createWriteStream('qr_img1.png'));
    });