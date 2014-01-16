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

  var iterateTree = function(n, tree){
    if(n<1){
      results.push(tree);
    } else {
      for(var i = 0; i<n; i++){
      //  debugger;
        var child = new Tree(n, tree.board.rows(), tree.blackList);
        if(!tree.blackList.hasOwnProperty(i)){
          child.board.rows()[n-1][i] = 1;
          child.blackList[i] = i;
        }
        if(n>0){
          iterateTree(n-1, child);
        }
      }
    }
  };
  var initial = new Tree(n);
  iterateTree(n, initial);
  console.log(results);
  return results;
};


window.Tree = function(n, rows, blackList){
  this.children = [];
  this.board = rows ? new Board(rows) : new Board({n:n});
  this.blackList = blackList||{};
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
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
