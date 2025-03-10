/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {

    // save cache results 
    const cache = new Map();
    
    return function(...args) {

        // Create a unique key value for the arguments
        const key = JSON.stringify([...args]);

        // Check if key is in cache already
        if (cache.has(key)) {
            return cache.get(key);
        }

        // Otherwise, get the result of the function, cache the result, then return it
        const result = fn(...args);
        cache.set(key, result);

        return result;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */