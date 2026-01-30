// Helper for sending JSON responses
const sendResponse = (res, statusCode, data) => {
    res.writeHead(statusCode, { 
        'Content-Type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block'
    });
    res.end(JSON.stringify(data));
};

// Helper to parse JSON body with size limit
const getBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = '';
        let size = 0;
        const maxSize = 1024 * 1024; // 1MB limit
        
        req.on('data', chunk => {
            size += chunk.length;
            if (size > maxSize) {
                reject(new Error('Request too large'));
                return;
            }
            body += chunk.toString();
        });
        
        req.on('end', () => {
            try {
                if (body) {
                    resolve(JSON.parse(body));
                } else {
                    resolve({});
                }
            } catch (error) {
                reject(error);
            }
        });
        
        req.on('error', (err) => {
            reject(err);
        });
    });
};

module.exports = { sendResponse, getBody };