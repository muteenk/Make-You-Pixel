const canvas = document.getElementById("character_canvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 450;

ctx.webkitImageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

let body = new Image();
let face = new Image();
let hair = new Image();
let baseCloth = new Image();
let accessories = new Image();
let coat = new Image();



generate();



function generateNum (init, end){
    return Math.floor(Math.random()*(end-init)+init);
}


async function generate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const bodyIndex = generateNum(1, 5);
    const faceIndex = generateNum(1, 5);
    const hairIndex = generateNum(1, 5);
    const baseClothIndex = generateNum(1, 5);
    const coatIndex = generateNum(1, 5);
    const accessoryIndex = generateNum(1, 5);
    
    body.src = `/static/assets/Body/Body${bodyIndex}.png`;
    face.src = `/static/assets/Face/Face${faceIndex}.png`;
    hair.src = `/static/assets/Hair/Hair${hairIndex}.png`;
    baseCloth.src = `/static/assets/BaseCloth/BaseCloth${baseClothIndex}.png`;
    coat.src = `/static/assets/Coat/Coat${coatIndex}.png`;
    accessories.src = `/static/assets/Accessories/Accessory${accessoryIndex}.png`;


    // ctx.drawImage(body, 0, 0, body.width*7, body.height*7);
    // ctx.drawImage(hair, 0, 0, hair.width*7, hair.height*7);
    // ctx.drawImage(face, 0, 0, face.width*7, face.height*7);
    // ctx.drawImage(baseCloth, 0, 0, baseCloth.width*7, baseCloth.height*7);
    // ctx.drawImage(coat, 0, 0, coat.width*7, coat.height*7);
    // ctx.drawImage(accessories, 0, 0, accessories.width*7, accessories.height*7);
    

    accessories.onload = () => {
        ctx.drawImage(accessories, 0, 0, accessories.width*7, accessories.height*7);
    }
    hair.onload = () => {
        ctx.drawImage(hair, 0, 0, hair.width*7, hair.height*7);
    }
    face.onload = () => {
        ctx.drawImage(face, 0, 0, face.width*7, face.height*7);
    }
    body.onload = () => {
        ctx.drawImage(body, 0, 0, body.width*7, body.height*7);
    }
    coat.onload = () => {
        ctx.drawImage(coat, 0, 0, coat.width*7, coat.height*7);
    }
    baseCloth.onload = () => {
        ctx.drawImage(baseCloth, 0, 0, baseCloth.width*7, baseCloth.height*7);
    }
    

}

