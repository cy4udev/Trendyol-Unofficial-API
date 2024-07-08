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
exports.Trendyol = void 0;
const axios_1 = require("axios");
class Trendyol {
    constructor(language = 'en') {
        this.language = language;
        this.username = null;
        this.password = null;
        this.accessToken = null;
        this.refreshToken = null;
        this.merthid = null;
    }
    login() {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.post('https://auth.trendyol.com/login', {
                    email: this.username,
                    password: this.password
                }, {
                    headers: {
                        'Accept': '*/*',
                        'Accept-Encoding': 'gzip, deflate, br',
                        'Accept-Language': 'en-US,en;q=0.9',
                        'application-id': '1',
                        'Connection': 'keep-alive',
                        'Content-Type': 'application/json;charset=UTF-8',
                        'culture': 'tr-TR',
                        'Host': 'auth.trendyol.com',
                        'Origin': 'https://auth.trendyol.com',
                        'Referer': 'https://auth.trendyol.com/static/fragment?application-id=1&storefront-id=1&culture=tr-TR&language=tr&debug=false',
                        'Sec-Fetch-Dest': 'empty',
                        'Sec-Fetch-Mode': 'cors',
                        'Sec-Fetch-Site': 'same-origin',
                        'storefront-id': '1',
                        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15',
                    }
                });
                const data = response.data;
                this.accessToken = response.data.accessToken;
                this.refreshToken = response.data.refreshToken;
                return data;
            }
            catch (error) {
                if ((_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) {
                    throw (_d = (_c = error === null || error === void 0 ? void 0 : error.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.message;
                }
                else {
                    throw error.message;
                }
            }
        });
    }
    extractId(link) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = null;
            const regex1 = /-(\d+)\?/;
            const regex2 = /-p-(\d+)/;
            const match1 = link.match(regex1);
            const match2 = link.match(regex2);
            if (match1 && match1[1]) {
                id = match1[1];
            }
            else if (match2 && match2[1]) {
                id = match2[1];
            }
            return id;
        });
    }
    followStore(storeID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.post(`https://public-sdc.trendyol.com/discovery-sellerstore-webgw-service/v1/follow/?sellerId=${storeID}&channelId=1`, null, {
                    headers: {
                        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:124.0) Gecko/20100101 Firefox/124.0',
                        'accept': 'application/json, text/plain, */*',
                        'accept-language': 'tr-TR,tr;q=0.8,en-US;q=0.5,en;q=0.3',
                        'accept-encoding': 'gzip, deflate, br',
                        'content-type': 'application/json;charset=utf-8',
                        'authorization': 'Bearer ' + this.accessToken,
                        'origin': 'https://www.trendyol.com',
                        'sec-fetch-dest': 'empty',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-site': 'same-site',
                        'te': 'trailers'
                    }
                });
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw error.message;
            }
        });
    }
    unfollowStore(storeID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.delete(`https://public-sdc.trendyol.com/discovery-sellerstore-webgw-service/v1/follow/?sellerId=${storeID}&culture=tr-TR&channelId=1`, {
                    headers: {
                        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:124.0) Gecko/20100101 Firefox/124.0',
                        'accept': 'application/json',
                        'accept-language': 'tr-TR,tr;q=0.8,en-US;q=0.5,en;q=0.3',
                        'accept-encoding': 'gzip, deflate, br',
                        'content-type': 'application/json;charset=utf-8',
                        'authorization': 'Bearer ' + this.accessToken,
                        'origin': 'https://www.trendyol.com',
                        'sec-fetch-dest': 'empty',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-site': 'same-site',
                        'te': 'trailers'
                    }
                });
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw error.message;
            }
        });
    }
    likeProduct(productID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = {
                    "contentId": productID
                };
                const response = yield axios_1.default.post(`https://public-mdc.trendyol.com/discovery-web-recogw-service/api/favorites?storefrontId=1&culture=tr-TR&channelId=1`, data, {
                    headers: {
                        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:124.0) Gecko/20100101 Firefox/124.0',
                        'accept': 'application/json, text/plain, */*',
                        'accept-language': 'tr-TR,tr;q=0.8,en-US;q=0.5,en;q=0.3',
                        'accept-encoding': 'gzip, deflate, br',
                        'authorization': 'Bearer ' + this.accessToken,
                        'content-type': 'application/json;charset=utf-8',
                        'origin': 'https://www.trendyol.com',
                        'sec-fetch-dest': 'empty',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-site': 'same-site',
                        'te': 'trailers',
                    }
                });
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw error.message;
            }
        });
    }
    unlikeProduct(productID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.delete(`https://public-mdc.trendyol.com/discovery-web-recogw-service/api/favorites?contentId=${productID}&storefrontId=1&culture=tr-TR&channelId=1`, {
                    headers: {
                        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:124.0) Gecko/20100101 Firefox/124.0',
                        'accept': 'application/json, text/plain, */*',
                        'accept-language': 'tr-TR,tr;q=0.8,en-US;q=0.5,en;q=0.3',
                        'accept-encoding': 'gzip, deflate, br',
                        'authorization': 'Bearer ' + this.accessToken,
                        'origin': 'https://www.trendyol.com',
                        'sec-fetch-dest': 'empty',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-site': 'same-site',
                        'te': 'trailers'
                    }
                });
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw error.message;
            }
        });
    }
}
exports.Trendyol = Trendyol;
