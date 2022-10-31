// expose.js

window.addEventListener('DOMContentLoaded', init);
import './js-confetti.browser.js';

function init() {
  const hornSelect = document.querySelector("#horn-select");
  const hornImage = document.querySelector("img");
  const audio = document.querySelector("audio");
  const playButton = document.querySelector("button");
  const volume = document.querySelector("#volume");
  const volumeImage = document.querySelector("#volume-controls img");
  const jsConfetti = new JSConfetti();
  
  hornSelect.addEventListener("input", e => {
    switch (e.target.value) {
      case 'air-horn':
        hornImage.src = "/assets/images/air-horn.svg";
        hornImage.alt = "air horn";
        audio.src = "/assets/audio/air-horn.mp3";
        break;
      case 'car-horn':
        hornImage.src = "/assets/images/car-horn.svg";
        hornImage.alt = "car horn";
        audio.src = "/assets/audio/car-horn.mp3";
        break;
      case 'party-horn':
        hornImage.src = "/assets/images/party-horn.svg";
        hornImage.alt = "party horn";
        audio.src = "/assets/audio/party-horn.mp3";
        break;
      default:
        hornImage.src = "/assets/images/no-image.png";
        hornImage.alt = "no image selected";
        audio.src = "";
        break;
    }
  });

  volume.addEventListener("input", e => {
    const volumeLevel = e.target.value;
    if (volumeLevel == 0) {
      volumeImage.src = "/assets/icons/volume-level-0.svg";
      volumeImage.alt = "volume level 0";
    } else if ((1 <= volumeLevel) && (volumeLevel < 33)) {
      volumeImage.src = "/assets/icons/volume-level-1.svg";
      volumeImage.alt = "volume level 1";
    } else if ((33 <= volumeLevel) && (volumeLevel < 67)) {
      volumeImage.src = "/assets/icons/volume-level-2.svg";
      volumeImage.alt = "volume level 2";
    } else if ((67 <= volumeLevel) && (volumeLevel <= 100)) {
      volumeImage.src = "/assets/icons/volume-level-3.svg";
      volumeImage.alt = "volume level 3";
    } else {
      volumeImage.src = "/assets/images/no-image.png";
      volumeImage.alt = "no image";
    }

    audio.volume = volumeLevel / 100;
  });

  playButton.addEventListener("click", e => {
    audio.play();
    if (hornSelect.value == "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}