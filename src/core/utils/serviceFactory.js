module.exports = function (fn) {
    return {
        getInstance: function () {
            if (!this.instance) {
                this.instance = new fn();
            }
            return this.instance;
        },
        getService: function () {
            return fn;
        }
    }
};
