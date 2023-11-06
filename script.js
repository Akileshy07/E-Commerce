let text = document.getElementById("typingText");

let textList = ["Shirt...","T-shirt...","Jeans...","Shorts..."];
let textIndex = 0;
let charIndex = 0;

let typingDelay = 200;
let eraseDelay = 100;
let newTextDelay = 200;

document.addEventListener("DOMContentLoaded",function(){
    setTimeout(type,typingDelay);
});

function type(){
    if(charIndex < textList[textIndex].length){
    text.innerHTML += textList[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type,typingDelay);
}
    else{
        setTimeout(erase,eraseDelay);
    }
}
function erase(){
    if(charIndex > 0){
        text.innerHTML = textList[textIndex].substring(0,charIndex - 1);
        charIndex--;
        setTimeout(erase,eraseDelay);
    }
    else{
        textIndex++; 
        if(textIndex >= textList.length)
        textIndex = 0;
        setTimeout(type,newTextDelay);
    }
}

const nav = document.querySelector(".navbar");
document.addEventListener("scroll", ()=>{
    if(window.scrollY >=56){
        nav.classList.add("navbar-scroll");
    }
    else if(window.screenY < 56){
        nav.classList.remove("navbar-scroll")
    }
})

document.addEventListener("DOMContentLoaded" , () => {
    function counter(id,start,end,duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increament = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration/range)),

        timer = setInterval( () => {
            current += increament;
            obj.textContent = current;
            if(current == end){

                clearInterval(timer)
            }
        });
    }
    counter("count1" , 0,10,10000);
    counter("count2" , 100,23,1500);
    counter("count3" , 0,5,6000);
    counter("count4" , 0,26,20000);
});

let category = document.getElementById("category");

function cat(){
    category.classList.add("active");
}

(function () {
    let customerImg = document.querySelector("#Coustomer-img");
    let customerName = document.querySelector("#Coustomer-name");
    let customerTxt = document.querySelector("#Coustomer-text");

    let btn = document.querySelectorAll(".button");
    let index = 0;
    const customers = [];

    function Customer(img, name, text) {
        this.img = img;
        this.name = name;
        this.text = text;
    }

    function generateCustomer(img, name, text) {
        let imgPath = `images/${img}.jpg`;

        let customer = new Customer(imgPath, name, text);
        customers.push(customer);
    }

    generateCustomer(0, 'Akilesh', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae inventore vero et sapiente optio quam quia ut cum cumque quae neque earum sunt eligendi porro veniam minima doloremque suscipit assumenda, placeat, asperiores natus magni labore. Optio qui dolores molestias est doloremque suscipit assumenda, placeat, asperiores natus magni labore. Optio qui dolores molestias est..');
    generateCustomer(1, 'Anirudh', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae inventore vero et sapiente optio quam quia ut cum cumque quae neque earum sunt eligendi porro veniam minima doloremque suscipit assumenda, placeat, asperiores natus magni labore. Optio qui dolores molestias est.');
    generateCustomer(2, 'Sanjay', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae inventore vero et sapiente optio quam quia ut cum cumque quae neque earum sunt eligendi porro veniam minima doloremque suscipit assumenda, placeat, asperiores natus magni labore. Optio qui dolores molestias est  sapiente optio quam quia ut cum cumque quae neque earum sunt eligendi porro veniam minima doloremque suscipit assumenda, placeat, asperiores natus magni labore. Optio qui dolores molestias est.');
    generateCustomer(3, 'Azhar', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae inventore vero et sapiente optio quam quia ut cum cumque quae neque earum sunt eligendi porro veniam minima doloremque suscipit assumenda, placeat, asperiores natus magni labore. Optio qui dolores molestias est.');

    btn.forEach(function (button) {
        button.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent the default behavior of anchor elements

            if (e.target.parentElement.classList.contains("prevBtn")) {
                if (index === 0) {
                    index = customers.length;
                }
                index--;
                customerImg.src = customers[index].img;
                customerName.textContent = customers[index].name;
                customerTxt.textContent = customers[index].text;
            }
            if (e.target.parentElement.classList.contains("nextBtn")) {
                index++;
                if (index === customers.length) {
                    index = 0;
                }
                customerImg.src = customers[index].img;
                customerName.textContent = customers[index].name;
                customerTxt.textContent = customers[index].text;
            }
        });
    });
})();








