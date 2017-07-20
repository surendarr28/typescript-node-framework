const appConfig = require("../config/appConfig")[process.env.NODE_ENV];


export let UrlHandler = (url) => {
    let splitUrl = url.split(".");
    let sUrl = "";
    splitUrl.forEach((element) => {
        sUrl += "/" + element;
    })
    return "/" + process.env.BASE + sUrl;
}