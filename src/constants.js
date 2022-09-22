const mySources = [
    {
        name: 'breitbart',
        regex: /https:\/\/www\.breitbart\.com\/politics\/\d{4}\/\d{2}\/\d{2}\/.+$/,
        baseUrl: 'https://www.breitbart.com/'
    },
    {
        name: 'federalist',
        regex: /https:\/\/thefederalist\.com\/\d{4}\/\d{2}\/\d{2}\/.+$/,
        baseUrl: 'https://thefederalist.com/category/politics/'
    },
    {
        name: 'natrev',
        regex: /https:\/\/www\.nationalreview\.com\/corner\/.+$/,
        baseUrl: 'https://www.nationalreview.com/politics-policy/',
    }
]
export default mySources;