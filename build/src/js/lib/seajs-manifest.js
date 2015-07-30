(function(seajs) {
    'use strict';

    seajs.manifest = ("$$rev-manifest$$");
    
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
