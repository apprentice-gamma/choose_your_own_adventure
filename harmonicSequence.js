/*
Write a program to compute the sum of a harmonic series, as shown below, where n=50000. 
Calculate the sum from left-to-right, and then from right-to-left.

Harmonic(n) = 1 + 1/2 + 1/3 + 1/4 + .... + 1/n
*/

function calculateHarmonic(n){
	
	var sumLeftToRight = 1;
	for( var i = 1 ; i<=n ; i++ ){
		sumLeftToRight+=(1/n);
		
	}
	
	console.log("The harmonic sequence from left to right, where n="+n+" is: "+sumLeftToRight);
	
	var sumRightToLeft = 1;
	for( var i = n ; i>=1 ; i--){
		sumRightToLeft+=(1/n);
	}

	console.log("The harmonic sequence from right to left, where n="+n+" is: "+sumLeftToRight);


};

calculateHarmonic(50000);