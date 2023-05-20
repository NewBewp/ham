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