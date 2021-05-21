// let s1 = prompt("Moi ban nhap chuoi1: ");
// let s2 = prompt("Moi ban nhap chuoi 2: ");

// function merge2String(s1, s2) {
//     let a = [];
//     for(let i=0;i<s1.length;i++){
//         a.push(s1.charAt(i));
//     }
//     for(let i=0;i<s2.length;i++){
//         a.push(s2.charAt(i));
//     }
//     alert(a.join(""));
// }
// merge2String(s1, s2);

let str=
p=>p.map((w,i)=>
w.replace(/./g,(c,j)=>p[i+j&1][j]))

function go() {
  var a=A.value, b=B.value
  if (a.length == b.length)
  content.textContent = str([a,b]).join('')
  else
  content.textContent = '- different length -'
    
}

go();