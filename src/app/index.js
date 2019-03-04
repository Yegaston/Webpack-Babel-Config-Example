// Usamos sintaxis nueva y funciona de rucu.
import Photos from './photos'

// Importando css en js gracias a css loader

import './index.css';


const photos = new Photos()


async function main(){
    console.log(await photos.getPhotos());
}

main();

function isValidJSON(text){
    try {
        json.parse(text);
        return true;
    } catch {
        return false;
    }

}

console.log(isValidJSON('test'));