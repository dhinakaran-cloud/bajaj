document.getElementById("charactersToggle").addEventListener("change", () => {
  document.getElementById("charactersSection").classList.toggle("hidden");
});

document.getElementById("numbersToggle").addEventListener("change", () => {
  document.getElementById("numbersSection").classList.toggle("hidden");
});

document
  .getElementById("highestAlphabetToggle")
  .addEventListener("change", () => {
    document
      .getElementById("highestAlphabetSection")
      .classList.toggle("hidden");
  });
