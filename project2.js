const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page refresh

  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  // validation
  if (height === "" || height <= 0 || isNaN(height)) {
    results.innerHTML = "Please enter a valid height";
    return;
  }

  if (weight === "" || weight <= 0 || isNaN(weight)) {
    results.innerHTML = "Please enter a valid weight";
    return;
  }

  // BMI calculation
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  // result message
  let message = "";

  if (bmi < 18.6) {
    message = "You are Under Weight";
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    message = "You are in Normal Range";
  } else {
    message = "You are Over Weight";
  }

  // display result
  results.innerHTML = `<h3>Your BMI is ${bmi}</h3><p>${message}</p>`;
});
