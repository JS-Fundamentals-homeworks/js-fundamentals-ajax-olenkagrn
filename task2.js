// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

const userInput = document.getElementById("userNameInput");
const sendBtn = document.getElementById("getUserButton");
const userCity = document.getElementById("userCity");

sendBtn.addEventListener("click", () => {
  const userName = userInput.value.toLowerCase();

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      const foundUser = users.find(
        (user) => user.name.toLowerCase() === userName
      );

      if (foundUser) {
        userCity.textContent = foundUser.address.city;
      } else {
        userCity.textContent = "Користувача не знайдено.";
      }
    })
    .catch((error) => {
      console.error("Помилка отримання даних:", error);
      userCity.textContent = "Помилка отримання даних.";
    });
});
