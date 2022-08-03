function press(){
    const player1=Math.floor(Math.random()*6)+1;
    const play1device=`images/dice${player1}.png`;
    document.getElementById("check").setAttribute("src",play1device);

    const player2=Math.floor(Math.random()*6)+1;
    const play2device=`images/dice${player2}.png`;
    document.getElementById("check2").setAttribute("src",play2device);
     
    if( player1>player2 ){document.querySelector("h1").innerHTML="Player 1 win"}
    else if(player2>player1){document.querySelector("h1").innerHTML="Player 2 win"}
    else{document.querySelector("h1").innerHTML="Draw"}

    }