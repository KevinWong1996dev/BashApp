let FeedbackPlugin = require("nativescript-feedback");
let feedback = new FeedbackPlugin.Feedback();
const Color = require("tns-core-modules/color").Color;

function success(payload) {
    feedback.success({
        title: payload.title,
        message: payload.message,
        backgroundColor: new Color("#014996")
    });
}

function error(payload) {
    feedback.error({
        title: payload.title,
        message: payload.message
    });
}

function warning(payload) {
    feedback.warning({
        title: payload.title,
        message: payload.message
    });
}

exports.success = success;
exports.warning = warning;
exports.error = error;