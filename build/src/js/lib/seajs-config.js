(function(seajs) {
    'use strict';
    var ROOT_PATH = window.ROOT_PATH || './js/',
        LIB_PATH = ROOT_PATH + 'lib';
    seajs.config({
        base: ROOT_PATH,
        debug: true,
        alias: {
            'seajs-css': LIB_PATH + '/seajs-css-debug.js',
            'seajs-queue': LIB_PATH + '/seajs-queue.js',
            'jquery': LIB_PATH + '/jquery/jquery-2.1.1.js',
            "qunit": LIB_PATH + "/qunit/qunit-1.18.0.js",
            'handlebars': LIB_PATH + '/handlebars/handlebars-v3.0.3.js',
            'class': LIB_PATH + '/MyJS/class/src/class.js',
            'class.event': LIB_PATH + '/MyJS/class/src/class.event.js',
            'class.log': LIB_PATH + '/MyJS/class/src/class.log.js',
            'color': LIB_PATH + '/MyJS/color.js',
            'util': LIB_PATH + '/MyJS/util.js',
            'prototype': LIB_PATH + '/MyJS/prototype.ext.js',
            'jquery.ext': LIB_PATH + '/MyJS/jquery.ext.js'
        },
        paths: {
            '%root%': ROOT_PATH,
            '%lib%': LIB_PATH,
            '%myjs%': LIB_PATH + '/MyJS',
            '%.%': '.'
        }
    });


    seajs.on('save', function(data) {
        //console.info('on save:',data);
    });

    seajs.on('request', function(data) {
        //console.info('on request:',data);
    });

    seajs.on('fetch', function(data) {
        //console.info('on fetch:',data);
    });

    seajs.on('exec', function(data) {
        //console.info('on exec:',data);
    });


})(seajs);
