# Trendyol Unofficial API

**Mevcut Diller**: [🇹🇷](https://cy4u.dev/Trendyol-Unofficial-API/tr "Türkçe") [🇺🇸](https://cy4u.dev/Trendyol-Unofficial-API/ "İngilizce")

E-ticaret alanında, [**Trendyol**](https://cy4u.dev/Trendyol-Unofficial-API/tr "Trendyol") çok çeşitli ürünler sunan önde gelen platformlardan biri olarak öne çıkıyor.

**Trendyol**'un işlevlerini uygulamalarına entegre etmek isteyen geliştiriciler için sağlam bir kütüphane oluşturmak süreci kolaylaştırabilir.

Bu makalede, [**Trendyol**](https://cy4u.dev/Trendyol-Unofficial-API/tr "Trendyol") için özel olarak tasarlanmış bir Node.js kütüphanesi oluşturarak oturum açma, mağaza takibi, mağazaların takibini kaldırma, ürünleri beğenme ve beğenileri geri alma gibi görevler için sorunsuz entegrasyon sağlayacağız.

## Trendyol Kütüphanesine Giriş 

Çok yönlü bir çalışma zamanı ortamı olan Node.js, geliştiricilerin ölçeklenebilir ve verimli web uygulamaları oluşturmalarını sağlar.

Geliştiriciler JavaScript'ten yararlanarak eşzamansız programlamanın gücünü kullanabilir ve bu da onu ağ isteklerini ve API entegrasyonlarını işlemek için ideal bir seçim haline getirir.

[**Trendyol API**](https://cy4u.dev/Trendyol-Unofficial-API/tr "Trendyol API")'miz, [**Trendyol**](https://cy4u.dev/Trendyol-Unofficial-API/tr "Trendyol") ile etkileşime girmenin karmaşıklıklarını kapsüllemeyi ve geliştiricilerin çeşitli eylemleri sorunsuz bir şekilde gerçekleştirmeleri için basitleştirilmiş bir arayüz sunmayı amaçlamaktadır.

### Başlarken

Geliştirme sürecini başlatmak için sisteminizde Node.js'nin kurulu olduğundan emin olun. Resmi Node.js web sitesinden indirebilir veya yüklemek için npm (Node Package Manager) gibi bir paket yöneticisi kullanabilirsiniz.

#### Kurulum

```
$ npm i trendyol-unofficial-api
$ bun i trendyol-unofficial-api
$ pnpm i trendyol-unofficial-api
```

#### Nasıl içe aktarılır

```js
const { Trendyol } = require('trendyol-unofficial-api');
```

#### Trendyol ile Giriş Yapın
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

#### Mağaza Takip Et

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

#### Mağaza Takibi Bırak

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

#### Ürün Beğen

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

#### Ürünü Beğenmekten Vazgeç

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

#### Anahtar Kelimeler

[**Trendyol**](https://cy4u.dev/Trendyol-Unofficial-API/tr "Trendyol"), [**Trendyol API**](https://cy4u.dev/Trendyol-Unofficial-API/tr "Trendyol API"), [**Trendyol Unofficial API**](https://cy4u.dev/Trendyol-Unofficial-API/tr "Trendyol Unofficial API"), [**NodeJS Developer**](https://cy4u.dev "NodeJS Developer"), [**Back-end Developer**](https://cy4u.dev "Back-end Developer"), [**Node.JS Developer**](https://cy4u.dev "Node.JS Developer")

#### Sponsorluk ve Bağış

[Patreon](https://patreon.com/cy4udev "cy4udev patreon")

#### Telif Hakkı ve Diğer Konular

[hello@cy4u.dev](mailto:hello@cy4u.dev "hello@cy4u.dev")

#### Lisans

[**Can Yesilyurt**](https://canyesilyurt.com "Can Yesilyurt") & [**cy4udev**](https://cy4u.dev "cy4udev")
