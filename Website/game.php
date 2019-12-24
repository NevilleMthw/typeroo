<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
	
    //Output header and navigation 
    outputHeader("My Game Website - Game");
	echo '<link rel="stylesheet" type="text/css" href="game.css">';
    echo '</head>';
	echo '<body background="Images\spacebg.png">';
	outputBannerNavigation("Game");
?>

<!-- Contents of the page -->

	<div class="gameContainer">
        <div id= "mainmenu">
            <button id = "home">Home</button>
            <button id = "easy">Easy</button>
            <button id = "medium">Medium</button>
            <button id = "hard">Hard</button>
            
        </div>
        <div id="game">
            
            <div id="gamebox">
                <div class="healthBar">
                    <div class="bossHp">Boss Hp:</div>
                    <div class="healthBg">
                        <div class="health"></div>
                    </div>
</div>

                
                    <div class="wordsWrap">
                        <p class="words"></p>
                    </div>
                
                <div id="timestatus">
                    <h1 class="time">Time : <span id="theTime">-</span></h1>
                </div>
			</div>
				<img src="Mons0.gif" id="monster_start">
				<img src="Mons0-die.gif" id="monster_die">
        </div>

        <div id="gamewin">
            <h1 class="win">You Win</h1>
        </div>

        <div id="gameover">
            <h1 class="lose">Game Over</h1> 
        </div>
        <div id="score">
            <div class="myscore"><span id="updatescore">-</span>Score</div>
		</div>
</div>
<script src = "game.js">
</script>
