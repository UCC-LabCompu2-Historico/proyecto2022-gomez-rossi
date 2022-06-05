
function countSeconds(){
    seconds++;

    if(seconds == 60){
        seconds = 0;
        minutes++;
    }

    if(minutes == 90){
        check();
        clearInterval(timer);
    }

    var timerValue = minutes + " minutos, " + seconds + " segundos";
    document.getElementById("timer").innerHTML = timerValue;
}

clearInterval(timer);{
}

var timer;

var seconds = 0;
var minutes = 0;

function countSeconds(){
    seconds++;

    if(seconds == 60){
        seconds = 0;
        minutes++;
    }

    if(minutes == 90){
        resultado();
        clearInterval(timer);
    }

    var timerValue = minutes + " minutos, " + seconds + " segundos";
    document.getElementById("timer").innerHTML = timerValue;
}

timer = setInterval(countSeconds, 1000);

function resultado() {
    var p1, p2, p3, p4,p5,p6,p7, nota;

    <!-- 1� pregunta -->
    if (document.getElementById('p11').checked==true) {p1=1}
    if (p1==1) {document.querySelectorAll('.pregunta1')}
    else {p1=0}
    <!-- 2� pregunta -->
    if (document.getElementById('p21').checked==true) {p2=1}
    if (p2==1) {document.querySelectorAll('.pregunta2')}
    else {p2=0}
    <!-- 3� pregunta -->
    if (document.getElementById('p33').checked==true) {p3=1}
    if (p3==1) {document.querySelectorAll('.pregunta3')}
    else {p3=0}
    <!-- 4� pregunta -->
    if (document.getElementById('p42').checked==true) {p4=1}
    if (p4==1) {document.querySelectorAll('.pregunta4')}
    else {p4=0}
    <!-- 5� pregunta -->
    if (document.getElementById('p52').checked==true) {p5=1}
    if (p5==1) {document.querySelectorAll('.pregunta5')}
    else {p5=0}
    <!-- 6� pregunta -->
    if (document.getElementById('p63').checked==true) {p6=1}
    if (p6==1) {document.querySelectorAll('.pregunta6')}
    else {p6=0}
    <!-- 7� pregunta -->
    if (document.getElementById('p75').checked==true) {p7=1}
    if (p7==1) {document.querySelectorAll('.pregunta7')}
    else {p7=0}

    nota=p1+p2+p3+p4+p5+p6+p7;
    document.getElementById('resultado').innerHTML="Aciertos: "+nota;
    rs=confirm("C o n t i n u a r . . .");
    if (rs==false) {document.forms[0].reset();location.reload()}
}

function resultado() {
    var p1, p2, p3, p4,p5,p6,p7,p8,p9,p10, nota;

    <!-- 1� pregunta -->
    if (document.getElementById('p11').checked==true) {p1=1}
    if (p1==1) {document.querySelectorAll('.pregunta1')}
    else {p1=0}
    <!-- 2� pregunta -->
    if (document.getElementById('p21').checked==true) {p2=1}
    if (p2==1) {document.querySelectorAll('.pregunta2')}
    else {p2=0}
    <!-- 3� pregunta -->
    if (document.getElementById('p33').checked==true) {p3=1}
    if (p3==1) {document.querySelectorAll('.pregunta3')}
    else {p3=0}
    <!-- 4� pregunta -->
    if (document.getElementById('p42').checked==true) {p4=1}
    if (p4==1) {document.querySelectorAll('.pregunta4')}
    else {p4=0}
    <!-- 5� pregunta -->
    if (document.getElementById('p52').checked==true) {p5=1}
    if (p5==1) {document.querySelectorAll('.pregunta5')}
    else {p5=0}
    <!-- 6� pregunta -->
    if (document.getElementById('p63').checked==true) {p6=1}
    if (p6==1) {document.querySelectorAll('.pregunta6')}
    else {p6=0}
    <!-- 7� pregunta -->
    if (document.getElementById('p75').checked==true) {p7=1}
    if (p7==1) {document.querySelectorAll('.pregunta7')}
    else {p7=0}
    <!-- 8� pregunta -->
    if (document.getElementById('p85').checked==true) {p8=1}
    if (p8==1) {document.querySelectorAll('.pregunta8')}
    else {p8=0}
    <!-- 9� pregunta -->
    if (document.getElementById('p93').checked==true) {p9=1}
    if (p9==1) {document.querySelectorAll('.pregunta9')}
    else {p9=0}
    <!-- 10� pregunta -->
    if (document.getElementById('p105').checked==true) {p10=1}
    if (p10==1) {document.querySelectorAll('.pregunta10')}
    else {p10=0}

    nota=p1+p2+p3+p4+p5+p6+p7+p8+p9+p10;
    document.getElementById('resultado').innerHTML="Aciertos: "+nota;
    rs=confirm("C o n t i n u a r . . .");
    if (rs==false) {document.forms[0].reset();location.reload()}
}

var inicio=0;
var timeout=0;

function empezarDetener(elemento)
{
    if(timeout==0)
    {
        // empezar el cronometro

        elemento.value="Detener";

        // Obtenemos el valor actual
        inicio=vuelta=new Date().getTime();

        // iniciamos el proceso
        funcionando();
    }else{
        // detemer el cronometro

        elemento.value="Empezar";
        clearTimeout(timeout);
        timeout=0;
    }
}

function funcionando()
{
    // obteneos la fecha actual
    var actual = new Date().getTime();

    // obtenemos la diferencia entre la fecha actual y la de inicio
    var diff=new Date(actual-inicio);

    // mostramos la diferencia entre la fecha actual y la inicial
    var result=LeadingZero(diff.getUTCHours())+":"+LeadingZero(diff.getUTCMinutes())+":"+LeadingZero(diff.getUTCSeconds());
    document.getElementById('crono').innerHTML = result;

    // Indicamos que se ejecute esta funci�n nuevamente dentro de 1 segundo
    timeout=setTimeout("funcionando()",1000);
}

/* Funcion que pone un 0 delante de un valor si es necesario */
function LeadingZero(Time) {
    return (Time < 10) ? "0" + Time : + Time;
}