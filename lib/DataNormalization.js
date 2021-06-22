class DataNormalization {
    static prepareTemperatureData(item) {
        return [item.Timestamp, item.Temperature.slice(0, -2), item.Humidity.slice(0, -1)];
    }

    static prepareRainData(item) {
        return [item.Timestamp, item.Rain.slice(0, -3)];        
    }

    static prepareWindData(item) {
        let modifiedItem = [item.Timestamp, item.Windspeed.slice(0, -4), item["Wind Direction"], item.Gust.slice(0, -4)]; 
        return modifiedItem;
    }

    static normalizeData(data) {
        return data && data.map((item) => {
            if (item.Temperature) {
                return this.prepareTemperatureData(item);
            } else if (item.Windspeed) {
                return this.prepareWindData(item);
            } else if (item.Rain) {
                return this.prepareRainData(item);
            }
        }).reverse();
    }
}

module.exports = DataNormalization;