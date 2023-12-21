"use strict"
let x = prompt("Введіть елемент:", 3);
let y = prompt("Введіть тип","катет");
let z = prompt("Введіть елемент:", 4);
let t = prompt("Введіть тип","катет");


  if((x&&z)>=0){ 
    triangle(x, y, z, t);

    // Функція для розв'язання прямокутного трикутника
    function triangle(side1, type1, side2, type2) {
        console.log(`Введені значення: ${side1}, ${type1}, ${side2}, ${type2}`);
    
        // Функція для знаходження гіпотенузи
        function findHypotenuse(a, b) {
            return Math.sqrt(a * a + b * b);
        }
    
        // Функція для знаходження кутів трикутника
        function findAngles(a, b) {
            const angleA = Math.atan(b / a) * (180 / Math.PI);
            const angleB = 90 - angleA;
            return { angleA, angleB };
        }
    
        // Знаходження гіпотенузи
        let hypotenuse;
        if ((type1 === "катет" && type2 === "катет") || (type1 === "гіпотенуза" && type2 === "катет")) {
            hypotenuse = findHypotenuse(side1, side2);
            } 
        else if (type1 === "катет" && type2 === "гіпотенуза") {
            hypotenuse = side2;
        } 
        else if (type1 === "гіпотенуза" && type2 === "гіпотенуза") {
            console.log("Помилка: Два значення гіпотенузи не можуть бути вказані одночасно.");
            return;
        } 
        else {
            console.log("Помилка: Неправильно вказані типи елементів.");
            return;
        }
    
        // Знаходження кутів трикутника
        const angles = findAngles(side1, side2);
    
        // Виведення результатів
        console.log(`Гіпотенуза: ${hypotenuse.toFixed(2)}`);
        console.log(`Кут A: ${angles.angleA.toFixed(2)} градусів`);
        console.log(`Кут B: ${angles.angleB.toFixed(2)} градусів`);
    }
}
else{
    console.log("Введіть коректні дані!");
}