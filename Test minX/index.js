// function change_text() {

//     let a = document.getElementById("nhap").value;
//     // alert(a);
//     if (a > 99 && a < 0){
//         alert("Moi ban nhap lai");
//     }
// }


function change_text() {
    let a = document.querySelector("#nhap").value;
    let random = Math.floor(Math.random() * 10);
    while (true) {
        if (isNaN(a)) {
            alert("Nhap sai");
            break;
        
        }
        else if (a <0){
            alert("Moi ban nhap lai");
            break;
        }
         else {
            if (a === random) {
                alert("Trúng Thưởng")
            }
            else {
                alert("Chúc may mắn lần sau");
                break;
            }
        }
    }

    document.querySelector("#nhap").value = "";
}