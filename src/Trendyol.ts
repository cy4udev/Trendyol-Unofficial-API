import axios from 'axios';

class Trendyol {
    private language: string;
    private username: string | null;
    private password: string | null;
    private accessToken: string | null;
    private refreshToken: string | null;
    private merthid: string | null;

    constructor(language = 'en') {
        this.language = language;
        this.username = null;
        this.password = null;
        this.accessToken = null;
        this.refreshToken = null;
        this.merthid = null;
    }

    async login(): Promise<any> {
        try {
            const response = await axios.post('https://auth.trendyol.com/login', {
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
        } catch (error: any) {
            if (error?.response?.data?.message) {
                throw error?.response?.data?.message;
            } else {
                throw error.message;
            }
        }
    }

    async extractId(link: string): Promise<string | null> {
        let id = null;
        const regex1 = /-(\d+)\?/;
        const regex2 = /-p-(\d+)/;

        const match1 = link.match(regex1);
        const match2 = link.match(regex2);

        if (match1 && match1[1]) {
            id = match1[1];
        } else if (match2 && match2[1]) {
            id = match2[1];
        }

        return id;
    }

    async followStore(storeID: string): Promise<any> {
        try {
            const response = await axios.post(`https://public-sdc.trendyol.com/discovery-sellerstore-webgw-service/v1/follow/?sellerId=${storeID}&channelId=1`, null, {
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
        } catch (error: any) {
            console.log(error);
            throw error.message;
        }
    }

    async unfollowStore(storeID: string): Promise<any> {
        try {
            const response = await axios.delete(`https://public-sdc.trendyol.com/discovery-sellerstore-webgw-service/v1/follow/?sellerId=${storeID}&culture=tr-TR&channelId=1`, {
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
        } catch (error: any) {
            console.log(error);
            throw error.message;
        }
    }

    async likeProduct(productID: string): Promise<any> {
        try {
            const data = {
                "contentId": productID
            };
            const response = await axios.post(`https://public-mdc.trendyol.com/discovery-web-recogw-service/api/favorites?storefrontId=1&culture=tr-TR&channelId=1`, data, {
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
        } catch (error: any) {
            console.log(error);
            throw error.message;
        }
    }

    async unlikeProduct(productID: string): Promise<any> {
        try {
            const response = await axios.delete(`https://public-mdc.trendyol.com/discovery-web-recogw-service/api/favorites?contentId=${productID}&storefrontId=1&culture=tr-TR&channelId=1`, {
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
        } catch (error: any) {
            console.log(error);
            throw error.message;
        }
    }
}
export { Trendyol };