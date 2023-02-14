class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}


const musicList = [
    new Music("Lilium","Kumiko Noma","lilium.jpg","lilium.mp3"),
    new Music("Goodbye","Ramsey","goodbye.jpg","goodbye.mp3"),
    new Music("Black Rover","Vickleblanka","blackrover.jpg","blackrover.mp3"),
]




