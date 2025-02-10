const increaseYesButton = () => {
    let yesButton = document.querySelector('.yes');
    let currentSize = window.getComputedStyle(yesButton).getPropertyValue('transform');
    let scaleMatch = currentSize.match(/matrix\(([^,]+),/);
    let scale = scaleMatch ? parseFloat(scaleMatch[1]) : 1;
    yesButton.style.transform = `scale(${scale + 0.2})`;
}



const createHeart = () => {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 4000);
}
setInterval(createHeart, 300);


const showLove = () => {
    let bigHeart = document.createElement("div");
    bigHeart.innerHTML = "❤️";
    bigHeart.classList.add("big-heart");
    document.body.appendChild(bigHeart);
    const yes = document.getElementById('yes');
    const no = document.getElementById('no');
    const question = document.getElementById('question');
    
    // we create a dive to display the heart 
    let loveText = document.createElement("div");
    loveText.innerHTML = "I Love You! <br> Baby Girl <br> Melochka";
    loveText.classList.add("love-text");
    document.body.appendChild(loveText);
    yes.classList.add('hide');
    no.classList.add('hide');
    question.classList.add('hide')

}
