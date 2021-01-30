var anchors = document.querySelectorAll('a[href*="#"]');
console.log(anchors);
for (let anchor of anchors) {
    anchor.addEventListener("click", function(e) {
        console.log("Click anchor");
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        const fixedHeaderHeight = 55;
        const top = document.querySelector('' + blockID).offsetTop - fixedHeaderHeight;
        window.scrollTo({
            top,
            left: 0,
            behavior: 'smooth'
        });
    });
};
