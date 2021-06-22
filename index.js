const DataLoader = require("./lib/DataLoader");
const HtmlParser = require("./lib/HtmlParser");
const GoogleApi = require("./lib/GoogleApi");
const Constants = require("./constants");

Constants.REPORTING_DATA.forEach((measurement)=> {
    DataLoader.getMeasurments(measurement.deviceId, Constants.USE_MOCK, Constants.DAYS_AGO)
        .then((html) => {
            let htmlParser = new HtmlParser(html);
            return htmlParser.getNormalizedTableData();
        })
        .then((tableData) => {
            return GoogleApi.postData(tableData, measurement.sheet);
        })
        .then(()=> {
            console.log(`${measurement.sheet} has been posted to Google sheet`);
        })
        .catch((err) => {
            console.log(err);
        });
});
