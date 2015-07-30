(function(seajs) {
    'use strict';

    seajs.manifest = {
  "/css/main.css": "14356455",
  "/js/draw.js": "14333910",
  "/js/startup.js": "14338412",
  "/js/test.js": "14334849",
  "/js/lib/sea-debug.js": "14198337",
  "/js/lib/seajs-config.js": "14338414",
  "/js/lib/seajs-css-debug.js": "14082505",
  "/js/lib/seajs-manifest.js": "14338413",
  "/js/lib/seajs-queue.js": "14328862",
  "/js/test/touch.js": "14333838",
  "/js/lib/MyJS/HttpRequest.js": "14328679",
  "/js/lib/MyJS/color.js": "14333908",
  "/js/lib/MyJS/jquery.ext.js": "14328082",
  "/js/lib/MyJS/prototype.ext.js": "14328075",
  "/js/lib/MyJS/util.js": "14328910",
  "/js/lib/jquery/jquery-2.1.1.js": "14295874",
  "/js/lib/MyJS/class/src/class.event.js": "14327949",
  "/js/lib/MyJS/class/src/class.js": "14327949",
  "/js/lib/MyJS/class/src/class.log.js": "14327949",
  "/js/lib/MyJS/class/example/js/example.js": "14327935",
  "__isQuery__": "1"
};
    
    seajs.on('request', function(data) {
        var manifest = seajs.manifest;
        if (!manifest || typeof manifest == "string") {
            delete seajs.manifest;
            return;
        }
        var uri = data.requestUri;
        for (var key in manifest) {
            var value = manifest[key];
            if (uri.indexOf(key) > -1) {
                if (manifest.__isQuery__) {
                    uri = getURIByQuery(uri, value);
                } else {
                    uri = getURIByFileName(uri, value);
                }
                delete manifest[key];
            }
        }
        data.requestUri = uri;
    });

    function getURIByFileName(uri, versionCode) {
        return uri.replace(/([.](js|css))([?]|$)/ig, '.' + versionCode + '$1');
    };

    function getURIByQuery(uri, versionCode) {
        var uriArray = uri.split('?'),
            locaHashArray,
            argArray;
        locaHashArray = (uriArray[1] || '').split('#');
        argArray = (locaHashArray[1] || locaHashArray[0]).split('&');

        versionCode = 't' + versionCode + '=1';

        if (argArray[0] == '') {
            argArray[0] = versionCode;
        } else {
            argArray.push(versionCode);
        }
        return uriArray[0] + '?' + argArray.join('&');
    };

})(seajs);
