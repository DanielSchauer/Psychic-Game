
// Could not get this part to work. 
function playgame() {

    document.getElementById.onkeypress=function() {

        // Letter list
        var game = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

        // Player choice
        var choice = game[Math.floor(Math.random() * game.length)];
            console.log(game)

        // Computer Answer
        var Answer = game(choice);

        var wins = 0

        var losses = 0

        var lives = 9

        document.getElementById.onkeypress(choice)


        document.write("Guess what letter I'm thinking of!");
        document.write("Wins: " + wins);
        document.write("Losses: " + losses);
        document.write("Guesses left: " + lives );
        document.write("Guesses so far: " );



        if (Answer === choice) {

            alert("You winn");
            wins + 1

        } else {
            alert("Try again");
            lives - 1
            
        } 
        
        if (lives === 0) {
            alert("Game over man, Game Over!");
            losses + 1

    
        }
    }
}






