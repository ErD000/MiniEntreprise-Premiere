var numer = Math.floor(Math.random()*5)+1;

		var timer1 = 0;
		var timer2 = 0;

		function ustawslajd(numerslajdu) {
			clearTimeout(timer1);
			clearTimeout(timer2);
			numer = numerslajdu-1;

			schowaj();
			setTimeout("zmienslid()",500);
		}

		function schowaj() {
			$("#slider").fadeOut(500);
		}


		function zmienslid() {
			
			numer++; 
			if (numer>16) {numer=1}

			var plik = "<img src=\"img/slidesWelcome/0" + numer + ".png\"/>";
			document.getElementById('slider').innerHTML = plik;
			$("#slider").fadeIn(500);

			timer1 = setTimeout("zmienslid()", 5000);
			timer2 = setTimeout("schowaj()",4500);
		}
