import Player from "@vimeo/player/src/player"
import { throttle } from 'lodash'

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let currentTime = 0

player.on('timeupdate', throttle(getCurrentTime, 1000))

function getCurrentTime(data) {
    currentTime = data["seconds"]
    localStorage.setItem("videoplayer-current-time", currentTime)
}

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))

