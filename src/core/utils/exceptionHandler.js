module.exports = function () {
    return function (exception, cause) {
        console.error(exception.stack);
    };
};
