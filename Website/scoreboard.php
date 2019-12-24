<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
	
    //Output header and navigation 
    outputHeader("My Game Website - Scorebaord");
    outputBannerNavigation("Scoreboard");
    echo '<link rel="stylesheet" type="text/css" href="style.css">';
    echo '</head>';
    echo '<body background="Images\spacebg.png">';
?>

<!-- Contents of the page -->

<table id="scoreboard" >
           
            <tr>
                <th>Username</th>
                <th>Points</th>
            </tr>
	
</table>

<script>
window.onload = function rankings() {
        var table = document.getElementById("scoreboard");
        for(var i=0, len=localStorage.length; i<len; i++) {
            var obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
            var key = localStorage.key(i);
            var value = localStorage[key];
            if (obj.username2 != undefined && obj.points != undefined) {
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML=obj.username2;
            cell2.innerHTML=obj.points;
            }  
          }
    };

</script>
<?php
    //Output the footer
    outputFooter();
    ?>
