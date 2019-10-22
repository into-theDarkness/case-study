let sanpham = [];
sanpham[0] = ({name:'iPhone5s', img:'<img src="iphone-5s-16gb-7-400x460.png" height="230" width="200"/>',info: 'Màn hình: LED-backlit IPS LCD 4", DVGA, Hệ điều hành: iOS 10, CPU: Apple A7 2 nhân 64-bit, Ram: 1GB, Pin: 1560mAh, Giá: 1.100.000đ'});
sanpham[1] = ({name:'iPhone6s', img:'<img src="iphone-6s-plus-2-400x460.png" height="230" width="200"/>',info: 'Màn hình: LED-blacklit IPS LCD 4,7" Retina HD, Hệ điều hành: iOS 11, CPU Apple A9 2 nhân 64-bit, Ram: 2GB, Pin: 1715mAh, Giá: 2.550.00đ' });
sanpham[2] = ({name:'iPhone7s', img:' <img src="iphone-7-plus-3.jpg" height="230" width="230"/>',info: 'Màn hình: OLED 5,5" Retina,  Hệ điều hành: iOS 11, CPU 4 nhân, Ram: 3GB, Pin: 1715 mAh, Giá: 6.000.000đ ' });
sanpham[3] = ({name:'iPhone8', img:'<img src="iphone8-plus-silver-select-2018.png" height="230" width="230"/>',info:'Màn hình LED-backlit IPS LCD 4,7" Retina HD, Hệ điều hành iOS 12, CPU Apple A11 Bionic 6 nhân, Ram 2BG, Pin: 1821mAh, Giá: 6.150.000đ' });
sanpham[4] = ({name:'iPhoneX', img:'  <img src="iphone-x-256gb-a1-600x600.jpg" height="230" width="230"/>', info: 'Màn hinh OLED 5,8" Super Retina, Hệ điều hành: iOS 12, CPU: Apple A11 Bionic 6 nhân, Ram: 3GB, Pin: 2716 mAh, Giá: 15.500.000đ' });
function danhsachsanpham() {
    let bangsanpham = '<table border="1"> <caption style="text-align: left"></caption> <caption id="idsoluong" style="text-align: right">5 Product</caption>'
    for (i = 0; i < sanpham.length; i++) {
        bangsanpham += '<tr>';
        for (j = 0; j < 5; j++) {
            if (j == 0) {
                bangsanpham += '<td width="100">' + sanpham[i].name + '</td>';
            } else if (j==1) {
                bangsanpham+= '<td width="300" height="230">' + sanpham[i].img;
            } else if(j==2) {
                bangsanpham+= '<td width="300" height="230">' + sanpham[i].info;
            } else if (j == 3) {
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
    let c = document.getElementById('idthongtin').value;
    if (a === -1) {
        sanpham.push({name: document.getElementById('idinput').value, info:c});
        alert('Đã thêm sản phẩm mới: ' + sanpham[sanpham.length - 1].name);
        danhsachsanpham();
    } else {
        alert('Sản phẩm đã tồn tại');
    }
}
function editproduct(a) {
    let edit = prompt('Sửa tên sản phẩm thành:');
    sanpham[a.value].name = edit;
    let edit1 = prompt('Sửa thông tin sản phẩm thành:');
    sanpham[a.value].info = edit1;
    danhsachsanpham();
}
function deleteproduct(b) {
    for (let i = parseInt(b.value); i < sanpham.length; i++) {
        sanpham[i] = a = sanpham[i + 1];
    }
    sanpham.pop();
    danhsachsanpham()
}