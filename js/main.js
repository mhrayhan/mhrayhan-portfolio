/*$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    });

let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile_nav');


hamberger.addEventListener('click', function(){
    mobileNav.classList.add('open');
})
times.addEventListener('click', function(){
    mobileNav.classList.remove('open');
})


});
*/


// function callMyName(name, callback) {
//     var myAge = 20;
//     callback(myAge);
//     console.log('Is it interesting? Yes it is Mr.' + name);
// }

// function hello(age) {
//     console.log('I am passed through argument and my age is: ' + age);
// }

// callMyName('Zonayed Ahmed', hello);


function changeValue(a) {
    console.log('Value of a inside function before changing: ' + a);
    a = 10;
    console.log('Value of a inside function after changing: ' + a);
  
}

var a = 100;
console.log('Value of a before changing function is applied: ' + a);



console.log('Value of a after changing function is applied: ' + a);

changeValue(a);