<html>
    <head>
        <script>
            function tick1(food){
                var tickfood = document.getElementById(food); 
                tickfood.innerHTML = "selected....." + food;
                console.log(food + 'je');

            }
            function tick2(food){
                var tick = document.getElementById(food);
                tick.innerHTML ="nor selected....."+food;
            }
            var foodPrices ={'tomatoes':20,'lettuce':10,'onions':10,'cheese':20,'patty':50};
            var total = 0;
            var curfood = {'lettuce':false,'onions':false,'tomatoes':false,'patty':false,'cheese':false};
            function addFood(food){
    
            if(curfood[food]==true){
            curfood[food]=false;
            total-=foodPrices[food];
            var totalbil = document.getElementById('takeouttotal');
            totalbil.innerHTML='The total: '+ total ;
                tick2(food);

            console.log(food+' is if '+ curfood[food]);}
            else if(curfood[food]==false){curfood[food]=true;
            console.log(food+ ' is else '+ curfood[food]);
            var totalbil = document.getElementById('takeouttotal');
            total = total + foodPrices[food];
            totalbil.innerHTML='The total: '+ total ;
            console.log(total);
            tick1(food);
            console.log(food);}
            }

        </script>
        <style>
         .curtain{
            padding: 0%;
            margin: 0%;
            background: white;
            width: 100%;
            height: 50px;
            }
            .curtain>div:nth-of-type(odd){
                background-color: yellow;
            }
            #takeouttotal1{background-color: red;
            position: relative;top:70%;
            left: 30%;
            width: 20%;
            }
        .curtain-rows{
            display: inline-block ;
            background-color: red;
            width: 30px;
            height: 150px;
        }
        .image
        {
            position: absolute;
            left:500px;top:2px;
            
            border-radius: 50%;
            
            
            border-radius: 50%;
        }
        .smplbackgrnd{
            position: absolute;
            top:170px;
            background-color: rgb(30, 24, 24);
            height:500px;
            width:100%;
        }
        .addons{
            display: flex;
            gap:10px;
            position: relative;
            top:70%;
            background-color: red;
            width: fit-content;
            height: fit-content;
        }
        .ingrediants{
            background-color: red;
            position: relative;
            left:20%;
            display:flex;
            flex-direction: column;
            gap:5px;
            top:30%;
            width: fit-content;
            height: fit-content;
            text-align: center;
        }
        .checkbox1{
            background-color: white;
            width:fit-content;
            height: fit-content;
        }

        </style>
    </head>
    <body>
        <div class="image">
        <img src="./burger.jpg" alt="logo">
        </div>
        <div class="curtain">
            <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
           <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
          <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
             <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
           <div class="curtain-rows"></div>
         <div class="curtain-rows"></div>
              <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
         <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>

            <div class="curtain-rows"></div>
            <div class="curtain-rows"></div>
      
          <div class="curtain-rows"></div>
        <div class="curtain-rows"></div>
         <div class="curtain-rows"></div>
        </div>
        <div class="smplbackgrnd">
          
        </div>

<div id="takeouttotal1">
    <p id="takeouttotal">The total</p> 
    <div>
        <button onclick="alert('tq')">checkot</button>
    </div>
</div>


        <div class='addons'>
           <div> <button onclick="addFood('patty')">
                Patty
            </button></div>
           <div> <button onclick="addFood('cheese')">
                cheese
            </button></div>
            <div><button onclick="addFood('lettuce')" ">
                Lettuce
            </button></div>
            
           <div> <button onclick="addFood('tomatoes')">
                Tomatoes
            </button></div>
            <div><button onclick="addFood('onions')">
                Onion
            </button></div>
        </div>

        <div class="ingrediants">
            <div id="cheese">
                not selectd......cheese
            </div> 
            <div id="onions">
                not selected.....onions
            </div> 
            <div id="lettuce">
                not selected.....lettuce
            </div>  
        </div>
        
    </body>
</html>
