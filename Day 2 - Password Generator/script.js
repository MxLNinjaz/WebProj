document.addEventListener("DOMContentLoaded", function () {
  var slider = document.getElementById("sliderRange");
  var output = document.getElementById("sliderNum");

  function generatePassword(
    length,
    useUppercase,
    useLowercase,
    useNumbers,
    useSymbols
  ) {
    const charset = {
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      symbols: "!@#$%^&*()_-+=<>?/{}[]|",
    };

    let combinedCharset = "";
    if (useUppercase) combinedCharset += charset.uppercase;
    if (useLowercase) combinedCharset += charset.lowercase;
    if (useNumbers) combinedCharset += charset.numbers;
    if (useSymbols) combinedCharset += charset.symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * combinedCharset.length);
      password += combinedCharset[randomIndex];
    }

    return password;
  }

  slider.addEventListener("input", function () {
    output.textContent = this.value;

    const useUppercase = document.getElementById("psUppercase").checked;
    const useLowercase = document.getElementById("psLowercase").checked;
    const useNumbers = document.getElementById("psNumbers").checked;
    const useSymbols = document.getElementById("psSymbols").checked;

    const password = generatePassword(
      this.value,
      useUppercase,
      useLowercase,
      useNumbers,
      useSymbols
    );

    document.querySelector(".genPassword").value = password;
  });

  document.getElementById("copy").addEventListener("click", function () {
    const passwordField = document.querySelector(".genPassword");
    passwordField.select();
    document.execCommand("copy");
  });

  document.querySelector(".btn-gen").addEventListener("click", function () {
    const length = slider.value;
    const useUppercase = document.getElementById("psUppercase").checked;
    const useLowercase = document.getElementById("psLowercase").checked;
    const useNumbers = document.getElementById("psNumbers").checked;
    const useSymbols = document.getElementById("psSymbols").checked;

    const password = generatePassword(
      length,
      useUppercase,
      useLowercase,
      useNumbers,
      useSymbols
    );
    document.querySelector(".genPassword").value = password;
  });

  document.querySelector(".btn-ran").addEventListener("click", function () {
    // Randomly check/uncheck some checkboxes
    document.getElementById("psUppercase").checked = Math.random() < 0.5;
    document.getElementById("psLowercase").checked = Math.random() < 0.5;
    document.getElementById("psNumbers").checked = Math.random() < 0.5;
    document.getElementById("psSymbols").checked = Math.random() < 0.5;

    // Generate a password after randomizing options
    const length = slider.value;
    const useUppercase = document.getElementById("psUppercase").checked;
    const useLowercase = document.getElementById("psLowercase").checked;
    const useNumbers = document.getElementById("psNumbers").checked;
    const useSymbols = document.getElementById("psSymbols").checked;

    const password = generatePassword(
      length,
      useUppercase,
      useLowercase,
      useNumbers,
      useSymbols
    );
    document.querySelector(".genPassword").value = password;
  });
});
