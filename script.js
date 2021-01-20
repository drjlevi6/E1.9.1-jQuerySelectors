$('input').addClass('red'); // then style.css gives all the <input>s a red background

// Below, only make the .main-button green
$('.main-button').addClass('green');

// Below, make the text of all buttons yellow
$('button').addClass('text--orange');

// I'm going to add code to make the background color of the <inputs> toggle between read & white.
	let inputs = $('input');
	for (let i=1; i<=6; i++) {
	console.log(inputs);
	inputs.removeClass('red').delay(i*200/* /* /*  */ */ */).addClass('purple');
	console.log(inputs);
	}

