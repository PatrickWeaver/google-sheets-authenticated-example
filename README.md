# Google Sheets Authenticated Example

From this quickstart guide [https://developers.google.com/sheets/api/quickstart/nodejs](https://developers.google.com/sheets/api/quickstart/nodejs)

### Credentials

To generate credentials run `node quickstart.js`. This will create a file at `/app/.credentials/sheets.googleapis.com-nodejs-quickstart.json` with credentials.

When remixing on Glitch the .credentials folder is copied over. It is a good idea to move the credentials to the .data folder which is not copied:

`mv /app/.credentials/sheets.googleapis.com-nodejs-quickstart.json /app/.data/sheets.googleapis.com-nodejs-quickstart.json`

Then create a symlink in the .credentials folder

`ln -s /app/.data/sheets.googleapis.com-nodejs-quickstart.json /app/.credentials/sheets.googleapis.com-nodejs-quickstart.json`

In the original project the symlink has already been created so you will want to delete it before creating credentials again:

`rm -r /app/.credentials`