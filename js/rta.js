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