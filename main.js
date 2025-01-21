document.addEventListener("DOMContentLoaded", () => {
    const counterValue = document.getElementById("counterValue");
    const decreaseButton = document.getElementById("decreaseButton");
    const increaseButton = document.getElementById("increaseButton");
    const colorPicker = document.getElementById("colorPicker");
  
    decreaseButton.addEventListener("click", () => {
      let currentValue = parseInt(counterValue.textContent);
      counterValue.textContent = currentValue > 0 ? currentValue - 1 : 0;
    });
  
    increaseButton.addEventListener("click", () => {
      let currentValue = parseInt(counterValue.textContent);
      counterValue.textContent = currentValue + 1;
    });
  
    colorPicker.addEventListener("input", (event) => {
      counterValue.style.color = event.target.value;
    });
  });
  