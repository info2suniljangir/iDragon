let score = 0;
let cross = true;
let gOver = false;

audio = new Audio("sounds/music.mp3");
audioGo = new Audio("sounds/gameover.mp3");

setTimeout(() => {
    audio.play();
}, 1000)

document.onkeydown = function (e) {
    
    if (e.key === "ArrowUp") {

        
            dino = document.querySelector(".dino");
            dino.classList.add("animateDino");
            setTimeout(() => {
                    dino. classList.remove("animateDino");
                }, 600)
        }

    if (e.key === "ArrowRight" && !gOver) {
        dino = document.querySelector(".dino");
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));    
        dino.style.left = dinoX + 112 + "px"    
    }

    if (e.key === "ArrowLeft" && !gOver) {
        dino = document.querySelector(".dino");
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));    
        dino.style.left = dinoX - 112 + "px" ;   
    }

}

setInterval(() => {
    dino = document.querySelector(".dino");
    gameOver = document.querySelector(".gameOver");
    obstacle = document.querySelector(".obstacle");

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("left"));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("top"));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy-oy);

    if (offsetX < 73 && offsetY < 50 ) {
        gOver = true;
        gameOver.innerHTML = "Game Over! reload to play again"
        obstacle.classList.remove("animateDragon");
        dino.classList.add("brokenImage");
        
        audioGo.play();
        audio.pause();
        setTimeout(() => {
            audioGo.pause();
        }, 1000)
    } 
    //Increment in score
    else if (offsetX < 145 && cross && !gOver ) {
        score ++;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true
        }, 1000)

        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue("animation-duration"));
            newAniDur = aniDur - 0.1;
            obstacle.style.animationDuration = newAniDur + "s";
            
        }, 500)

    }
}, 10)

function updateScore (score ) {
    document.querySelector(".scoreCount").innerHTML = "Score : " + score
}