"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.css");
const lodash_1 = require("lodash");
const Posts_1 = require("./Posts");
const index_js_1 = require("./LegacyModule/index.js");
(function filterPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = 1;
        const posts = yield (0, Posts_1.getPosts)();
        console.log('Колличество полученых данных:', posts === null || posts === void 0 ? void 0 : posts.data.length);
        const filteredPosts = (0, lodash_1.filter)(posts === null || posts === void 0 ? void 0 : posts.data, (p) => {
            return p.userId === userId;
        });
        console.log('Посты по userId', filteredPosts);
        console.log('Колличество постов по userId', filteredPosts.length);
        const test = (0, index_js_1.capitalizeTitles)(filteredPosts);
        console.log('test', test);
    });
})();
