<?php

//Ouputs the header for the page and opening body tag
function outputHeader($title){
    echo '<!DOCTYPE html>';
    echo '<html lang = "en">';
    echo '<meta name="viewport" content="width=device-width, initial-scale=1.0" charset="UTF-8">';
    echo '<html>';
    echo '<head>';
    echo '<title>' . $title . '</title>';
   
}

/* Ouputs the banner and the navigation bar
    The selected class is applied to the page that matches the page name variable */
    function outputBannerNavigation($pageName){
    //Output banner and first part of navigation
    echo '<header>';
    echo '<div class = "logo">
    <img src="Images\space invaders logo.jpg">
    </div>
    <div class = "container">
    <h2>..Typeroo..</h2>   
    </div>';
    echo '<div id="navBar">';
    echo '<nav>';
    
    //Array of pages to link to
    $linkNames = array("About", "Login/SignUp", "Game", "Scoreboard");
    $linkAddresses = array("index.php", "login.php", "game.php", "scoreboard.php");
    
    //Output navigation
    for($x = 0; $x < count($linkNames); $x++){
        echo '<a ';
        if($linkNames[$x] == $pageName){
            echo 'class="selected" ';
        }
        echo 'href="' . $linkAddresses[$x] . '">' . $linkNames[$x] . '</a>';
    }
    echo '<hr>';
    echo '</nav>';
    echo '</div>';
    echo '</header>';
}

//Outputs closing body tag and closing HTML tag
function outputFooter(){
    echo '<footer> <p>Copyright Neville Mathew 2019 <sup>&copy;</sup></p> </footer>';
    echo '</body>';
    echo '</html>';
}

