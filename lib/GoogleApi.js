const { google } = require("googleapis");

class GoogleApi {
    static sheetId = "13H3_sR8lWu2Y23sgqlLHR5kZXmt5e1xQxAPmdB0DWQY"

    static async authentication() {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                type: process.env.TYPE,
                client_email: process.env.CLIENT_EMAIL,
                private_key: process.env.PRIVATE_KEY,
                client_id: process.env.CLIENT_ID,
                token_url: process.env.TOKEN_URI,                
            },
            scopes: "https://www.googleapis.com/auth/spreadsheets"
        });
        const client = await auth.getClient();
        const sheets = google.sheets({
            version: "v4",
            auth: client
        });
    
        return { sheets };
    }

    static async postData(data, range) {
        if (data) {
            try {
                const { sheets } = await this.authentication();
                const writeReq = await sheets.spreadsheets.values.append({
                    spreadsheetId: this.sheetId,
                    range: range,
                    valueInputOption: "USER_ENTERED",
                    resource: {
                        values: data
                    }
                });
                
                if (writeReq.status !== 200) {
                    throw new Error(`Data was not posted to ${range}`);
                }
            } catch (err) {
                throw new Error(`Data was not posted to ${range} due to: ${err}`);
            }
        }
    }
}

module.exports = GoogleApi;