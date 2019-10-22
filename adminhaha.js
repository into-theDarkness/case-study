
let sanpham = [];
function danhsachsanpham() {
    let bangsanpham = '<table border="1"> <caption style="text-align: left">Product Name</caption> <caption id="idsoluong" style="text-align: right">5 Product</caption>'
    for (i = 0; i < sanpham.length; i++) {
        bangsanpham += '<tr>';
        for (j = 0; j < 3; j++) {
            if (j == 0) {
                bangsanpham += '<td width="200">' + sanpham[i] + '</td>';
            } else if (j == 1) {
                bangsanpham += '<td>' + '<button id="' + i + j + '" value="' + i + '" type="button" onclick="editproduct(this)">Edit</button>' + '</td>';
            } else {
                bangsanpham += '<td>' + '<button id="' + i + j + '" value="' + i + '" type="button" onclick="deleteproduct(this)">Delete</button>' + '</td>';
            }
        }
        bangsanpham += '</tr>';
    }
    bangsanpham += '</table>';
    document.getElementById('output').innerHTML = bangsanpham;
    document.getElementById('idsoluong').innerHTML = sanpham.length + ' product';
}
function addproduct() {
    let a = sanpham.indexOf(document.getElementById('idinput').value);
    if (a === -1) {
        sanpham.push(document.getElementById('idinput').value);
        alert('Đã thêm sản phẩm mới: ' + sanpham[sanpham.length - 1]);
        danhsachsanpham();
    } else {
        alert('Sản phẩm đã tồn tại');
    }
}
function editproduct(a) {
    edit = prompt('Sửa tên sản phẩm thành:');
    sanpham[a.value] = edit;
    danhsachsanpham();
}
function deleteproduct(b) {
    for (let i = parseInt(b.value); i < sanpham.length; i++) {
        sanpham[i] = a = sanpham[i + 1];
    }
    sanpham.pop();
    danhsachsanpham()
}