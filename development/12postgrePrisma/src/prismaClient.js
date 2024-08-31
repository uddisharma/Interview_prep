"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var PrismaSingleton = /** @class */ (function () {
    function PrismaSingleton() {
        this.prisma = new client_1.PrismaClient();
    }
    PrismaSingleton.getInstance = function () {
        if (!PrismaSingleton.instance) {
            PrismaSingleton.instance = new PrismaSingleton();
        }
        return PrismaSingleton.instance;
    };
    PrismaSingleton.prototype.getPrisma = function () {
        return this.prisma;
    };
    return PrismaSingleton;
}());
var prismaSingleton = PrismaSingleton.getInstance();
var prisma = prismaSingleton.getPrisma();
exports.default = prisma;
