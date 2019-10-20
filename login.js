let a =['duc1','duc2','duc3'];
let x =['admin1','admin2','admin3'];
let b = ['123123','456456','789789'];
let y =['123456','456789','123789'];
function dangnhap() {
    let taikhoan = document.getElementById("tentaikhoan").value;
    let matkhau =document.getElementById("tenmatkhau").value;
    for (let i =0;i<a.length;i++){
        if(taikhoan ===a[i]&& matkhau===b[i]){
            alert('Bạn đã đăng nhập với tư cách người dùng');
            window.location = "http://localhost:63342/case-study/Case-study.html?_ijt=nf3g7h7os5bt3rb151nthqf7tg";
            break;
        } else if (taikhoan===x[i] && matkhau===y[i]){
            alert('Bạn đã đăng nhập với tư cách admin');
            window.location = "http://localhost:63342/case-study/Case-studyadmin.html?_ijt=hfoh1m120hs5ibn8v5t88siq57";
            break;
        } else {
            alert('Bạn đã nhập sai, vui lòng nhập lại');
            window.location = "http://localhost:63342/case-study/login.html?_ijt=gsv3e5pbdrgr8r8g4r0los1n1n";
            break;
        }
    }
}
