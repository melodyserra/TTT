var turn = 1;

var spaces = document.querySelectorAll("td");

//Add letter to board alternating between turns

for (var i = 0; i < spaces.length; i++) {
    spaces[i].addEventListener("click", function() {
        if (this.innerHTML === "") {
            if (turn === 1) {
                this.innerHTML = "X";
                turn = 2;
                this.setAttribute("class", "xturn");
            } else {
                this.innerHTML = "O";
                turn = 1;
                this.setAttribute("class", "oturn");
            }
        } else {
            alert("This spot is already taken!");
        }
    });
}

//Reload the page when reset button is clicked

document.getElementById("resetButton").addEventListener("click", function() {
    location.reload();
});