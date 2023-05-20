var img = document.querySelectorAll("#imgaccueil");
// img.style.border='2px black';
console.log(img);
// console.lo
for(var i=0;i<img.length;i++){

    img[i].addEventListener(
        "mouseover",
        (event) => {
        
            event.target.style.width = "17%";
            event.target.style.height = "17%";
            setTimeout(() => {
                event.target.style.width = "14%";
                event.target.style.height = "14%";

            }, 1000);
        },
        true
        );


}
