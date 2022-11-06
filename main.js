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
    num1 = c;
    num2 = b;
    num3 = a;
  }

  //   console.log(num1, num2, num3)
  // output: string
  //   var result = sort;
  document.getElementById("result").innerHTML =
    "Thứ tự tăng dần của 3 số là " + num1 + "," + num2 + "," + num3;
}

function hello() {
  var user = document.getElementById("family").value;

  if ("people" == user) {
    document.getElementById("chao").innerHTML = "Xin Chào Nguời La!!!";
  } else if ("dad" == user) {
    document.getElementById("chao").innerHTML = "Xin Chào Bố";
  } else if ("mom" == user) {
    document.getElementById("chao").innerText = "Xin Chào Mẹ";
  } else if ("bro" == user) {
    document.getElementById("chao").innerText = "Xin Chào Em Trai";
  } else {
    document.getElementById("chao").innerText = "Xin Chào Em Gái";
  }
}

function demSo() {
  var x = document.getElementById("x").value;
  var y = document.getElementById("y").value;
  var z = document.getElementById("z").value;
  var soChan = 0;
  var soLe = 0;
  // xác định số nguyên dương
  if (x > 0 && x % 1 == 0) {
    x = document.getElementById("x").value * 1;
  } else {
    alert("Số thứ nhất không phải số nguyên dương");
  }

  if (y > 0 && y % 1 == 0) {
    y = document.getElementById("y").value * 1;
  } else {
    alert("Số thứ hai không phải số nguyên dương");
  }

  if (z > 0 && z % 1 == 0) {
    z = document.getElementById("z").value * 1;
  } else {
    alert("Số thứ ba không phải số nguyên dương");
  }
  // xác định số chẵn lẻ và đếm

  if (x % 2 === 0) {
    soChan++;
  } else {
    soLe++;
  }
  if (y % 2 === 0) {
    soChan++;
  } else {
    soLe++;
  }
  if (z % 2 === 0) {
    soChan++;
  } else {
    soLe++;
  }

  document.getElementById("dem").innerHTML =
    "Có " + soChan + " số chẵn và " + soLe + " số lẻ ";
}

function tamGiac() {
  var canh1 = document.getElementById("canh1").value * 1;
  var canh2 = document.getElementById("canh2").value * 1;
  var canh3 = document.getElementById("canh3").value * 1;

  if (canh1 + canh2 > canh3 || canh1 + canh3 > canh2 || canh2 + canh3 > canh1) {
    if ((canh1 == canh2) == canh3) {
      document.getElementById("tamGiac").innerHTML = "Là tam giác đều";
    } else if (canh1 == canh2 || canh1 == canh3 || canh2 == canh3) {
      document.getElementById("tamGiac").innerHTML = "Là tam giác cân";
    } else if (
      Math.pow(canh1, 2) == Math.pow(canh2, 2) + Math.pow(canh3, 2) ||
      Math.pow(canh2, 2) == Math.pow(canh1, 2) + Math.pow(canh3, 2) ||
      Math.pow(canh3, 2) == Math.pow(canh2, 2) + Math.pow(canh1, 2)
    ) {
      document.getElementById("tamGiac").innerHTML = "Là tam giác vuông";
    } else {
      document.getElementById("tamGiac").innerHTML = "Tam giác là tác giam";
    }
  } else {
    alert("Dữ liệu không hợp lệ");
  }
}

function ex5Next() {
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  var tomorrow;
  var nextMonth;
  var nextYear;
  // điều kiện ngày tháng năm
  if (day <= 31) {
    day = document.getElementById("day").value * 1;
  } else {
    alert("Dữ liệu không hợp lệ");
  }

  if (month <= 12) {
    month = document.getElementById("month").value * 1;
  } else {
    alert("Dữ liệu không hợp lệ");
  }

  if (1900 <= year) {
    year = document.getElementById("year").value * 1;
  } else {
    alert("Dữ liệu phải sau năm 1900");
  }

  if (month == 2) {
    if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
      day <= 29;
    } else {
      day <= 28;
    }
  }else {
    alert("Dữ liệu không hợp lệ");
  }

  
  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    day <= 31;
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    day <= 30;
  }

  // if(day = 31 && month)
}

function ex6() {
  var thang = document.getElementById("thang").value;
  var nam = document.getElementById("nam").value;
  var ngay;

  if (thang <= 12) {
    thang = document.getElementById("thang").value * 1;
  } else {
    return alert("Dữ liệu không hợp lệ");
  }

  if (1900 <= nam) {
    nam = document.getElementById("nam").value * 1;
  } else {
    return alert("Dữ liệu phải sau năm 1900");
  }
  if (
    thang == 1 ||
    thang == 3 ||
    thang == 5 ||
    thang == 7 ||
    thang == 8 ||
    thang == 10 ||
    thang == 12
  ) {
    ngay = 31;
  } else if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
    ngay = 30;
  } else if (thang == 2) {
    if ((nam % 4 == 0 && nam % 100 !== 0) || nam % 400 == 0) {
      ngay = 29;
    } else {
      ngay = 28;
    }
  }
  document.getElementById("ex6").innerHTML =
    "Tháng " + thang + " Năm " + nam + " có " + ngay + " Ngày";
}

function read() {
  var number = document.getElementById("number").value * 1;
  var a;
  var b;
  var c;
  var a1;
  var b1;
  var c1;
  if (100 <= number && number <= 999) {
    a = Math.floor(number / 100);
    b = Math.floor(number / 10) % 10;
    c = number - a * 100 - b * 10;
  } else {
    alert("Dữ liệu không hợp lệ");
  }
  if (a)
    if (b == 0 && c == 0) {
      switch (a) {
        case 1: {
          a1 = "một trăm";
          break;
        }
        case 2: {
          a1 = "hai trăm";
          break;
        }
        case 3: {
          a1 = "ba trăm";
          break;
        }
        case 4: {
          a1 = "bốn trăm";
          break;
        }
        case 5: {
          a1 = "năm trăm";
          break;
        }
        case 6: {
          a1 = "sáu trăm";
          break;
        }
        case 7: {
          a1 = "bảy trăm";
          break;
        }
        case 8: {
          a1 = "tám trăm";
          break;
        }
        case 9: {
          a1 = "chín trăm";
          break;
        }
      }
    } else if (b == 0 && c !== 0) {
      b1 = " lẻ";
      switch (c) {
        case 1: {
          c1 = " mốt";
          break;
        }
        case 2: {
          c1 = " hai";
          break;
        }
        case 3: {
          c1 = " ba";
          break;
        }
        case 4: {
          c1 = " bốn";
          break;
        }
        case 5: {
          c1 = " năm";
          break;
        }
        case 6: {
          c1 = " sáu";
          break;
        }
        case 7: {
          c1 = " bảy";
          break;
        }
        case 8: {
          c1 = " tám";
          break;
        }
        case 9: {
          c1 = " chín";
          break;
        }
      }

      switch (a) {
        case 1: {
          a1 = "một trăm";
          break;
        }
        case 2: {
          a1 = "hai trăm";
          break;
        }
        case 3: {
          a1 = "ba trăm";
          break;
        }
        case 4: {
          a1 = "bốn trăm";
          break;
        }
        case 5: {
          a1 = "năm trăm";
          break;
        }
        case 6: {
          a1 = "sáu trăm";
          break;
        }
        case 7: {
          a1 = "bảy trăm";
          break;
        }
        case 8: {
          a1 = "tám trăm";
          break;
        }
        case 9: {
          a1 = "chín trăm";
          break;
        }
      }
    } else if (b !== 0 && c == 0) {
      switch (a) {
        case 1: {
          a1 = "một trăm";
          break;
        }
        case 2: {
          a1 = "hai trăm";
          break;
        }
        case 3: {
          a1 = "ba trăm";
          break;
        }
        case 4: {
          a1 = "bốn trăm";
          break;
        }
        case 5: {
          a1 = "năm trăm";
          break;
        }
        case 6: {
          a1 = "sáu trăm";
          break;
        }
        case 7: {
          a1 = "bảy trăm";
          break;
        }
        case 8: {
          a1 = "tám trăm";
          break;
        }
        case 9: {
          a1 = "chín trăm";
          break;
        }
      }

      switch (b) {
        case 1: {
          b1 = " mười";
          c1 = "";
          break;
        }
        case 2: {
          b1 = " hai ";
          c1 = "mươi";
          break;
        }
        case 3: {
          b1 = " ba ";
          c1 = "mươi";
          break;
        }
        case 4: {
          b1 = " bốn ";
          c1 = "mươi";
          break;
        }
        case 5: {
          b1 = " năm ";
          c1 = "mươi";
          break;
        }
        case 6: {
          b1 = " sáu ";
          c1 = "mươi";
          break;
        }
        case 7: {
          b1 = " bảy ";
          c1 = "mươi";
          break;
        }
        case 8: {
          b1 = " tám ";
          c1 = "mươi";
          break;
        }
        case 9: {
          b1 = " chín ";
          c1 = "mươi";
          break;
        }
      }
    } else if (b !== 0 && c !== 0) {
      switch (a) {
        case 1: {
          a1 = "một trăm";
          break;
        }
        case 2: {
          a1 = "hai trăm";
          break;
        }
        case 3: {
          a1 = "ba trăm";
          break;
        }
        case 4: {
          a1 = "bốn trăm";
          break;
        }
        case 5: {
          a1 = "năm trăm";
          break;
        }
        case 6: {
          a1 = "sáu trăm";
          break;
        }
        case 7: {
          a1 = "bảy trăm";
          break;
        }
        case 8: {
          a1 = "tám trăm";
          break;
        }
        case 9: {
          a1 = "chín trăm";
          break;
        }
      }

      switch (b) {
        case 1: {
          b1 = " mười";
          break;
        }
        case 2: {
          b1 = " hai mươi";
          break;
        }
        case 3: {
          b1 = " ba mươi";
          break;
        }
        case 4: {
          b1 = " bốn mươi";
          break;
        }
        case 5: {
          b1 = " năm mươi";
          break;
        }
        case 6: {
          b1 = " sáu mươi";
          break;
        }
        case 7: {
          b1 = " bảy mươi";
          break;
        }
        case 8: {
          b1 = " tám mươi";
          break;
        }
        case 9: {
          b1 = " chín mươi";
          break;
        }
      }

      switch (c) {
        case 1: {
          c1 = " mốt";
          break;
        }
        case 2: {
          c1 = " hai";
          break;
        }
        case 3: {
          c1 = " ba";
          break;
        }
        case 4: {
          c1 = " bốn";
          break;
        }
        case 5: {
          c1 = " năm";
          break;
        }
        case 6: {
          c1 = " sáu";
          break;
        }
        case 7: {
          c1 = " bảy";
          break;
        }
        case 8: {
          c1 = " tám";
          break;
        }
        case 9: {
          c1 = " chín";
          break;
        }
      }
    }
  document.getElementById("ex7").innerHTML = a1 + b1 + c1;
}
