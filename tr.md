# Trendyol Unofficial API

**Mevcut Diller**: [🇹🇷](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "Türkçe") [🇺🇸](https://www.cy4u.dev/Trendyol-Unofficial-API/ "İngilizce")

E-ticaret alanında, [**Trendyol**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "Trendyol") çok çeşitli ürünler sunan önde gelen platformlardan biri olarak öne çıkıyor.

**Trendyol**'un işlevlerini uygulamalarına entegre etmek isteyen geliştiriciler için sağlam bir kütüphane oluşturmak süreci kolaylaştırabilir.

Bu makalede, [**Trendyol**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "Trendyol") için özel olarak tasarlanmış bir Node.js kütüphanesi oluşturarak oturum açma, mağaza takibi, mağazaların takibini kaldırma, ürünleri beğenme ve beğenileri geri alma gibi görevler için sorunsuz entegrasyon sağlayacağız.

## Trendyol Kütüphanesine Giriş 

Çok yönlü bir çalışma zamanı ortamı olan Node.js, geliştiricilerin ölçeklenebilir ve verimli web uygulamaları oluşturmalarını sağlar.

Geliştiriciler JavaScript'ten yararlanarak eşzamansız programlamanın gücünü kullanabilir ve bu da onu ağ isteklerini ve API entegrasyonlarını işlemek için ideal bir seçim haline getirir.

[**Trendyol API**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "Trendyol API")'miz, [**Trendyol**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "Trendyol") ile etkileşime girmenin karmaşıklıklarını kapsüllemeyi ve geliştiricilerin çeşitli eylemleri sorunsuz bir şekilde gerçekleştirmeleri için basitleştirilmiş bir arayüz sunmayı amaçlamaktadır.

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

[**Trendyol**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "Trendyol"), [**Trendyol API**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "Trendyol API"), [**Trendyol Unofficial API**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "Trendyol Unofficial API"), [**trendyol api url**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol api url"), [**trendyol api entegrasyonu javascript**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol api entegrasyonu javascript"), [**trendyol api entegrasyonu typescript**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol api entegrasyonu typescript"), [**trendyol api entegrasyonu nodejs**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol api entegrasyonu nodejs"), [**trendyol go api**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol go api"), [**trendyol public api**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol public api"), [**trendyol api entegrasyonu**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol api entegrasyonu"), [**trendyol api ürün listeleme**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol api ürün listeleme"), [**trendyol api test**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol api test"), [**trendyol api javascript**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol api javascript"), [**trendyol api typescript**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol api typescript"), [**trendyol api nodejs**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol api nodejs"), [**trendyol api github**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol api github"), [**trendyol api destek**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol api destek"), [**trendyol api kullanımı**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol api kullanımı"), [**trendyol sipariş api**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol sipariş api"), [**trendyol api bilgileri**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol api bilgileri"), [**trendyol fatura api**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol fatura api"), [**trendyol api döküman**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol api döküman"), [**trendyol api key nedir**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol api key nedir"), [**trendyol rest api**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol rest api"), [**trendyol api authentication**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol api authentication"), [**trendyol entegrasyon api**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol entegrasyon api"), [**trendyol api postman**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol api postman"), [**trendyol yemek api**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol yemek api"), [**trendyol api documentation**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol api documentation"), [**trendyol api key**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol api key"), [**trendyol pazaryeri api**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol pazaryeri api"), [**trendyol api anahtarı**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol api anahtarı"), [**trendyol api entegrasyonu nasıl yapılır**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol api entegrasyonu nasıl yapılır"), [**trendyol api nedir**](https://www.cy4u.dev/Trendyol-Unofficial-API/tr "trendyol api nedir"), [**NodeJS Developer**](https://www.cy4u.dev "NodeJS Developer"), [**Back-end Developer**](https://www.cy4u.dev "Back-end Developer"), [**Node.JS Developer**](https://www.cy4u.dev "Node.JS Developer"), [**Backend Developer**](https://www.cy4u.dev "Backend Developer")

#### Sponsorluk ve Bağış

[Github](https://github.com/sponsors/cy4udev "cy4udev github") | [Patreon](https://patreon.com/cy4udev "cy4udev patreon") | [BuyMeaCoffee](https://www.buymeacoffee.com/cy4udev "cy4udev BuyMeaCoffee")

#### Telif Hakkı ve Diğer Konular

Telif Hakkı: [copyright@cy4u.dev](mailto:copyright@cy4u.dev "copyright@cy4u.dev") | Diğer Konular: [hello@cy4u.dev](mailto:hello@cy4u.dev "hello@cy4u.dev")

#### Sosyal Medya

[Linkedin](https://www.linkedin.com/company/cy4udev/ "cy4udev linkedin") | [Twitter](https://twitter.com/cy4udev "cy4udev twitter") | [Bluesky](https://bsky.app/profile/cy4u.dev "cy4udev bluesky") | [Instagram](https://instagram.com/cy4udev "cy4udev instagram") | [Youtube](https://www.youtube.com/@cy4udev "cy4udev youtube") | [Telegram](https://t.me/cy4udev "cy4udev telegram") | [Github](https://github.com/cy4udev "cy4udev github") | [Npmjs](https://www.npmjs.com/~cy4udev "cy4udev npmjs")

#### Lisans

[**Can Yesilyurt**](https://canyesilyurt.com "Can Yesilyurt") | [**cy4udev**](https://www.cy4u.dev "cy4udev")
