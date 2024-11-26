function likes (usuarios){
    if (usuarios.length === 0 ){
        return "no one likes this";
    } else if(usuarios.length === 1){
        return `${usuarios[0]} likes this`;
    } else if(usuarios.length === 2){
        return `${usuarios[0]} and ${usuarios[1]} likes this`;
    }  else if(usuarios.length === 3){
        return `${usuarios[0]}, ${usuarios[1] } and ${usuarios[2]} likes this`;
    }
    else {
        return "todos han dado like";
    }

}

const usuarios = ["Ana", "Pedro","Max"];
console.log (likes(usuarios));