import { generatePassword } from "./passwordGenerator.js";

document.getElementById("generateButton").addEventListener("click", () => {
  const length = parseInt(document.getElementById("length").value);
  const strength = document.getElementById("strength").value;

  const password = generatePassword(length, strength);
  document.getElementById("passwordOutput").textContent = password;
});
