document.querySelectorAll(".candle").forEach((candle) => {
  candle.addEventListener("click", () => {
    candle.querySelector(".flame").style.display = "none";
  });
});
