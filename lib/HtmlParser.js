const parse = require('node-html-parser').parse;
const tabletojson = require('tabletojson').Tabletojson;
const DataNormalization = require('./DataNormalization');

class HtmlParser {
    constructor(html) {
        this.html = html
        try {
            this.preprocesedHtml = parse(this.html);
        } catch(err) {
            throw new Error("Invalid HTML");
        }
    }

    getTableData() {
        const tableHTML = this.preprocesedHtml.querySelector("#MeasurementDetails > table").innerHTML;
        if (!tableHTML) {
            throw new Error("Page does not contain table with data");
        }
        return tabletojson.convert('<table>' + tableHTML + '</table>')[0];
    }

    getNormalizedTableData() {
        let tableData = this.getTableData();
        return DataNormalization.normalizeData(tableData);
    }
}

module.exports = HtmlParser;