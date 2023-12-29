const plusIcon = document.getElementsByClassName("plus");
const minusIcon = document.getElementsByClassName("minus");
const paraOne = document.getElementById("para-1");
const para = document.getElementsByClassName("para")

let expandEle = document.getElementsByClassName('question')
for (var i = 0; i < expandEle.length; i++) {
    expandEle[i].addEventListener('click', expand)
    expandEle[i].setAttribute('data-index', i)
}
function expand(event) {
   let btn = event.currentTarget;
   let index = btn.getAttribute('data-index');
   para[index].classList.toggle("active")
   plusIcon[index].classList.toggle("active");
   minusIcon[index].classList.toggle("active");

   

}