/*           _                    
   ___  ___ | |_   _____ _ __ ___ 
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n){
  var results = [];
  var iterateTree = function(count, tree){
    debugger;
    // console.table(tree.board.rows());
    var child;

    if(count<1){
      results.push(tree);
    } else {
      for(var i = 0; i < n; i++){
       debugger;
        child = new Tree(n, tree.board.rows(), tree.blackList);
        if(!tree.blackList.hasOwnProperty(i)){
          child.board.rows()[count-1] = child.board.rows()[count-1].slice();
          child.board.rows()[count-1][i] = 1;
          child.blackList[i] = i;
          tree.children.push(child);
        }
      }
      if(count>0){
        if (tree.children.length === 0 ){
          results.push(tree);
        }
        for (var c = 0; c < tree.children.length; c++){
          iterateTree(count-1, tree.children[c]);
        }
      }
    }
  };
  var initial = new Tree(n);
  iterateTree(n, initial);
  console.log(results);
  return results[0].board.rows();
};

var inflate = function(array){
  var result = [];
  var arrLen = array.length;
  for(var i = 0; i<arrLen; i++){
    result.push([]);
  }
  for(var x = 0; x<arrLen; x++){
    for(var m = 0; m<arrLen; m++){
      //broken
      result[x].push(0);
    }
  }
  return result;
};

var findAllRooksEasyWay = function(n){
  var outcomes = [];
  var makePlays = function(playedSoFar, rounds){
    if(rounds === 0){

      outcomes.push(inflate(playedSoFar));
      return;
    }
    for(var i = 1; i<=n; i++){
      var canPlay = true;
      if(playedSoFar.length>0){
        for(var x = 0; x<playedSoFar.length; x++){
          if(i === playedSoFar[x]){
            canPlay = false;
          }
        }
      }
      if(canPlay){
        makePlays(playedSoFar.concat(i), rounds-1);
      }
    }
  };
  makePlays([], n);
  return outcomes;
};


window.Tree = function(n, rows, blackList){
  this.children = [];
  this.board = rows ? new Board(rows) : new Board({n:n});
  this.blackList = blackList||{};
};

// return the number of nxn chessboards that exist, with n rooksEasyWay placed such that none of them can attack each other
window.countNRooksSolutions = function(n){
  return findNRooksSolution(n).length;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n){
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n){
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
