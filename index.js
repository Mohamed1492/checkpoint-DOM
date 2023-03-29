var btnPlus = document.getElementsByClassName("plus");
var btnMinus = document.getElementsByClassName("minus");
var btnlike = document.getElementsByClassName("like");
var btndelete = document.getElementsByClassName("delete");
var totalcostarr = document.getElementsByClassName("price");

// Bouton + et - :
for (var i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", increment);
  btnMinus[i].addEventListener("click", decrement);
}
// fonction (+)
function increment(e) {
  const btn = e.target;
  const divelt = btn.parentElement.parentElement;
  var quantitytag = divelt.querySelector("p");
  var quantitynumb = Number(quantitytag.innerHTML);
  quantitynumb++;
  quantitytag.innerHTML = quantitynumb;
  const unitePrice = Number(
    divelt.parentElement.parentElement.querySelector(".unitPrice").innerHTML
  );
  var pricetag = divelt.parentElement.parentElement.querySelector(".price");
  var pricevalue = Number(pricetag.innerHTML);
  pricevalue = unitePrice * quantitynumb;
  pricetag.innerHTML = pricevalue;
  calcultotal();
  // if(divelt.parentElement.parentElement.querySelector(".check").checked==true){calcultotal();}
}

// fonction (-)
function decrement(e) {
  const btn = e.target;
  const divelt = btn.parentElement.parentElement;
  var quantitytag = divelt.querySelector("p");
  var quantitynumb = Number(quantitytag.innerHTML);
  if (quantitynumb > 0) {
    quantitynumb--;
    quantitytag.innerHTML = quantitynumb;
    const unitePrice = Number(
      divelt.parentElement.parentElement.querySelector(".unitPrice").innerHTML
    );
    var pricetag = divelt.parentElement.parentElement.querySelector(".price");
    var pricevalue = Number(pricetag.innerHTML);
    pricevalue = unitePrice * quantitynumb;
    pricetag.innerHTML = pricevalue;
    calcultotal();
    // if(divelt.parentElement.parentElement.querySelector(".check").checked==true){calcultotal();}
  }
}

// bouton like
for (var i = 0; i < btnlike.length; i++) {
  btnlike[i].addEventListener("click", painter);
}
let index = 0;
function painter(e) {
  const btn = e.target;

  const colors = ["#D81E1B", "#424242"];
  console.log(colors);
  btn.style.color = colors[index];
  if (index == 0) {
    index += 1;
  } else {
    index = 0;
  }
}

// bouton delete
for (var i = 0; i < btndelete.length; i++) {
  btndelete[i].addEventListener("click", deleter);
}
function deleter(e) {
  const btn = e.target;
  const divelt = btn.parentElement.parentElement.parentElement.parentElement;
  divelt.remove();
  calcultotal();
}

// const checkboxes = document.querySelectorAll('.check');
// checkboxes.forEach(function(checkbox) {
//   checkbox.addEventListener('change', function() {
//     if (this.checked) {
//       calcultotal();
//     }
//   });
// });


//  fonction calcul du total
function calcultotal() {
  var totalcost = 0;
  // if (document.querySelector("#shipped").checked==true){totalcost += Number(totalcostarr[totalcostarr.length-1].innerHTML)};
  for (var i = 0; i < totalcostarr.length; i++) {
    if(document.querySelectorAll(".check")[i].checked==true){
      totalcost += Number(totalcostarr[i].innerHTML);
    const tabelt = document.querySelector("#total");
    tabelt.innerHTML = totalcost;
}
}
}