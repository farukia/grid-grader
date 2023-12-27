var row1;
var row2;
var row3;
var row4;
var row5;

var column1;
var column2;
var column3;
var column4;
var column5;

  

function calculate() {
  var total;
  
  row1 = 0;
  row2 = 0;
  row3 = 0;
  row4 = 0;
  row5 = 0;
  
  column1 = 0;
  column2 = 0;
  column3 = 0;
  column4 = 0;
  column5 = 0;

document.getElementById("letter2").innerHTML = "yo";
  
  for (var i = 1; i < 6; i++) {
    var checkBox = document.getElementById("input" + i.toString());
    if (checkBox.checked == true) {
      row1++;
    }
  }
  row1 = row1 * row1;
  document.getElementById("letter1").innerHTML = row1;
  
  for (var j = 1; j < 6; j++) {
    checkBox = document.getElementById("input" + (j + 5).toString());
    if (checkBox.checked == true) {
      row2++;
    }
  }
  row2 = row2 * row2;
  document.getElementById("letter2").innerHTML = row2;
  
  for (var k = 1; k < 6; k++) {
    checkBox = document.getElementById("input" + (k + 10).toString());
    if (checkBox.checked == true) {
      row3++;
    }
  }
  row3 = row3 * row3;
  document.getElementById("letter3").innerHTML = row3;
  
  for (var l = 1; l < 6; l++) {
    checkBox = document.getElementById("input" + (l + 15).toString());
    if (checkBox.checked == true) {
      row4++;
    }
  }
  row4 = row4 * row4;
  document.getElementById("letter4").innerHTML = row4;
  
  for (var m = 1; m < 6; m++) {
    checkBox = document.getElementById("input" + (m + 20).toString());
    if (checkBox.checked == true) {
      row5++;
    }
  }
  row5 = row5 * row5;
  document.getElementById("letter5").innerHTML = row5;

  for (var n = 1; n < 25; n = n + 5) {
    checkBox = document.getElementById("input" + (n).toString());
    if (checkBox.checked == true) {
      column1++;
    }
  }
  column1 = column1 * column1;
  document.getElementById("category1").innerHTML = column1;

  for (var o = 1; o < 25; o = o + 5) {
    checkBox = document.getElementById("input" + (o + 1).toString());
    if (checkBox.checked == true) {
      column2++;
    }
  }
  column2 = column2 * column2;
  document.getElementById("category2").innerHTML = column2;

  for (var p = 1; p < 25; p = p + 5) {
    checkBox = document.getElementById("input" + (p + 2).toString());
    if (checkBox.checked == true) {
      column3++;
    }
  }
  column3 = column3 * column3;
  document.getElementById("category3").innerHTML = column3;

  for (var q = 1; q < 25; q = q + 5) {
    checkBox = document.getElementById("input" + (q + 3).toString());
    if (checkBox.checked == true) {
      column4++;
    }
  }
  column4 = column4 * column4;
  document.getElementById("category4").innerHTML = column4;

  for (var r = 1; r < 25; r = r + 5) {
    checkBox = document.getElementById("input" + (r + 4).toString());
    if (checkBox.checked == true) {
      column5++;
    }
  }
  column5 = column5 * column5;
  document.getElementById("category5").innerHTML = column5;

  total = row1 + row2 + row3 + row4 + row5 + column1 + column2 + column3 + column4 + column5;

  document.getElementById("title").innerHTML = "Total: " + total.toString();
  document.getElementById("cattotal").innerHTML = "Category: " + (column1 + column2 + column3 + column4 + column5).toString() + "\n" + "Letter: " + (row1 + row2 + row3 + row4 + row5).toString();
  
  
  
}

function reset() {
    document.getElementById("title").innerHTML = "Grid Grader";
  document.getElementById("cattotal").innerHTML = "";
  for (var j = 1; j < 6; j++) {
    document.getElementById("category" + j.toString()).innerHTML = "0";
    document.getElementById("letter" + j.toString()).innerHTML = "0";
  }
  for (var i = 1; i < 26; i++) {
    document.getElementById("input" + i.toString()).checked = false;
  }
}