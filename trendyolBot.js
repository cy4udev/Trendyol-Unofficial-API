const { Trendyol } = require('trendyol-unofficial-api');
const fs = require('fs');
const { Worker, isMainThread, parentPort } = require('worker_threads');

// Function to like a product
async function likeProduct(credentials, productLink) {
    const trendyol = new Trendyol();
    try {
        await trendyol.login(credentials.email, credentials.password);
        await trendyol.likeProduct(productLink);
    } catch (err) {
        console.error(`Error liking product for ${credentials.email}:`, err);
        throw err;
    }
}

// Main function to like a product from multiple accounts
async function main(productLink, accounts) {
    const workers = [];
    for (const credentials of accounts) {
        try {
            const worker = new Worker(__filename, {
                workerData: { credentials, productLink }
            });
            workers.push(worker);
        } catch (err) {
            console.error(`Error creating worker for ${credentials.email}:`, err);
        }
    }

    for (const worker of workers) {
        await new Promise((resolve) => worker.on('exit', resolve));
    }
}

if (isMainThread) {
    const productLink = process.argv[2] || 'https://www.trendyol.com/product-link';
    let accounts;
    try {
        accounts = JSON.parse(fs.readFileSync('accounts.json', 'utf8'));
        if (!Array.isArray(accounts) || accounts.some(acc => !acc.email || !acc.password)) {
            throw new Error('Invalid accounts format');
        }
    } catch (err) {
        console.error('Error reading or parsing accounts.json:', err);
        process.exit(1);
    }
    main(productLink, accounts).then(() => {
        console.log('All tasks completed.');
    }).catch((err) => {
        console.error('Error:', err);
    });
} else {
    const { workerData } = require('worker_threads');
    likeProduct(workerData.credentials, workerData.productLink).then(() => {
        parentPort.postMessage('done');
    }).catch((err) => {
        console.error('Error in worker:', err);
    });
}
