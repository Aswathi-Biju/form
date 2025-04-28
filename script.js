function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;
    var errorMessages = "";

    if (name == "") {
        errorMessages += "Name is required.\n";
    }
    if (email == "") {
        errorMessages += "Email is required.\n";
    }
    if (password == "") {
        errorMessages += "Password is required.\n";
    }

    if (errorMessages != "") {
        alert(errorMessages);
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

const particlesCanvas = document.getElementById('particles');
const particlesCtx = particlesCanvas.getContext('2d');

particlesCanvas.width = window.innerWidth;
particlesCanvas.height = window.innerHeight;

let particlesArray = [];

class Particle {
    constructor(){
        this.x = Math.random() * particlesCanvas.width;
        this.y = Math.random() * particlesCanvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random();
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;

        // Sparkling effect: randomly change opacity
        this.opacity += (Math.random() - 0.5) * 0.05;
        if (this.opacity > 1) this.opacity = 1;
        if (this.opacity < 0.1) this.opacity = 0.1;
    }
    draw(){
        particlesCtx.beginPath();
        particlesCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        particlesCtx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        particlesCtx.shadowColor = '#ffffff';
        particlesCtx.shadowBlur = 10;
        particlesCtx.fill();
    }
}

function init(){
    particlesArray = [];
    for(let i = 0; i < 100; i++){
        particlesArray.push(new Particle());
    }
}

function animate(){
    particlesCtx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);
    for(let i=0; i<particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener('resize', () => {
    particlesCanvas.width = window.innerWidth;
    particlesCanvas.height = window.innerHeight;
    init();
});
