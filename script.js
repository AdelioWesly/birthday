// Function to start voice recognition
function startVoiceRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.onstart = () => {
    console.log("Voice recognition started. Try to blow the candle.");
  };

  recognition.onspeechend = () => {
    recognition.stop();
    console.log("Speech recognition stopped.");
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase();
    console.log("Detected speech:", transcript);
    if (transcript.includes("blow")) {
      extinguishCandle();
    }
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error detected: " + event.error);
  };

  recognition.start();
}

// Function to extinguish the candle flame
function extinguishCandle() {
  const flame = document.querySelector(".flame");
  flame.classList.add("out");
  console.log("Candle extinguished.");
}

document.addEventListener("DOMContentLoaded", () => {
  startVoiceRecognition();
});
