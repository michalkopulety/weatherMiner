const mockData = require("./mockData/mockData");

const DAYS_AGO = 1;
let MOCK_DATA_MAP = {
    "035BA3FD350D": mockData.MOCK_TEAMPERATURE,
    "08458AC36971": mockData.MOCK_RAIN,
    "0B2DB139D3D4": mockData.MOCK_WIND
};

const USE_MOCK = false;
const REPORTING_DATA = [
    {deviceId: "035BA3FD350D", sheet: "Temperature"},
    {deviceId: "08458AC36971", sheet: "Rain"},
    {deviceId: "0B2DB139D3D4", sheet: "Wind"}
];

// const USE_MOCK = true;
// const REPORTING_DATA = [
//     {deviceId: "035BA3FD350D", sheet: "Testing_Temperature"},
//     {deviceId: "08458AC36971", sheet: "Testing_Rain"},
//     {deviceId: "0B2DB139D3D4", sheet: "Testing_Wind"}
// ];




module.exports = {
    DAYS_AGO: DAYS_AGO,
    USE_MOCK: USE_MOCK,
    REPORTING_DATA: REPORTING_DATA,
    MOCK_DATA_MAP: MOCK_DATA_MAP
}