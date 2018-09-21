const cuenta18 = (cta18) => {
	if (cta18) {
		cta18.replaceAll(`-`, ``).trim();
		let valor;
		let cad1, cad2;

		cad1 = `${parseInt(cta18.substr(4, 1)) * 1}`;
		cad1 = `${cad1}${parseInt(cta18.substr(5, 1)) * 2}`;
		cad1 = `${cad1}${parseInt(cta18.substr(6, 1)) * 1}`;
		cad1 = `${cad1}${parseInt(cta18.substr(7, 1)) * 2}`;

		valor = 3; // el 0011 es constante
		for (let i = 0; i < cad1.length; i++) {
			valor = valor + parseInt(cad1.substr(i, 1));
		}

		let dig1 = (parseInt(valor / 10) + 1) * 10 - valor;
		dig1 = Right(dig1, 1);

		//  Multiplica por el 2-1
		cad2 = ``;
		for (let i = 9; i <= 17; i += 2) {
			cad2 = `${cad2}${parseInt(cta18.substr(i - 1, 1)) * 1}`;
			cad2 = `${cad2}${parseInt(cta18.substr(i - 1 + 1, 1)) * 2}`;
		}

		// Suma valores obtenidos
		valor = 0;
		for (let i = 0; i < cad2.length; i++) {
			valor = valor + parseInt(cad2.substr(i, 1));
		}

		// Resta de la decena siguiente
		let dig2 = (parseInt(valor / 10) + 1) * 10 - valor;
		dig2 = Right(dig2, 1);

		let dc = `${dig1}${dig2}`;
		cta18 = `${cta18.substr(0, 8)}${dc}${cta18.substr(8, 18)}`;
	} else {
		cta18 = ``;
	}

	/***
	 * http://www.4guysfromrolla.com/webtech/code/Right.shtml
	 IN: str - the string we are RIGHTing
	 n - the number of characters we want to return
	 
	 RETVAL: n characters from the right side of the string
	 ***/
	function Right(str, n) {
		if (n <= 0) // Invalid bound, return blank string
		{
			return ``;
		} else if (n > String(str).length) // Invalid bound, return
		{
			return str;
		} // entire string
		else { // Valid bound, return appropriate substring
			var iLen = String(str).length;
			return String(str).substring(iLen, iLen - n);
		}
	}

	return cta18;
}