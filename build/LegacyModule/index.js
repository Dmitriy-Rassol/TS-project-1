"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalizeTitles = void 0;
function capitalizeTitles(posts) {
    return posts.map(post => {
        return Object.assign(Object.assign({}, post), { title: post.title.toUpperCase() });
    });
}
exports.capitalizeTitles = capitalizeTitles;
