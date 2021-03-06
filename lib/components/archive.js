var mysql = require('mysql'),
    fs = require('graceful-fs'),
    path = require("path"),
    crypto = require('crypto'),
    escape = require('escape-html'),
    config = require('../config').config;

var connection = require('../mysql').connection;

module.exports = {
    list: function(callback) {
        var prob_path = config.JUDGE.path + 'source/archive/archive.html';
        fs.readFile(prob_path, 'utf8', function(err, buf_data) {
            if (err)
                return callback('err');
            return callback(buf_data.toString());
        });
    }
};
