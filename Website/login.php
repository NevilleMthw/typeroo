<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
	
    //Output header and navigation 
    outputHeader("My Game Website - Login");
	outputBannerNavigation("Login/SignUp");
	echo '<link rel="stylesheet" type="text/css" href="style.css">';
    echo '</head>';
    echo '<body background="Images\spacebg.png">';
?>

<!-- Contents of the page -->
<div class="entireform">
	<div id="login">
		<form class="form">
			<p class="signin">Login</p>
			<div>
				<label for="usern"><input id = "username1" class="username" type="text" placeholder="Username"></label>
			</div>
			<div>
				<label for="pass"><input id = "password1" class="password" type="pass" placeholder="Password"></label>
				<a class="confirm" onclick = "signin()">Login</a>
			</div>
		</form>
	</div>
	<div id="signup">
		<form class="form">
			<p class="signin">Sign Up</p>
			<label for="usern"><input id = "username2" class="username" type="text" placeholder="Username"></label> 
			<label for="pass"><input id = "password2"class="password" type="pass" placeholder="Password"></label> 
			<a class="confirm" onclick = "signup()">Register</a>
		</form>
	</div>
</div>
<button type="submit" id="logout" onclick="logout()">Logout</button>
<script>
	var logoutButton = document.getElementById("logout");
	var entireform = document.querySelector(".entireform");
window.onload = function hidebutton() {
        if (sessionStorage["loggedIn"] == "True") {
            entireform.style.display = "none";
            logoutButton.style.display = "block";
        }
        else {

            logoutButton.style.display = "none";
            entireform.style.display = "inline-grid";
 
        }
    }


function signin(){
	var usnameentered = document.getElementById("username1").value;
var passentered = document.getElementById("password1").value;


if (localStorage[usnameentered]===undefined){
	alert ("Please create an account before logging in.");
	
}
else{
	var store = JSON.parse(localStorage[usnameentered]);
	var password = document.getElementById("password2").value;
if (passentered === store.password2){
	alert ("Logged in as "+usnameentered+".");
	sessionStorage.loggedInUsername = store.username2;
	sessionStorage.setItem("username2",store.username2);
	sessionStorage["loggedIn"] = "True";
	entireform.style.display="none";
	logoutButton.style.display = "block";
}
else{
	alert ("Incorrect Password.");
}
}

	}	
function signup(){
var accounts = {};
accounts.username2 = document.getElementById("username2").value;
accounts.password2 = document.getElementById("password2").value;
 
	localStorage[accounts.username2] = JSON.stringify(accounts);
	alert ("Registered successfully!");


	}

function logout() {
            alert("Logged out from account.");
            sessionStorage["loggedIn"] = "False";
			logoutButton.style.display = "none";
			entireform.style.display="inline-grid";

        }

</script>
