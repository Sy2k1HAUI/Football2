// Phần random
let checkIndex = [0];

 function randomSong() {
        let newIndex;
        do{
            newIndex = Math.floor(Math.random() * songs.length);
        }while(checkIndex.includes(newIndex) && checkIndex.length < songs.length);
        if (checkIndex.length < songs.length){
            checkIndex.push(newIndex);
        }else {
            checkIndex=[currentIndex,newIndex];
        }
        currentIndex = newIndex;       
        loadCurrentSong();
    }
