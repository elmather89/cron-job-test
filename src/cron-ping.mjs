// import { regexCheck } from './regexCheck.js';
// import mySources from './constants.js';
// import cron from 'node-cron';
// import dotenv from 'dotenv';

// dotenv.config({
//     path: '../.env',
// });

// const checkHtml = (mySources) => {
//     for (const source of mySources) {
//         // console.log(source);
//         regexCheck(source);
//     }
// };

const checkData = (data) => {
    if (data && typeof data !== 'string') {
        console.log('***********');
        throw 'Error, Data is not a string. Got: ' + typeof data;
    };

    if (!data || data == undefined || data == null) {
        console.log('***********');
        throw 'Error, No data. Got: ' + data;
    };
};

try {
    checkData(123);
    // checkHtml(mySources);
} catch (err) {
    console.error(err);
};


// cron.schedule('* * * * * *', () => {
//     console.log('running a task every minute');
//     // checkHtml(mySources);
//     try {
//         checkHtml(mySources);
//     } catch (err) {
//         console.error(err);
//     };
// });
