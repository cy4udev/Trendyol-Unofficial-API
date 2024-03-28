# Trendyol Unofficial API

**Available Languages**: [🇺🇸](https://cy4u.dev/Trendyol-Unofficial-API/ "English") [🇹🇷](https://cy4u.dev/Trendyol-Unofficial-API/tr "Turkish")

In the realm of e-commerce, [**Trendyol**](https://cy4u.dev/Trendyol-Unofficial-API "Trendyol") stands as one of the prominent platforms, offering a diverse range of products. 

For developers looking to integrate [**Trendyol**](https://cy4u.dev/Trendyol-Unofficial-API "Trendyol")'s functionalities into their applications, crafting a robust library can streamline the process. 

In this article, we'll delve into the creation of a Node.js library tailored specifically for **Trendyol**, allowing seamless integration for tasks like login, store tracking, untracking stores, liking products, and undoing likes.

## Introduction to Trendyol Library 

Node.js, being a versatile runtime environment, empowers developers to build scalable and efficient web applications.

By leveraging JavaScript, developers can harness the power of asynchronous programming, making it an ideal choice for handling network requests and API integrations.

Our [**Trendyol API**](https://cy4u.dev/Trendyol-Unofficial-API "Trendyol API") aims to encapsulate the intricacies of interacting with [**Trendyol**](https://cy4u.dev/Trendyol-Unofficial-API "Trendyol"), offering a simplified interface for developers to perform various actions seamlessly.

### Getting Started

To kickstart the development process, ensure you have Node.js installed on your system. You can download it from the official Node.js website or use a package manager like npm (Node Package Manager) to install it.


#### Installation

```
$ npm i trendyol-unofficial-api
$ bun i trendyol-unofficial-api
$ pnpm i trendyol-unofficial-api
```

#### How to import

```js
const { Trendyol } = require('trendyol-unofficial-api');
```


#### Login with Trendyol

```js
 async function loginTrendyol() {
    const trendyol = new Trendyol();
    trendyol.username = 'your@mail.com';
    trendyol.password = 'your_password';
    await trendyol.login().then((result) => {
        console.log(result)
        /*
                {
                accessToken: 'eyJlbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJTdGFuZGFyZFVzZXIiOiIwIiwiqW5pcXVlX25hbWUiOiJjeWVzaWxgcnQ5NkBvdXRsb29rLmNvbSIsInN1YiI6ImN5ZXNpbHlydDk2QG91dGxvb2suY29tIiwicm9sZSI6InVzZXIiLCJhdHdydG1rIjoiMjQwZDJlOWEtZWI4MS0xMWVlLThlN2ItMjJlN2YyNzc5Mzc4IiwidXNlcklkIjoiMjg5MjU3MzUiLCJlbWFpbCI6ImN5ZXNpbHlydDk2QG91dGxvb2suY29tIiwiYXBwTmFtZSI6InR5IiwiYXVkIjoic2JBeXpZdFgraqhlTDRpZlZXeTV0eU1PTFBKV0Jya2EiLCJleHAiOjE4NjkyNTMwMzgsImlzcyI6ImF1dGgudHJlbmR5b2wuY29tIiwibmJmIjbxNzExNDY1MDM4fQ.CA5vHzWaBRSNiWKnjkV0BA4a7mBeaw-7ICaj86zR63U',
                expiresIn: 157788000,
                refreshToken: 'eyJhbGcqOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAeOjE3MTE1NTE0MzgsInN1YiI6MX0.pZ5U-LpU2IHrKT_yzidrIvbQMO_nhF0Y8tSWAcSQ0P8'
                }
        */
    }).catch((err) => {
        console.log(err)
        /*
               Please check your mail or password!
        */
    });
}
loginTrendyol();
```
#### Follow Store

```js
async function followStore() {
    const trendyol = new Trendyol();
    const link = await trendyol.extractId('https://www.trendyol.com/magaza/online-parfum-m-117151?sst=0');
    trendyol.accessToken = 'eyJlbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJTdGFuZGFyZFVzZXIiOiIwIiwiqW5pcXVlX25hbWUiOiJjeWVzaWxgcnQ5NkBvdXRsb29rLmNvbSIsInN1YiI6ImN5ZXNpbHlydDk2QG91dGxvb2suY29tIiwicm9sZSI6InVzZXIiLCJhdHdydG1rIjoiMjQwZDJlOWEtZWI4MS0xMWVlLThlN2ItMjJlN2YyNzc5Mzc4IiwidXNlcklkIjoiMjg5MjU3MzUiLCJlbWFpbCI6ImN5ZXNpbHlydDk2QG91dGxvb2suY29tIiwiYXBwTmFtZSI6InR5IiwiYXVkIjoic2JBeXpZdFgraqhlTDRpZlZXeTV0eU1PTFBKV0Jya2EiLCJleHAiOjE4NjkyNTMwMzgsImlzcyI6ImF1dGgudHJlbmR5b2wuY29tIiwibmJmIjbxNzExNDY1MDM4fQ.CA5vHzWaBRSNiWKnjkV0BA4a7mBeaw-7ICaj86zR63U'
    await trendyol.followStore(link).then((result) => {
        console.log(result);
        /*
        {
            "couponStatus": false,
            "couponStatusMessages": [
                {
                    "key": "CollectableCouponIsAlreadyCollected",
                    "message": "Kazanılan kuponlar maalesef tekrar kazanılamıyor. Keyifli alışverişler"
                }
            ],
            "discount": "",
            "followStatus": true
        }
        */
    }).catch((err) => {
        console.log(err);
    });
}
followStore();
```

#### Unfollow Store

```js
async function unfollowStore() {
    const trendyol = new Trendyol();
    const link = await trendyol.extractId('https://www.trendyol.com/magaza/online-parfum-m-117151?sst=0');
    trendyol.accessToken = 'eyJlbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJTdGFuZGFyZFVzZXIiOiIwIiwiqW5pcXVlX25hbWUiOiJjeWVzaWxgcnQ5NkBvdXRsb29rLmNvbSIsInN1YiI6ImN5ZXNpbHlydDk2QG91dGxvb2suY29tIiwicm9sZSI6InVzZXIiLCJhdHdydG1rIjoiMjQwZDJlOWEtZWI4MS0xMWVlLThlN2ItMjJlN2YyNzc5Mzc4IiwidXNlcklkIjoiMjg5MjU3MzUiLCJlbWFpbCI6ImN5ZXNpbHlydDk2QG91dGxvb2suY29tIiwiYXBwTmFtZSI6InR5IiwiYXVkIjoic2JBeXpZdFgraqhlTDRpZlZXeTV0eU1PTFBKV0Jya2EiLCJleHAiOjE4NjkyNTMwMzgsImlzcyI6ImF1dGgudHJlbmR5b2wuY29tIiwibmJmIjbxNzExNDY1MDM4fQ.CA5vHzWaBRSNiWKnjkV0BA4a7mBeaw-7ICaj86zR63U'
    await trendyol.unfollowStore(link).then((result) => {
        console.log(result);
        /*
        {
            "couponStatus": false,
            "followStatus": false
        }
        */
    }).catch((err) => {
        console.log(err);
    });
}
unfollowStore();
```

#### Like Product

```js
    async function likeProduct() {
        const trendyol = new Trendyol();
        const link = await trendyol.extractId('https://www.trendyol.com/bargello/kadin-parfum-324-oriental-50-ml-edp-8691841304713-p-34117096');
        trendyol.accessToken = 'eyJlbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJTdGFuZGFyZFVzZXIiOiIwIiwiqW5pcXVlX25hbWUiOiJjeWVzaWxgcnQ5NkBvdXRsb29rLmNvbSIsInN1YiI6ImN5ZXNpbHlydDk2QG91dGxvb2suY29tIiwicm9sZSI6InVzZXIiLCJhdHdydG1rIjoiMjQwZDJlOWEtZWI4MS0xMWVlLThlN2ItMjJlN2YyNzc5Mzc4IiwidXNlcklkIjoiMjg5MjU3MzUiLCJlbWFpbCI6ImN5ZXNpbHlydDk2QG91dGxvb2suY29tIiwiYXBwTmFtZSI6InR5IiwiYXVkIjoic2JBeXpZdFgraqhlTDRpZlZXeTV0eU1PTFBKV0Jya2EiLCJleHAiOjE4NjkyNTMwMzgsImlzcyI6ImF1dGgudHJlbmR5b2wuY29tIiwibmJmIjbxNzExNDY1MDM4fQ.CA5vHzWaBRSNiWKnjkV0BA4a7mBeaw-7ICaj86zR63U';
        await trendyol.likeProduct(link).then((result) => {
            console.log(result);
            /* {
                "error": null,
                    "headers": { },
                "isSuccess": true,
                    "result": true,
                        "statusCode": 200
            } */
        }).catch((err) => {
            console.log(err);
        });
    }
    likeProduct();
```

#### Unlike Product

```js
    async function unlikeProduct() {
        const trendyol = new Trendyol();
        const link = await trendyol.extractId('https://www.trendyol.com/bargello/kadin-parfum-324-oriental-50-ml-edp-8691841304713-p-34117096');
        trendyol.accessToken = 'eyJlbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJTdGFuZGFyZFVzZXIiOiIwIiwiqW5pcXVlX25hbWUiOiJjeWVzaWxgcnQ5NkBvdXRsb29rLmNvbSIsInN1YiI6ImN5ZXNpbHlydDk2QG91dGxvb2suY29tIiwicm9sZSI6InVzZXIiLCJhdHdydG1rIjoiMjQwZDJlOWEtZWI4MS0xMWVlLThlN2ItMjJlN2YyNzc5Mzc4IiwidXNlcklkIjoiMjg5MjU3MzUiLCJlbWFpbCI6ImN5ZXNpbHlydDk2QG91dGxvb2suY29tIiwiYXBwTmFtZSI6InR5IiwiYXVkIjoic2JBeXpZdFgraqhlTDRpZlZXeTV0eU1PTFBKV0Jya2EiLCJleHAiOjE4NjkyNTMwMzgsImlzcyI6ImF1dGgudHJlbmR5b2wuY29tIiwibmJmIjbxNzExNDY1MDM4fQ.CA5vHzWaBRSNiWKnjkV0BA4a7mBeaw-7ICaj86zR63U';
        await trendyol.unlikeProduct(link).then((result) => {
            console.log(result);
            /* {
                "error": null,
                    "headers": { },
                "isSuccess": true,
                    "result": true,
                        "statusCode": 200
            } */
        }).catch((err) => {
            console.log(err);
        });
    }
    unlikeProduct();
```

#### Keywords

[**Trendyol**](https://cy4u.dev/Trendyol-Unofficial-API/ "Trendyol"), [**Trendyol API**](https://cy4u.dev/Trendyol-Unofficial-API/ "Trendyol API"), [**Trendyol Unofficial API**](https://cy4u.dev/Trendyol-Unofficial-API/ "Trendyol Unofficial API"), [**NodeJS Developer**](https://cy4u.dev "NodeJS Developer"), [**Back-end Developer**](https://cy4u.dev "Back-end Developer"), [**Node.JS Developer**](https://cy4u.dev "Node.JS Developer")

#### Sponsor & Donate

[Patreon](https://patreon.com/cy4udev "cy4udev patreon") |

#### Copyright & Other Issues

Copyright: [copyright@cy4u.dev](mailto:copyright@cy4u.dev "copyright@cy4u.dev") | Other Issues: [hello@cy4u.dev](mailto:hello@cy4u.dev "hello@cy4u.dev")

#### Social Media

[Linkedin](https://www.linkedin.com/company/cy4udev/ "cy4udev linkedin") | [Twitter](https://twitter.com/cy4udev "cy4udev twitter") | [Bluesky](https://bsky.app/profile/cy4u.dev "cy4udev bluesky") | [Instagram](https://instagram.com/cy4udev "cy4udev instagram") | [Github](https://github.com/cy4udev "cy4udev github") | [Npmjs](https://www.npmjs.com/~cy4udev "cy4udev npmjs")

#### License

[**Can Yesilyurt**](https://canyesilyurt.com "Can Yesilyurt") | [**cy4udev**](https://cy4u.dev "cy4udev")
