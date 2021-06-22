const axios = require('axios');
const qs = require("qs");
const Constants = require("../constants");

class DataLoader {
    static URL = "https://measurements.mobile-alerts.eu/Home/MeasurementDetails"

    static getDefaultDates(daysAgo) {
        let curentDate = new Date();
        let yesterdayStart = new Date(curentDate.getFullYear(), curentDate.getMonth(), curentDate.getDate() - daysAgo, 0, 0);
        let yesterdayEnd = new Date(curentDate.getFullYear(), curentDate.getMonth(), curentDate.getDate() - daysAgo, 23, 59);
    
        return {
            fromEpoch: yesterdayStart.getTime() / 1000,
            toEpoch: yesterdayEnd.getTime() / 1000,
            from: new Date(yesterdayStart).toLocaleString(),
            to: new Date(yesterdayEnd).toLocaleString()
        };
    }

    static getParameters(deviceId, daysAgo, customDate) {
        let queryDate = customDate || this.getDefaultDates(daysAgo)

        return qs.stringify({
            deviceid: deviceId,
            vendorid: "f03df34a-d54d-41aa-871c-66aa9fda4fc3",
            appbundle: "eu.mobile_alerts.weatherhub",
            fromepoch: queryDate.fromEpoch,
            toepoch: queryDate.toEpoch,
            from: queryDate.from,
            to: queryDate.to,
            area: "day",
            command: "refresh"
        });
    }

    static async getMeasurments(deviceId, useMock, daysAgo, customDate) {

        try {
            let response = useMock ? {
                data: Constants.MOCK_DATA_MAP[deviceId]
            } : await axios.post(this.URL, this.getParameters(deviceId, daysAgo, customDate));
            
            return response.data;
        } catch (err) {
            throw new Error(`Error during download data for ${deviceId}`);
        }
    }
}

module.exports = DataLoader;