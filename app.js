var express = require('express');

app.set('port', process.env.PORT || 1337);
app.listen(app.get('port'));

module.exports.app = app;