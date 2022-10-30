function getselected() {
  var elemnent = document.getElementById("list").value;
  var e = document.getElementById("list");
  var elemnent2 = document.getElementById("list2").value;
  if (elemnent == "hexa") {
  }
  const NumberEntered = document.getElementById("inp");
  let btn = document.querySelector(".sp");
  let p = document.querySelector("p");
  btn.onclick = function (e) {
    let newnum = NumberEntered.value.toString();
    if (elemnent == "binary" && elemnent2 == "decimal") {
      p.innerHTML = binarytodecimal(NumberEntered.value);
    } else if (elemnent == "binary" && elemnent2 == "octale") {
      p.innerHTML = binaryTooctal(NumberEntered.value);
    } else if (elemnent == "binary" && elemnent2 == "Hexa") {
      p.innerHTML = hexa(NumberEntered.value);
    } else if (elemnent == "decimal" && elemnent2 == "binary") {
      p.innerHTML = convertToBinary(NumberEntered.value);
    } else if (elemnent == "decimal" && elemnent2 == "octale") {
      p.innerHTML = decimaltooctale(NumberEntered.value.toString());
    } else if (elemnent == "binary" && elemnent2 == "binary") {
      p.innerHTML = "Same result ";
    } else if (elemnent == "decimal" && elemnent2 == "decimal") {
      p.innerHTML = "Same result ";
    } else if (elemnent == "decimal" && elemnent2 == "Hexa") {
      p.innerHTML = dec2Hex(NumberEntered.value);
    } else if (elemnent == "Hexa" && elemnent2 == "binary") {
      p.innerHTML = hex2bin(NumberEntered.value);
    } else if (elemnent == "Hexa" && elemnent2 == "decimal") {
      p.innerHTML = hexToDecimal(NumberEntered.value);
    } else if (elemnent == "Hexa" && elemnent2 == "octale") {
      p.innerHTML = "Not Supported";
    } else if (elemnent == "Hexa" && elemnent2 == "Hexa") {
      p.innerHTML = "same";
    } else if (elemnent == "octale" && elemnent2 == "binary") {
      p.innerHTML = OctToBin(NumberEntered.value);
    } else if (elemnent == "octale" && elemnent2 == "decimal") {
      p.innerHTML = octalToDecimal(NumberEntered.value);
    } else if (elemnent == "octale" && elemnent2 == "Hexa") {
      p.innerHTML = octaletohex(NumberEntered.value);
    }
  };
}

function binarytodecimal(number) {
  let sum = 0;
  let o = 0;
  for (let i = number.length - 1; i >= 0; i--) {
    let x = parseInt(number.charAt(i));
    sum += Math.pow(2, o) * x;
    o++;
  }
  return sum;
}

const binaryTooctal = (binary) => {
  return parseInt(binary, 2).toString(8);
};

var hexa = (number) => parseInt(number, 2).toString(16);

// program to convert decimal to binary
function convertToBinary(x) {
  let bin = 0;
  let rem,
    i = 1,
    step = 1;
  while (x != 0) {
    rem = x % 2;

    x = parseInt(x / 2);
    bin = bin + rem * i;
    i = i * 10;
  }
  return bin;
}

// something wron with it
function decimaltooctale(number) {
 return parseInt(number, 8);
}

function dec2Hex(dec) {
  return Math.abs(dec).toString(16);
}

function hex2bin(hex) {
  return ("00000000" + parseInt(hex, 16).toString(2)).substr(-8);
}
let fun = function (num) {
  return hex2bin(num).toString();
};
const hexToDecimal = (hex) => parseInt(hex, 16);
function OctToBin(octnum) {
  let i = 0;

  let binary = "";

  while (i < octnum.length) {
    let c = octnum[i];
    switch (c) {
      case "0":
        binary += "000";
        break;
      case "1":
        binary += "001";
        break;
      case "2":
        binary += "010";
        break;
      case "3":
        binary += "011";
        break;
      case "4":
        binary += "100";
        break;
      case "5":
        binary += "101";
        break;
      case "6":
        binary += "110";
        break;
      case "7":
        binary += "111";
        break;
    }
    i++;
  }

  return binary;
}
function octalToDecimal(n) {
  var num = n;
  var dec_value = 0;

  // Initializing base value
  // to 1, i.e 8^0
  var base = 1;

  var temp = num;
  while (temp > 0) {
    // Extracting last digit
    var last_digit = temp % 10;
    temp = Math.floor(temp / 10);

    // Multiplying last digit with
    // appropriate base value and
    // adding it to dec_value
    dec_value += last_digit * base;

    base = base * 8;
  }
  return dec_value;
}

function octaletohex(hexnum) {
  var decnum, octnum;

  octnum = hexnum;

  decnum = octalToDecimal(octnum);

  hexnum = dec2Hex(decnum);
  return hexnum;
}
/*
let arr = [0, 0, 0, 1];
let arr2 = [1, 1, 1, 1];
let arr3 = [];
for (let i = 0; i < arr.length; i++) {
  arr3.push(arr[i] * arr2[i]);
}
console.log(arr3);
*/
