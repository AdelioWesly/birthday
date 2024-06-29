// Mendeteksi goyangan untuk memadamkan lilin
function detectShake() {
  let lastX, lastY, lastZ;
  let threshold = 15; // Ambang batas goyangan, sesuaikan sesuai kebutuhan

  // Merekam nilai terakhir dari sensor
  window.addEventListener(
    "devicemotion",
    function (e) {
      let acceleration = e.accelerationIncludingGravity;
      let currX = acceleration.x;
      let currY = acceleration.y;
      let currZ = acceleration.z;

      if (Math.abs(currX - lastX) > threshold || Math.abs(currY - lastY) > threshold || Math.abs(currZ - lastZ) > threshold) {
        extinguishCandle();
      }

      // Update nilai terakhir
      lastX = currX;
      lastY = currY;
      lastZ = currZ;
    },
    false
  );
}

function extinguishCandle() {
  const flame = document.querySelector(".flame");
  flame.classList.add("out");
}

document.addEventListener("DOMContentLoaded", () => {
  detectShake();
});
