var numberOfButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
    }
    document.addEventListener("keydown", function(event){
    makesound(event.key); //if you do console.log(event);, it grabs the key that was pressed.
    buttonAnimation(event.key);
})
      function makesound(letter){
        switch (letter) {
            case "w": 
             var tom1 = new Audio('sounds/tom-1.mp3');
             tom1.play(); //constructor function - refer housekeeper folder  
                break;

            case "a": 
             var tom2 = new Audio('sounds/tom-2.mp3');
             tom2.play();   
                break;
                
            case "s": 
             var tom3 = new Audio('sounds/tom-3.mp3');
             tom3.play();   
                break;
                
            case "d": 
             var tom4 = new Audio('sounds/tom-4.mp3');
             tom4.play();   
                break;
            
            case "j": 
             var crash = new Audio('sounds/crash.mp3');
             crash.play();   
                break;

            case "k": 
             var kick = new Audio('sounds/kick-bass.mp3');
             kick.play();   
                break;
                
            case "l": 
             var snare = new Audio('sounds/snare.mp3');
             snare.play();   
                break;     
        
            default: console.log(innerHTML);
                break;
        }
      }

      function buttonAnimation(characterKey){
        var activeButton = document.querySelector("." + characterKey);
        activeButton.classList.add("pressed");
        setTimeout(function(){activeButton.classList.remove("pressed")}, 100);
      }



