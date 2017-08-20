function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
	var liText = 0;
  var lis = document.querySelectorAll('.ranked-list li');
	for (var i = 0; i < lis.length; i++) {
  		lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
	}
}

function deepestChild() {
	var divs = document.getElementById('app').querySelectorAll('#grand-node div')
	for (var i = 0; i < divs.length; i++) {
		 var parent = divs[i];
  }
	return parent
}
