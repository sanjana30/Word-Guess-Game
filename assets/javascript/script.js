var computerChoices = ["laptop", "charger", "notebook", "classroom", "pen", "pencil", "bag", "desk", "chair", "whiteboard", "marker", "teacher", "student", "eraser", "sharpener", "books"];
      var index=0;
      var inputArr = [];
      var userWord = [];
      var guessLeft = 15;
      var compWord = [];
      var score= 0;
      var flag=0;
      var userWordLength = 0;
      var currentWord;
      var res;
      generateWord();
      // Randomly pick a word from the computerChoices array
      function generateWord(){
      currentWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            //display the picked word in console
            console.log("Computer's choice : " +currentWord);
            console.log("-------");
            res = currentWord.split("");
            for(var index=0; index<res.length; index++){
              userWord.push("-");
            }
          };
     
      alert("Press Enter to start game"); 
      document.onkeyup = function(event)
      {
        
        //store the entered letter by user in var userInput
        var userInput = event.key;
        //convert the user input to lower case and store in var input
        var input = userInput.toLowerCase();
       //console the user input letter
        console.log("userInput is: " +userInput);
        console.log("-------");
        console.log("lowercase input: " +input);
        var displayWord = document.getElementById("word");
        displayWord.textContent = userWord;
        
        
        
        //call checkInput function
        checkInput(input);
        // displayLetters();
        //   displayValues();
        //call displayValues function
        
        
      };
      

      function checkInput(letter){
        console.log("i am in function");
        
        //traverse the inputArr
        for(var j=0; j< inputArr.length; j++){
              if(letter !== inputArr[j]){
                //if letter just pressed is not in the inputArr, flag=o
                flag = 0;
              }
              else{
                //if letter has already been guessed, increase flag by 1
                flag = flag+1;
                break;
              }
        }   //close for loop traversing the inputArr

        if (flag === 0){
          
          // if the letter has not been already guessed, then do the following
          inputArr.push(letter);      //push the letter in the array of guesse - inputArr
          var displayGuess = document.getElementById("guess");      //fetch the id to display the guesses array
          displayGuess.textContent = inputArr.join(', ');
          guessLeft = guessLeft - 1;    //decrease the #guesses left by 1
          var remainingGuess = document.getElementById("gLeft");    //fetch the id for the #guesses left display
          remainingGuess.textContent= guessLeft;  
          
            for(var i=0; i<currentWord.length; i++){
              //traverse the length of computer selected word - currentWord
              if (letter === currentWord[i]){
                console.log("letter: " +letter+ " is at position: " +i);
                userWord[i] = currentWord[i];
                console.log(userWord);
                var displayWord = document.getElementById("word");
                displayWord.textContent = userWord;
              } //close if
            } //close for-loop
        }    //close if that has flag===0
        else if (flag !== 0){
          alert("You already guessed this character. Try again!");
        }
        if (arrEquality(userWord, res)){
          //if the entire word is guessed increase score
          score = score + 1;
          var displayScore =document.getElementById("scoreId");
          displayScore.textContent = score;
          alert ("The word is : " +userWord+ "You won!");
          alert ("Your score: " +score);
          alert ("Press Enter to refresh game");
          inputArr = [];
          guessLeft = 15;
          remainingGuess.textContent= guessLeft;
          userWord = [];
          displayWord.textContent = userWord;
          displayGuess.textContent = inputArr.join(', ');
          generateWord();
          
        }  //close if
        else if (guessLeft === 0){
          // guesses are over and could not guess the word
          alert ("Oops! You lost. The word is : " +currentWord);
          alert ("Your score: " +score);
          alert ("Press Enter to refresh game.")
          inputArr = [];
          displayGuess.textContent = inputArr.join(', ');
          guessLeft = 15;
          remainingGuess.textContent= guessLeft;
          userWord = [];
          displayWord.textContent = userWord;
          generateWord();
          
        }   
      };    //close checkInput()
           
      // function displayValues(){
      //   var remainingGuess = document.getElementById("gLeft");    //fetch the id for the #guesses left display
      //   remainingGuess.textContent= guessLeft;                   
        
      //   var displayScore =document.getElementById("scoreId");
      //   displayScore.textContent = score;
        
      // }; 
      // function displayLetters(){
        
      //   // var displayWord = document.getElementById("word");
      //   // displayWord.textContent = userWord;
      //   var displayGuess = document.getElementById("guess");      //fetch the id to display the guesses array
      //   displayGuess.textContent = inputArr.join(', ');

      // }; 

      function arrEquality(u, c){
        console.log("inside arrEquality");
        var counter =0;
        for(var k=0; k < c.length; k++){
          if (c[k] == u[k]){
            counter++;
            console.log("counter value:" +counter);
          } //close if
          else{
            counter = 0;
            console.log("counter value:" +counter);
          }   //close else
        } //for closed
        if (counter === c.length){
          return true;
        }
        else{
          return false;
        }

      };    //close arrEquality()
