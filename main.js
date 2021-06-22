const selectButton = document.getElementById("selector-bar")
selectButton.addEventListener("click", togglePrice)
selectButton.addEventListener("onkeypress", togglePrice)

const icon = document.querySelector("#icon")

// Enable disable dark mode with localStorage
let darkTheme = localStorage.getItem("darkTheme")

const enableDarkTheme = () => {
  document.body.classList.add("dark-theme")
  icon.src = "images/sunny.png"
  localStorage.setItem("darkTheme", "enabled")
}
const disableDarkTheme = () => {
  document.body.classList.remove("dark-theme")
  icon.src = "images/moon.png"
  localStorage.setItem("darkTheme", null)
}

if (darkTheme === "enabled") {
  enableDarkTheme()
}

icon.onclick = () => {
  darkTheme = localStorage.getItem("darkTheme")
  if (darkTheme !== "enabled") {
    enableDarkTheme()
  } else {
    disableDarkTheme()
  }
}

// Enable disable dark mode without localStorage
// icon.onclick = function () {
//   document.body.classList.toggle("dark-theme")
//   if (document.body.classList.contains("dark-theme")) {
//     icon.src = "images/sunny.png"
//   } else {
//     icon.src = "images/moony.png"
//   }
// }

function togglePrice() {
  var monthPayment = document.getElementsByClassName("card__price--visible")
  var annualPayment = document.getElementsByClassName("card__price--hidden")
  var i
  var n

  for (i = 0; i < monthPayment.length; i++) {
    for (n = 0; n < annualPayment.length; n++) {
      if (monthPayment[i].style.display === "none") {
        monthPayment[i].style.display = "block"
        annualPayment[i].style.display = "none"
        selectButton.style.justifyContent = "flex-end"
      } else {
        monthPayment[i].style.display = "none"
        annualPayment[i].style.display = "block"
        selectButton.style.justifyContent = "flex-start"
      }
    }
  }
}
