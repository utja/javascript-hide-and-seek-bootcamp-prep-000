function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  //return document.getElementById('nested').querySelector('.target')
  //https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
  //shorter notation below
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('.ranked-list')
  
  for (let i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = parseInt(rankedLists[i].HTML)+n
  }
}

function deepestChild() {
  var node = document.getElementById('grand-node').querySelectorAll('div');
  var nextNode;
  
  for (let i = 0; i < node.length-1; i++) {
    nextNode = node[i].querySelector('div');
  }
  return nextNode;
}
