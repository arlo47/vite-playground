import "../scss/style.scss";

// Import all of Bootstrap's JS
// @ts-ignore
import * as bootstrap from "bootstrap";

const colorThemeSwitchListener = () => {
  const colorThemeSwitch = document.getElementById(
    "color-theme-switch"
  ) as HTMLInputElement;

  const colorThemeLabel = document.getElementById(
    "color-theme-label"
  ) as HTMLLabelElement;

  const htmlElement = document.querySelector("html");
  console.log(htmlElement);

  if (colorThemeSwitch) {
    colorThemeSwitch.addEventListener("change", () => {
      if (colorThemeSwitch.checked) {
        htmlElement?.setAttribute("data-bs-theme", "light");
        colorThemeLabel.innerText = "Light Mode";
        colorThemeLabel.classList.add("text-dark");
        colorThemeLabel.classList.remove("text-white");
      } else {
        htmlElement?.setAttribute("data-bs-theme", "dark");
        colorThemeLabel.innerText = "Dark Mode";
        colorThemeLabel.classList.add("text-white");
        colorThemeLabel.classList.remove("text-dark");
      }
    });
  }
};

colorThemeSwitchListener();
