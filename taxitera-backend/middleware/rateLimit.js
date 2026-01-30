// Rate limiting store
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 100;

// Rate limiting function
const rateLimit = (ip) => {
    const now = Date.now();
    const userRequests = rateLimitStore.get(ip) || [];
    
    // Remove old requests
    const validRequests = userRequests.filter(time => now - time < RATE_LIMIT_WINDOW);
    
    if (validRequests.length >= MAX_REQUESTS) {
        return false;
    }
    
    validRequests.push(now);
    rateLimitStore.set(ip, validRequests);
    return true;
};

module.exports = { rateLimit };