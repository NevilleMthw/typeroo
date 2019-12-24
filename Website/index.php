<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
	
    //Output header and navigation 
    outputHeader("My Game Website - Home");
	outputBannerNavigation("About");
	echo '<link rel="stylesheet" type="text/css" href="style.css">';
    echo '</head>';
    echo '<body background="Images\spacebg.png">';
?>

<!-- Contents of the page -->
<div class="title">
	<h3>How To Play? Glad you asked.</h3>
</div>
<section>
	<div id="flipcard1">
		<div id="innerflipcard1">
			<div class="frontflipcard">
				STEP 1
			</div>
			<div class="backflipcard">
				<p>Once the game starts, you will be faced with a wave of enemies.</p>
			</div>
		</div>
	</div>
	<div id="flipcard2">
		<div id="innerflipcard2">
			<div class="frontflipcard">
				STEP 2
			</div>
			<div class="backflipcard">
				<p>You only have a few seconds to type the letters. Once that's done, you get ammo to fire.</p>
			</div>
		</div>
	</div>
	<div id="flipcard3">
		<div id="innerflipcard3">
			<div class="frontflipcard">
				STEP 3
			</div>
			<div class="backflipcard">
				<p>As the game progresses, typing the words become increasingly difficult to type. Good luck!</p>
			</div>
		</div>
	</div>
</section>
<article>
	<div id="line2">
		<hr>
	</div>
	<div class="title">
		<h3>About The Game</h3>
	</div>
	<div id="aboutthegame">
		<p>This game is a shooter/typing words game. The game is about how fast you can type the words and get through all the waves. This is a purely typing based game.</p>
	</div>
</article>  

<?php
    //Output the footer
    outputFooter();
?>