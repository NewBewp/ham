// BÀI 1
function solveArea(areaInput) {
    let garde = 0;
    if (areaInput == 1) {
        garde = 2;
    } else if (areaInput == 2) {
        garde = 1;
    } else {
        garde = 0.5;
    }
    return garde;
}

function solveType(typeInput) {
    let garde = 0;
    if (typeInput == 1) {
        garde = 2.5;
    } else if (typeInput == 2) {
        garde = 1.5;
    } else {
        garde = 1;
    }
    return garde;
}

function bai1() {
    var marksPointInput = document.getElementById("marksPointInput").value;
    var areaPoint = document.getElementById("areaInput").value;
    var typePoint = document.getElementById("typeInput").value;

    var pointA = +document.getElementById("pointA").value;
    var pointB = +document.getElementById("pointB").value;
    var pointC = +document.getElementById("pointC").value;

    var areaPoint = solveArea(areaInput);
    var typePoint = solveType(typeInput);

    total = pointA + pointB + pointC + areaPoint + typePoint;

    if (pointA == 0 || pointB == 0 || pointC == 0 || total < marksPointInput) {
        document.getElementById("result1").innerHTML = "điểm" + total + " bạn đã rớt";
    } else {
        document.getElementById("result1").innerHTML = "điểm" + total + " bạn đã đậu";
    }
}
document.getElementById("btn1").onclick = bai1;

///////////////////////////////////////////////////////////////////////

// BÀI 2
function bai2() {
    var userName = document.getElementById("nameUser").value;
    var kwConsump = document.getElementById("kwInput").value;
    var total;
    var a = 500; //50kw đầu
    var b = 650; //50kw kế
    var c = 850; //100kw kế
    var d = 1100; //150kw kế
    var e = 1300; //còn lại

    if (kwConsump <= 50) {
        total = kwConsump * a;
    } else if (kwConsump <= 100) {
        total = kwConsump * a + (kwConsump - 50) * b;
    } else if (kwConsump <= 200) {
        total = kwConsump * a + (kwConsump - 50) * b + (kwConsump - 100) * c;
    } else if (kwConsump <= 350) {
        total = kwConsump * a + (kwConsump - 50) * b + (kwConsump - 100) * c + (kwConsump - 200);
    } else {
        total = kwConsump * a +
            (kwConsump - 50) * b +
            (kwConsump - 100) * c +
            (kwConsump - 200) * d +
            (kwConsump - 350) * e;
    }
    document.getElementById("name").innerHTML = "Tên: " + userName + " |" ;
    document.getElementById("result2").innerHTML = "Tiền điện: " + total;
}
document.getElementById("btn2").onclick = bai2;

