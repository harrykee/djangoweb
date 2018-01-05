
function highlightStar(num){
	if (num > 0 && num <= 0.5) {
		$('#start1').attr("src", "/static/blog/imgs/half.png");
	}
	if (num > 0.5 && num <= 1) {
		$('#start1').attr("src", "/static/blog/imgs/selected.png");
	}
	if (num > 1 && num <= 1.5) {
		$('#start1').attr("src", "/static/blog/imgs/selected.png");
		$('#start2').attr("src", "/static/blog/imgs/half.png");
	}
	if (num > 1.5 && num <= 2) {
		$('#start1').attr("src", "/static/blog/imgs/selected.png");
		$('#start2').attr("src", "/static/blog/imgs/selected.png");
	}
	if (num > 2 && num <= 2.5) {
		$('#start1').attr("src", "/static/blog/imgs/selected.png");
		$('#start2').attr("src", "/static/blog/imgs/selected.png");
		$('#start3').attr("src", "/static/blog/imgs/half.png");
	}
	if (num > 2.5 && num <= 3) {
		$('#start1').attr("src", "/static/blog/imgs/selected.png");
		$('#start2').attr("src", "/static/blog/imgs/selected.png");
		$('#start3').attr("src", "/static/blog/imgs/selected.png");
	}
	if (num > 3 && num <= 3.5) {
		$('#start1').attr("src", "/static/blog/imgs/selected.png");
		$('#start2').attr("src", "/static/blog/imgs/selected.png");
		$('#start3').attr("src", "/static/blog/imgs/selected.png");
		$('#start4').attr("src", "/static/blog/imgs/half.png");
	}
	if (num > 3.5 && num <= 4) {
		$('#start1').attr("src", "/static/blog/imgs/selected.png");
		$('#start2').attr("src", "/static/blog/imgs/selected.png");
		$('#start3').attr("src", "/static/blog/imgs/selected.png");
		$('#start4').attr("src", "/static/blog/imgs/selected.png");
	}
	if (num > 4 && num <= 4.5) {
		$('#start1').attr("src", "/static/blog/imgs/selected.png");
		$('#start2').attr("src", "/static/blog/imgs/selected.png");
		$('#start3').attr("src", "/static/blog/imgs/selected.png");
		$('#start4').attr("src", "/static/blog/imgs/selected.png");
		$('#start5').attr("src", "/static/blog/imgs/half.png");
	}
	if (num > 4.5 && num <= 5) {
		$('#start1').attr("src", "/static/blog/imgs/selected.png");
		$('#start2').attr("src", "/static/blog/imgs/selected.png");
		$('#start3').attr("src", "/static/blog/imgs/selected.png");
		$('#start4').attr("src", "/static/blog/imgs/selected.png");
		$('#start5').attr("src", "/static/blog/imgs/selected.png");
	}
}