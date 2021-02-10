Vue.component('headerjuego', { 
    data() {
		return{
            
        }
    },
    props: ['colorAJugar'],
    methods: {
    },
    template: `
    <div id="header">
		<h1>The Great <br>
			<span id="colorDisplay">{{colorAJugar}}</span>
			<br>
			Guessing Game</h1>
	</div> `
})

Vue.component('navigator', { 
    data() {
        return {
             colorcount : 6,
             colors:[],
             isHard : true,
             msg:"",
             isHard : true,
             squares:[],

        }
    },
    props: [],
    


    methods: {

        init(){
        //  var squares = document.querySelectorAll(".square");
          var messageDisplay = document.getElementById("message");
         //   var pickedColor = colors[PickColor()];
         const pickedColor = this.restart();
         const restartButton = document.querySelector("#reset");
         var header = document.querySelector("#header");

            for (var i = 0; i <squares.length; i++) {
               squares[i].style.backgroundColor = this.colors[i];
                squares[i].addEventListener("click", function(){
                    var clickedColor = this.style.backgroundColor;
                    if (clickedColor === pickedColor) {
                        messageDisplay.textContent = "You Picked Right!";
                        setAllColorsTo(pickedColor);
                        restartButton.textContent = "Play Again!";
                        header.style.backgroundColor = pickedColor;
                    } else {
                        this.style.backgroundColor = "#232323";
                        messageDisplay.textContent = "Try Again!";
                        messageDisplay.style.color = "#000000";
                    }
                });
            }
        
         this.restart();
        },


        
         setAllColorsTo(color) {
            var squares = document.querySelectorAll(".square");
            squares.forEach(function (square){
                square.style.backgroundColor = color;
            })
        },

        dificultadEasy(){
            var squares = document.querySelectorAll(".square");
            var easyButton = document.querySelector("#easy");
            var hardButton = document.querySelector("#hard");

        
            if (this.isHard) {
                this.isHard = false;
                easyButton.classList.add("selected");
                hardButton.classList.remove("selected");
                colorCount = 3;
                for (var i = 0; i < colorCount; i++) {
                    squares[(i+3)].style.display = "none";
                }
                this.restart();
            }
        
        },

        dificultadHard(){
           var squares = document.querySelectorAll(".square");
            var easyButton = document.querySelector("#easy");
            var hardButton = document.querySelector("#hard");
            if (!this.isHard) {
                this.isHard = true;
                hardButton.classList.add("selected");
                easyButton.classList.remove("selected");
                colorCount = 6;
                this.restart();
                for (var i = 3; i < 6; i++) {
                    squares[i].style.display = "block";
                }
            }
        },


        
        // function restart(){
        //     colors = createNewColors(colorCount);
        //     pickedColor = colors[PickColor()];
        //     colorDisplay.textContent = pickedColor;
        //     this.textContent = "Pick New Colors!";
        //     header.style.backgroundColor = "steelblue";
        //     messageDisplay.textContent = "";
        //     restartButton.textContent = "New Colors!";
        //     for (var i = 0; i <squares.length; i++) {
        //         squares[i].style.backgroundColor = colors[i];
        //     }
        // }

        restart(){
            const colorDisplay = document.getElementById("colorDisplay");
            const messageDisplay = document.getElementById("message");
            const restartButton = document.querySelector("#reset");
            const squares = document.querySelectorAll(".square");
            var header = document.querySelector("#header");


            colors = this.createNewColors(this.colorcount);
            pickedColor = colors[this.PickColor()];
            colorDisplay.textContent = pickedColor;
            this.textContent = "Pick New Colors!";
            header.style.backgroundColor = "steelblue";
            messageDisplay.textContent = "";
            restartButton.textContent = "New Colors!";
            for (var i = 0; i <squares.length; i++) {
                squares[i].style.backgroundColor = colors[i];
            }

            return pickedColor;
        },


        PickColor(){
            let quantity;
            if (this.isHard) {
                quantity = 6;
            } else {
                quantity = 3;
            }
            return Math.floor(Math.random() * quantity );
        },

         createNewColors(numbers){
            var arr = [];
            for (var i = 0; i < numbers; i++) {
                arr.push(this.createRandomStringColor());
            }
            return arr;
        },

        createRandomStringColor(){
            var newColor = "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")" ;
        //	console.log(newColor);
            return newColor;
        }, 

         randomInt(){
            return Math.floor(Math.random() * 256);
        }
        
    },
    template: `
        <div>
            <button @click="init"> Empezar</button>
            <button id="reset" @click="restart"> New colors</button>
            <span id="message">{{msg}}</span>
            <button id="easy" @click="dificultadEasy">easy</button>
            <button id="hard" class="selected" @click="dificultadHard">hard</button>
       
    </div>
    
     `
})

       

var app = new Vue({
    el: '#app',
    data: {
       colorAJugar:'30,40,50',
    },
    methods: {
        
    },
    computed: {
        
    }
})