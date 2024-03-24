// 1).
let lang = "ru";

ruDays = "Понедельник, Вторник, Среда, Пятница, Суббота, Воскресенье";
enDays = "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday";
//через if
if (lang === "ru") {
  console.log(ruDays);
} else if (lang === "en") {
  console.log(enDays);
}
// через switch-case
switch (lang) {
  case "ru":
    console.log(ruDays);
    break;
  case "en":
    console.log(enDays);
    break;
  default:
    console.log("English brooooo!");
}
// через массив без ифов и switch (не понял почему автоматом убираются ковычки из en и ru)
let daysWeek = {
  ru: [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  en: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
};
// Очень много сравниваю с питоном (естественно), поставил сначало let day... потом решил убрать и сработало... это новый стандарт или..?
for (day of daysWeek[lang]) {
  console.log(day);
}

// 2)
let namePerson = "Артем";

namePerson === "Артем"
  ? console.log("директор")
  : namePerson === "Александр"
  ? console.log("преподаватель")
  : console.log("студент");
