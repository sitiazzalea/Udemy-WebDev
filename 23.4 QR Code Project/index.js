import { input } from '@inquirer/prompts';
import qr from 'qr-image';
import fs from 'fs';

// 1. Use the inquirer npm package to get user input.
const answer = await input({ message: 'Enter your URL' });

// 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
var myQR = qr.image(answer, {type: 'png'});
myQR.pipe(fs.createWriteStream("myQR-img.png"));
// 3. Create a txt file to save the user input using the native fs node module.
fs.writeFile("input.txt", answer, (err) => {
    if (err) throw err;
    console.log("The file has been saved");
});

