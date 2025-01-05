function addToDisplay(value){
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('display').style.backgroundColor ='white'
}

function calculateResult() {
    try {
// Получение результата выражения и вывод результата на дисплей.
        document.getElementById('display').value = eval(document.getElementById('display').value);
        document.getElementById('display').style.backgroundColor ='rgba(14, 179, 14, 0.262)'
    } catch (error) {
// Если в процессе вычисления возникла ошибка, на дисплее отобразится сообщение 'Error'.
        document.getElementById('display').value = 'Error';
        document.getElementById('display').style.backgroundColor ='rgba(179, 14, 14, 0.26)'
    }

    if (document.getElementById('display').value == "undefined"){
        document.getElementById('display').style.backgroundColor ='rgba(179, 14, 14, 0.26)'
    }

}