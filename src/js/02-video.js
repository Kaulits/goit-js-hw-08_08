import Player from '@vimeo/player';
import throttle from 'lodash.throttle';



const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

player.on('timeupdate', throttle(handleTimeUpdate, 1000));


function handleTimeUpdate(e) {
const currentTime = e.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}


const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
    player.setCurrentTime(savedTime);
};