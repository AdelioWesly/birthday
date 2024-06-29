// Detects when the user blows into the microphone
function startVoiceRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.onstart = () => {
    console.log("Voice recognition started. Try to blow the candle.");
  };

  recognition.onspeechend = () => {
    recognition.stop();
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    if (transcript.toLowerCase().includes("blow")) {
      extinguishCandle();
    }
  };

  recognition.start();
}

function extinguishCandle() {
  const flame = document.querySelector(".flame");
  flame.classList.add("out");
}

document.addEventListener("DOMContentLoaded", () => {
  startVoiceRecognition();
});
