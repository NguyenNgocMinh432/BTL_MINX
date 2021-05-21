let n = Number(prompt("Moi bạn nhập số n: "));
let inputNumber = Number(prompt("Moi ban nhap số bạn muốn tìm số đối: "));
function findOppositeNumber(n, inputNumber) 
{
    let result;
    let financial = Math.abs((n/2));
    if (inputNumber < financial) {
        result = inputNumber + financial;
    } else {
       result=  inputNumber - financial;
    }
    alert(result)
}
findOppositeNumber(n,inputNumber);


//C2


