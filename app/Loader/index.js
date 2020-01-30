const LoadingIndicator = require("@nstudio/nativescript-loading-indicator")
    .LoadingIndicator;
const Mode = require("@nstudio/nativescript-loading-indicator").Mode;

const loader = new LoadingIndicator();

function show(payload) {
    loader.show({
        message: payload.message,
        details: payload.details,
        // progress: 0.65,
        margin: 10,
        dimBackground: true,
        color: "white",
        backgroundColor: "#ffd04d",
        userInteractionEnabled: false,
        hideBezel: false
    });
}

function hide(payload) {
    loader.hide();
}

exports.show = show;
exports.hide = hide;