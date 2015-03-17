//Write a program to compute the sum of a harmonic series, as shown below, where n=50000. Calculate the sum from left-to-right, and then from right-to-left.

//Harmonic(n) = 1 + 1/2 + 1/3 + 1/4 + .... + 1/n
harmonicMeans(50000);


function harmonicMeans(n){
	var sumForward = 1;
	for(var i = 1; i <= n; i++){
		sumForward +=(1/n);
	}
	console.log("The sum of the harmonic means left to right is " + sumForward);

	var sumBackward = 1;
	for(var i = n; i >= 1; i--){
		sumBackward +=(1/n);
	}
	console.log("The sum of the harmonic means right to left is " + sumBackward);

}



