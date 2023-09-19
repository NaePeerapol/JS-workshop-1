function useif() {
    var score = document.getElementById("score").value;
    if (score > 0 && score < 50) {
        alert("You got " + score + " points...You fail!!");
    }
    if (score >= 50 && score <= 100) {
        alert("You got " + score + " points...You pass!!");
    }
    if (score > 100) {
        alert("Your score is incorrect!!");
    }
    if (score < 0) {
        alert("Your score is incorrect!!");
    }
    if (isNaN(score)) {
        alert("Your score is incorrect!!");
    }
    if (score == "") {
        alert("Please input your score before press the button!!");
    }
}