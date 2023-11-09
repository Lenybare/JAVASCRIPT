let i = 0;

while (i <= 100) {
    let parTrois = i % 3;
    let parCinq = i % 5
    if ((parTrois == 0) && (parCinq == 0)) {
        document.write("FizzBuzz  <br>");
    } else if (parTrois == 0) {
        document.write("Fizz  <br>");
    } else if (parCinq == 0) {
        document.write("Buzz  <br>");
    } else {
        document.write(i +"<br>")
    }
    i++
}