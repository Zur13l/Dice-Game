
    const firstRandomNum = 
    Math.floor(Math.random() * 6) + 1

    const firstDiceImage = 'dice/dice' + firstRandomNum + '.png';

    document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);


    const secondRandomNum = 
    Math.floor(Math.random() * 6) + 1

    const secondDiceImage = 'dice/dice' + secondRandomNum + '.png';

    document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);

    if (firstRandomNum > secondRandomNum) {
        document.querySelector ('h1').innerHTML = 'Player 1 wins!';
    } else if (firstRandomNum < secondRandomNum){
        document.querySelector ('h1').innerHTML = 'Player 2 wins!';
    } else {
        document.querySelector ('h1').innerHTML = "It's a draw!";
    }