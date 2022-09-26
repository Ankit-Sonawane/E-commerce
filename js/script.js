
/*sign in  Function*/
const element=document.getElementById("btnsignin");
element.addEventListener("click", signInValidate);

function signInValidate(){
	var i1 = document.getElementById("email").value;
    var i2 = document.getElementById("password").value;
	
	
	if(i1 == ""){
		document.getElementById("place1").innerHTML="Email Id cannot be blank";
        document.getElementById("place1").style.color="red";
		
		}
        else if(i2 == "")
        {
            document.getElementById("place2").innerHTML="Password cannot be blank";
            document.getElementById("place2").style.color="red";
        }
        else if(i1 == "" && i2 == "")
        {
            document.getElementById("place1").innerHTML="Email Id cannot be blank";
            document.getElementById("place1").style.color="red";
            document.getElementById("place2").innerHTML="Password cannot be blank";
            document.getElementById("place2").style.color="red";
        }
		
		else if (i1 != "" && i2 != ""){
            if ( i1 == "ankit" && i2 == "ankit16"){
                alert ("Login successfully");
                document.getElementById("place3").innerHTML="Ankit";
                document.getElementById("place3").style.color="green";
                document.getElementById("place4").innerHTML="";
                document.getElementById("myModalLabel").innerHTML="Welcome Back";
                document.getElementById("signout").className ="navbar-nav text-center d-block";
                document.getElementById("signin").className ="navbar-nav text-center d-none";
            }
            else
            {
                document.getElementById("place1").innerHTML="";
                document.getElementById("place2").innerHTML="Invalid login or pass";
                document.getElementById("place2").style.color="red";
            }
		
		
	}
}


/*Signout Function*/
const element1=document.getElementById("signout");
element1.addEventListener("click", signout);

function signout(){
    document.getElementById("signout").className ="navbar-nav text-center d-none";
    document.getElementById("signin").className ="navbar-nav text-center d-block";
    location.reload();
}


