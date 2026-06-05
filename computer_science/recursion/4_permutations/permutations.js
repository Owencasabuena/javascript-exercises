const permutations = function(set) {
    const results = [];
    
    function backtrack(currentPath, remainingOptions) {
        if (remainingOptions.length < 1) {
            results.push(currentPath);
        }
        
        for (let i = 0; i < remainingOptions.length; i++) {
            let currentItem = remainingOptions[i];

            let nextOptions = remainingOptions.slice(0, i).concat(remainingOptions.slice(i + 1));
            let nextPath = [...currentPath, currentItem];

            backtrack(nextPath, nextOptions);
        
        }
    }
    backtrack([], set);

    return results;
};
  
// Do not edit below this line
module.exports = permutations;
