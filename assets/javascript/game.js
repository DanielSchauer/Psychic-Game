var victory = document.getElementById("wins");
var defeat = document.getElementById("losses");
var chances = document.getElementById("lives");
var selected = document.getElementById("chosen");
var wronganswer = "";

// Could not get this part to work. 
function playgame() {

    //document.getElementById.onkeypress=function() {
        
        // Letter list
        var game = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

        // computer choice
        var choice = game[Math.floor(Math.random() * game.length)];
            console.log(choice);

        // player Answer
        var Answer = "";
            console.log(Answer);

        var wins = 0;
            console.log(wins);
        var losses = 0;
            console.log(losses);
        var lives = 9;
            console.log(lives);
        var chosen = Answer
            console.log(chosen);


        //document.getElementById.onkeypress(choice);


        //document.write("Guess what letter I'm thinking of!");
        //document.write("Wins: " + wins);
        //document.write("Losses: " + losses);
        //document.write("Guesses left: " + lives );
        //document.write("Guesses so far: " );

    
        document.onkeyup=function(event) {
            Answer = event.key;
                console.log(Answer + " key pressed");
                console.log(choice + " Corect answer");
             if (Answer === choice) {

                alert("You winn!");
                wins= wins + 1;
                lives = 9;
                victory.textContent=wins+"";
                selected.textContent = "";
                wronganswer = "";
                choice = game[Math.floor(Math.random() * game.length)];
                
                }  
            else {
                alert("Try again!");
                lives= lives - 1;
                wronganswer = wronganswer + Answer + ",";
                chances.textContent = lives + "";
                selected.textContent = wronganswer +  "";
                //defeat.textContent=losses+""
                
            
            } 
        
            if (lives === 0) {
                alert("Game over man, Game Over!");
                losses = losses + 1;
                lives = 9;
                defeat.textContent= losses + ""
                selected.textContent = "";
                wronganswer= "";
                choice = game[Math.floor(Math.random() * game.length)];

                }
           
    
        }
    }
//}


playgame();






