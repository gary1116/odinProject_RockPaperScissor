const values = ["Rock", "Paper", "Scissors"];
let user = 0;
let computer = 0;
let userValue = (s) => {
    document.getElementById("choice").innerHTML = "You Choose " + s.value + "!";

    // Set a timeout to clear the text after 5 seconds timeoutId =
    setTimeout(function () {
        document.getElementById("choice").innerHTML = "";
    }, 3000); // 5000 milliseconds = 5 seconds



    const randomIndex = Math.floor(Math.random() * values.length);
    document.getElementById("computer_choice").innerHTML = "The Computer Chooses :-" + values[randomIndex] + "!";
    whoWon(s, randomIndex); // Pass randomIndex to whoWon function

    setTimeout(function () {
        document.getElementById("computer_choice").innerHTML = "";
    }, 3000);


}

let whoWon = (s, randomIndex) => {
    if (s.value == "Rock" && randomIndex == 0) {
        document.getElementById("ww").innerHTML = "It is a Tie!!";
        console.log("tie, " + randomIndex);
    } else if (s.value == "Rock" && randomIndex == 1) {
        document.getElementById("ww").innerHTML = "You Lose 😞";
        console.log("lost , " + randomIndex);
        computer++;
        document.getElementById("computer").innerHTML = computer.valueOf();
    } else if (s.value == "Rock" && randomIndex == 2) {
        console.log("won, " + randomIndex);
        document.getElementById("ww").innerHTML = "You won 😎😎!!";
        user++;
        document.getElementById("user").innerHTML = user.valueOf();
    }else if(s.value == "Paper" && randomIndex == 0){
        document.getElementById("ww").innerHTML = "You won 😎😎!!";
        user++;
        document.getElementById("user").innerHTML = user.valueOf();
    }else if(s.value == "Paper" && randomIndex == 1){
        document.getElementById("ww").innerHTML = "It is a Tie!!";
    }else if(s.value == "Paper" && randomIndex == 2){
        document.getElementById("ww").innerHTML = "You Lose 😞";
        computer++;
        document.getElementById("computer").innerHTML = computer.valueOf();
    }else if(s.value == "Scissors" && randomIndex == 0){
        document.getElementById("ww").innerHTML = "You Lose 😞";
        computer++;
        document.getElementById("computer").innerHTML = computer.valueOf();
    }else if(s.value == "Scissors" && randomIndex == 1){
        document.getElementById("ww").innerHTML = "You won 😎😎!!";
        user++;
        document.getElementById("user").innerHTML = user.valueOf();
    }else{
        document.getElementById("ww").innerHTML = "It is a Tie!!";
    }



    setTimeout(function () {
        document.getElementById("ww").innerHTML = "";
    }, 3000)
}




