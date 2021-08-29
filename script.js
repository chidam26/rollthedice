var target=30;
var p1=0;
var p2=0;
var count=1;
var button=document.getElementById("button");
function picknumber() {
    if(count%2== 1) {
        var player1 = (Math.floor(Math.random()*10)%6)+1;
    document.getElementById("math").value = player1
    p1 += player1;
    document.getElementById("score1").value = p1;
    if (p1>=target){
        document.getElementById("result").innerHTML="Player 1 wins"
        button.remove();
    }
    else {count=2}
    }
    else {
        var player2 = (Math.floor(Math.random()*10)%6)+1;
    document.getElementById("math").value = player2
    p2 += player2;
    document.getElementById("score2").value = p2;
    if (p2>=target) {
        document.getElementById("result").innerHTML="Player 2 wins"
        button.remove();
    }
    else {count=1}
    }
}