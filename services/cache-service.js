const config = require('../config');

const cache = {
    lastRefreshTime: 0
};

// This function checks to see if the data being retrieved has been cached locally within the last x amount of time. If
// it has, the function returns the value in the cache. If not, it makes a call to the database.
// NOTE: Caching is unnecessary with a small user-base, but with a large volume of users and requests caching is
// important to maintain performance and efficiency at minimal cost.
function getDataFromCacheOrDatabase(key, fetchDataCallback) {
    // Check if data exists in cache
    if (cache[key] && !cacheExpired()) {
        console.log('Data found in cache');
        return Promise.resolve(cache[key]);
    }

    // Fetch data from database or external source
    return fetchDataCallback().then((data) => {
        // Cache the fetched data
        cache[key] = data;
        cache.lastRefreshTime = Date.now();
        console.log('Data fetched and cached');
        return data;
    }).catch((err) => {
        console.error('Error fetching data:', err);
        throw err;
    });
}

// If the current time is later than the lastRefreshTime plus the expiration time (from the config), then
//  true
function cacheExpired() {
    return Date.now() > cache.lastRefreshTime + config.cacheExpirationMs;
}
