function myclick(event){
			var eEnter = document.getElementById("email");
			var e = eEnter.value;
			if( e == ""){
				document.getElementById("eroE").innerHTML = "Please enter your email";
				event.preventDefault();
			}	
			var cEnter = document.getElementById("comment");
			var c = cEnter.value;
			if( c == ""){
				document.getElementById("eroC").innerHTML="Please enter your comment";
				event.preventDefault();	
			}
			if(c.length>128){
				document.getElementById("eroC").innerHTML="Your comment cannot more than 128 words";
				event.preventDefault();
			 }	 
		}