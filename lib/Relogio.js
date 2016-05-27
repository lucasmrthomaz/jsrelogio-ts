"use strict";
var Relogio = (function () {
    function Relogio() {
        /**
         * DataAtual (object) instance of Date()
        */
        this.DataAtual = new Date;
    }
    Object.defineProperty(Relogio.prototype, "Hora", {
        /**
         * Obtem hora atual do sistema
         */
        get: function () {
            return this.DataAtual.getHours;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Relogio.prototype, "Minutos", {
        /**
         * Obtem minutos atual do sistema
         */
        get: function () {
            return this.DataAtual.getMinutes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Relogio.prototype, "Segundos", {
        /**
         * Obtem segundos atual do sistema
         */
        get: function () {
            return this.DataAtual.getSeconds;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Relogio.prototype, "MiliSeg", {
        /**
         * Obtem MiliSeg atual do sistema
         */
        get: function () {
            return this.DataAtual.getMilliseconds;
        },
        enumerable: true,
        configurable: true
    });
    return Relogio;
}());
Object.seal(Relogio);
module.exports = Relogio;
