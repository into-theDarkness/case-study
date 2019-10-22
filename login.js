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
            window.location = "./user.html";
            break;
        } else if (taikhoan===x[i] && matkhau===y[i]){
            alert('Bạn đã đăng nhập với tư cách admin');
            window.location = "./admin.html";
            break;
        } else {
            alert('Bạn đã nhập sai, vui lòng nhập lại');
            window.location = "./index.html"
        }
    }
}
