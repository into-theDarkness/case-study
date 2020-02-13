function Yes() {
    alert("Vậy là chú đồng ý rồi nhé ^^ !");
}
function No() {
    let a = Math.round(Math.random() * 550);
    let b=  Math.round(Math.random()* 550);
    document.getElementById('btnNo').style.top = b + 'px';
    document.getElementById('btnNo').style.left = a + 'px';
}
