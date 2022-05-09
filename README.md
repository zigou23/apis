# APIS

收集一些有趣的api和自己做的api

## 自己的api

```
myapi.deno.dev api综合
hitokoto.deno.dev 待我写文档 一言
ipmessage.deno.dev ip信息查询

deno请求限制参照
https://deno.com/deploy/docs/pricing-and-limits
```

## 三方api

Google: 数学函数 + 二维码

```
参考
https://developers.google.com/chart/infographics/docs/formulas
// 数学函数
https://chart.googleapis.com/chart?cht=tx&chl=x%20=%20%5Cfrac%7B-b%20%5Cpm%20%5Csqrt%20%7Bb%5E2-4ac%7D%7D%7B2a%7D
// 二维码
https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=Hello+worlsd&chld=L|1&choe=UTF-8
```

二维码 qrcode

```
https://explorer.verus.io/qr/Hello-world
//西部数码 白边大
https://www.west.cn/web/tool/codepayimg?uuid=Hello-world
//豆瓣
https://img{1,2,3,4}.doubanio.com/dae/qrgen/v2/Hello-world.png
//网易 LOFTER 低清
https://www.lofter.com/genBitmaxImage?url=Hello-world.png
```

thum:页面生成缩略图

```
//文档
https://www.thum.io/documentation/api/url
//每月只能获得 1,000 次
https://image.thum.io/get/https://github.com
https://image.thum.io/get/width/100/crop/600/https://www.google.com
```

IP/whoise请求

```
//ipinfo
https://ipinfo.io/json
https://ipinfo.io/products/whois-api 待我写文档
//db-ip
https://db-ip.com

//国内
ip.zxinc.org/api.php?type=json&ip
ip-api.com/json 支持域名


//apilayer 需要token
api.apilayer.com

//ipstack 很棘手, 全付费 依靠 apilayer
(api.)ipstack.com

https://api.bgpview.io/asn/as13335 & prefix/2a02:ec80::/32 & ip/1.1.1.1
https://api.hackertarget.com/aslookup/?q= as13335 详细 1.1.1.1 信息少
```

unsplash:随机图片

```
https://unsplash.com/developers
https://source.unsplash.com/1600x900/?nature,water,sky,blue,sea
https://source.unsplash.com/1920x1080/?nature,wallpaper,evening
```

获取随机头像

```
//正常人的
https://thispersondoesnotexist.com/image
//动漫人
// 100000最高
https://www.thiswaifudoesnotexist.net/example-36120.jpg
https://thisanimedoesnotexist.ai
```

唐诗宋词

```
// github.com/chinese-poetry/chinese-poetry
https://raw.githubusercontent.com/chinese-poetry/chinese-poetry/master/json/poet.tang.46000.json
```



## 其它

js二维码功能

```
https://www.the-qrcode-generator.com/
```

deno仓库

```
//qrcode
https://github.com/denorg/qrcode
```

等待解决

