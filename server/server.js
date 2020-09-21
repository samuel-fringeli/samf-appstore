const express = require('express');
const bodyParser = require('body-parser');
const { getAllApps, getManifest } = require('./db');

const app = express();
const port = process.env.PORT || 8082;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/apps', (req, res) => {
    getAllApps(r => res.send(r));
});

app.get('/api/:appId/manifest.plist', (req, res) => {
    res.setHeader('Content-Type', 'application/x-plist');
    res.setHeader('Content-Disposition', 'attachment; filename=\"manifest.plist\"');
    getManifest(req.params.appId, r => res.send(r));
});

let staticServe = express.static(__dirname + '/../client/build');
// app.use('/video/:videoId', staticServe);
app.use('/', staticServe);

app.listen(port, () => console.log(`Listening on port ${port}`));
