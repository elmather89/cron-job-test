import cron from 'node-cron';

let count = 0;

cron.schedule('* * * * * * ', function() {
    count++;
    console.log(`count: ${count}, date: ${new Date()}`);
});