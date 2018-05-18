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
  
}

/*



function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
}
*/