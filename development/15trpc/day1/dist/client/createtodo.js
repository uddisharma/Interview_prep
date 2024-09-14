"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
_1.trpc === null || _1.trpc === void 0 ? void 0 : _1.trpc.userCreate.mutate({ name: 'test' }).then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
});
