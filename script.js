const student = "Плотников Георгий Вячеславович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

// Отсюда и ниже идет ваш код решения домашнего задания
// ...
const sem1_Week = Array(16).fill([4, 1, 2, 5, 2, 2, 0]).flat();
const sem1_Exam = Array(1).fill([0, 2, 0, 2, 0, 0, 0]).flat();
const kanikyli = Array(2).fill([0, 0, 0, 0, 0, 0, 0]).flat();
const sem2_Week = Array(23).fill([1, 4, 4, 2, 5, 0, 0]).flat();
const sem2_Exam = Array(1).fill([2, 0, 2, 0, 2, 0, 0]).flat();
const array = [sem1_Week, sem1_Exam, kanikyli, sem2_Week, sem2_Exam].flat();

let consolePrise = +prompt ("Введите цену приставки");
let transport = +prompt ("Введите стоимость проезда");
let sumtransport = +prompt ("Введите сумму, которую мама даёт на проезд");
let sumlunch = +prompt ("Введите сумму, которую даёт мама на обеды");

let transportdifference = sumtransport - transport

let allmoney = 0;
let alldays = 0;

if (transportdifference < 0) {

alert('Сумма денег, которую дает мама на проезд не может быть меньше суммы проезда')
    
 } else {    
        
for (let i = 0; i < array.length; i++) {
if (allmoney >= consolePrise) { break   
 }
 if ((array[i] <= 3) && (array[i] > 0)) {
allmoney = allmoney + sumlunch + transportdifference
} else if (array[i] > 3) {
 allmoney = allmoney + transportdifference      
 }
 alldays = alldays + 1

}

if (allmoney >= consolePrise) {
alert('На приставку удалось накопить за ' + Number(alldays) + ' дней.')
} else {
alert('На приставку накопить не удалось, но за все время было накоплено ' + Number(allmoney) + ' рублей.')}}
        