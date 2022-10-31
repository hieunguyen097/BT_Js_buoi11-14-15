// JS Buổi 14
// Bài 1: Cho người dùng nhập vào 3 số nguyên. Viết chương trình xuất 3 số theo thứ tự tăng dầfu

// function sortNumber(a, b, c) {
//   if (a <= b && a <= c && b <= c) {
//     console.log(a, b, c);
//   } else if (a <= c && a <= b && c <= b) {
//     console.log(a, c, b);
//   } else if (b <= a && b <= c && c <= a) {
//     console.log(b, a, c);
//   } else if (b <= c && b <= a && a >= c) {
//     console.log(b, c, a);
//   } else if (c <= a && c <= b && a <= b) {
//     console.log(c, a, b);
//   } else {
//     console.log(c, b, a);
//   }
// }
// sortNumber(1, 3, 4);
// sortNumber(6, 324, 46);
// sortNumber(354, 345, 234);
// sortNumber(98, 234, 745);
// sortNumber(534, 65, 456);
function sortNumber(num1, num2, num3) {
  // input : 
  var a = document.getElementById("a").value * 1;
  var b = document.getElementById("b").value * 1;
  var c = document.getElementById("c").value * 1;
  //  XỬ LÝ 
    
  if (a <= b && a <= c && b <= c) {
    num1 = a;
    num2 = b;
    num3 = c;
  } else if (a <= c && a <= b && c <= b) {
    num1 = a;
    num2 = c;
    num3 = b;
  } else if (b <= a && b <= c && c <= a) {
   num1 = b;
   num2 = c;
   num3 = a;
  } else if (b <= c && b <= a && c >= a) {
    num1 = b;
    num2 = a;
    num3 = c;
  } else if (c <= a && c <= b && a <= b) {
    num1 = c;
    num2 = a;
    num3 = b;
  } else {
    num1= c;
    num2= b;
    num3= a;
  }

//   console.log(num1, num2, num3)
  // output: string
//   var result = sort;
  document.getElementById("result").innerHTML =
    "Thứ tự tăng dần của 3 số là " + num1+"," + num2+"," + num3;
}

function hello(){
  var x = document.getElementById("family").value;

  if (people === x){
    document.getElementById("chao").innerHTML = "Xin Chào Nguời La!!!"
  } else if (dad === x){
    document.getElementById("chao").innerHTML = "Xin Chào Bố"
  }else if(mom === x){
    document.getElementById("chao").innerText = "Xin Chào Mẹ"
  }else if (bro === x){
    document.getElementById("chao").innerText = "Xin Chào Em Trai"
  }else{
    document.getElementById("chao").innerText = "Xin Chào Em Gái"
  }
}
