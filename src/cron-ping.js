import cron from 'node-cron';

let count = 0;

cron.schedule('* 10 * * * * ', function() {
    count++;
    console.log(`count: ${count}, date: ${new Date()}`);
});