# Bing 每日壁纸

> 本git仓库不作爬取连接，**历史**图片请见 [niumoo/bing-wallpaper](https://github.com/niumoo/bing-wallpaper) 

## 链接

🔗: https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=8

| 参数        | 值                  | 用途                                 |
| ----------- | ------------------- | ------------------------------------ |
| `format`    | js/rss/xml(默认xml) | 输出值                               |
| `idx`       | 0-7                 | 往前推迟几天(最大15天(n=8&idx=7))    |
| `n`*        | 1-8(必须项)         | 输出数量                             |
| `mkt`       | en-US/more*(见下文) | 语言(暂时无效)                       |
| `mbl`       | 1                   | 显示`mobileUrlBase`值, 等同`UrlBase` |
| `uhd=1`     | 1                   | 请求宽高                             |
| `uhdwidth`  | 3840                | 前提`uhd=1`                          |
| `uhdheight` | 2160                | 前提`uhd=1`                          |

### 关于mkt的值

还是根据ip判断的，更改无效

你可以根据 [Microsoft](https://docs.microsoft.com/en-us/previous-versions/bing/search/dd251064(v=msdn.10)) 链接查找mkt的值

#### 大陆可行的值

对，针对**大陆**，其他地区直接使用`bing.com`域名加上`mkt`值即可获取当地值。global端口暂时未cname到国内，这也不是长久之策


基于 [global](https://global.bing.com) 

| 语言国家/地区 | Language-Country/Region   | Market Name(mkt) |
| ------------- | ------------------------- | ---------------- |
| 日本          | Japanese –  Japan         | ja-JP            |
| 美国          | English –  United States  | en-US            |
| 英国          | English –  United Kingdom | en-GB            |
| 加拿大        | English –  Canada         | en-CA            |
| 印度          | English –  India          | en-IN            |
| 德国          | German –  Germany         | de-DE            |
| 中国          | Chinese –  China          | zh-CN            |
| 意大利        | Italian –  Italy          | it-IT            |
| 法国          | French –  France          | fr-FR            |
|               |                           |                  |
| ROW           |                           | `空`             |

备注：更多信息[^1]

## 返回参数

url: www.bing.com 请求后缀

```json
"url":"/th?id=OHR.DuckHen_ZH-CN6493617016_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
```

urlbase: 必须的数值

```json
"urlbase":"/th?id=OHR.DuckHen_ZH-CN6493617016"
```


| 参数            | 属性     | 内容                                                 |
| --------------- | -------- | ---------------------------------------------------- |
| `startdate`     | 日期     | 20220502                                             |
| `fullstartdate` | 开始日期 | 202205021600                                         |
| `enddate`       | 结束日期 | 20220503                                             |
| `url`           | 链接     | 上面                                                 |
| `urlbase`       | 网址id   | 上面                                                 |
| `copyright`     | 版權     | 鸳鸯妈妈和小鸳鸯们，韩国 (© VDCM image/Getty Images) |
| `copyrightlink` | 版權鏈接 | `https://www.bing.com/search?q=***`                  |
| `title`         | 標題     | 这节游泳课进行得很顺利                               |
| `quiz`          | 測驗     | `/search?q=Bing+homepage+quiz&filters=***`           |
| `wp`            |          | true                                                 |
| `hsh`           | hash     | ebac0300c5e17d8a0d7dd15bd7b682c4                     |
| `drk`           |          | 1                                                    |
| `top`           |          | 1                                                    |
| `bot`           |          | 1                                                    |

## 链接使用帮助

比如 `"urlbase":"/th?id=OHR.DuckHen_ZH-CN6493617016"`的数值

前缀为域名，你可以从以下bing网址获取

| bing (https://) | 更多举例                |
| --------------- | ----------------------- |
| bing.com        | www.bing.com            |
| cn.bing.com     | www2.bing.com           |
| global.bing.com | www3.bing.com 前缀均可* |

获取数值后在前后添加数值即可得到各种图片，以下是`我`已知的链接方式

| 后缀             | 图像参数         | 连接参考                                                     |
| ---------------- | ---------------- | ------------------------------------------------------------ |
| `_1920x1080.jpg` | 2k               | [_1920x1080.jpg](https://www.bing.com/th?id=OHR.SvalbardSun_EN-US2348209213_1920x1080.jpg) |
| `_768x1366.jpg`  | 适应mobile(竖屏) | [_768x1366.jpg](https://www.bing.com/th?id=OHR.SvalbardSun_EN-US2348209213_768x1366.jpg) |
| `_1366x768.jpg`  | -(横屏)          | [_1366x768.jpg](https://www.bing.com/th?id=OHR.TofinoOcean_ZH-CN6555392161_1366x768.jpg) |
| 480x360/         | 测试中。。       |                                                              |
| `_UHD.jpg`       | Ultra HD(超高清) | [_UHD.jpg](https://www.bing.com/th?id=OHR.SvalbardSun_EN-US2348209213_UHD.jpg) |

基于 `_UHD.jpg` 更多参数

| 后缀        | 裁剪参数 |
| ----------- | -------- |
| &w=3840,384 | Width    |
| &h=2160,216 | Height   |

> 注：上面参数可以只出现一个。如果俩个图片不成比例，会自动添加白色边框

> 本文归qsim专属，不得转发（等我发博客后再说



[^1]: 复制值 未验证所有地区
| **Market Name** | **Language-Country/Region** | **语言国家/地区**         |
| --------------- | --------------------------- | ------------------------- |
| ar-XA           | Arabic –  Arabia            | 阿拉伯语 - 阿拉伯         |
| bg-BG           | Bulgarian –  Bulgaria       | 保加利亚语 – 保加利亚     |
| cs-CZ           | Czech –  Czech Republic     | 捷克 - 捷克共和国         |
| da-DK           | Danish –  Denmark           | 丹麦语 – 丹麦             |
| de-AT           | German –  Austria           | 德语 - 奥地利             |
| de-CH           | German –  Switzerland       | 德语 - 瑞士               |
| de-DE           | German –  Germany           | 德语 - 德国               |
| el-GR           | Greek –  Greece             | 希腊语 – 希腊             |
| en-AU           | English –  Australia        | 英语 - 澳大利亚           |
| en-CA           | English –  Canada           | 英语 - 加拿大             |
| en-GB           | English –  United Kingdom   | 英语 - 英国               |
| en-ID           | English –  Indonesia        | 英语 - 印度尼西亚         |
| en-IE           | English –  Ireland          | 英语 - 爱尔兰             |
| en-IN           | English –  India            | 英语 - 印度               |
| en-MY           | English –  Malaysia         | 英语 – 马来西亚           |
| en-NZ           | English –  New Zealand      | 英语 - 新西兰             |
| en-PH           | English –  Philippines      | 英语 - 菲律宾             |
| en-SG           | English –  Singapore        | 英语 – 新加坡             |
| en-US           | English –  United States    | 英语 - 美国               |
| en-XA           | English –  Arabia           | 英语 - 阿拉伯             |
| en-ZA           | English –  South Africa     | 英语 - 南非               |
| es-AR           | Spanish –  Argentina        | 西班牙语 - 阿根廷         |
| es-CL           | Spanish –  Chile            | 西班牙语 – 智利           |
| es-ES           | Spanish –  Spain            | 西班牙语 - 西班牙         |
| es-MX           | Spanish –  Mexico           | 西班牙语 - 墨西哥         |
| es-US           | Spanish –  United States    | 西班牙语 - 美国           |
| es-XL           | Spanish –  Latin America    | 西班牙语 - 拉丁美洲       |
| et-EE           | Estonian –  Estonia         | 爱沙尼亚语 – 爱沙尼亚     |
| fi-FI           | Finnish –  Finland          | 芬兰语 - 芬兰             |
| fr-BE           | French –  Belgium           | 法语 – 比利时             |
| fr-CA           | French –  Canada            | 法语——加拿大              |
| fr-CH           | French –  Switzerland       | 法语 – 瑞士               |
| fr-FR           | French –  France            | 法语——法国                |
| he-IL           | Hebrew –  Israel            | 希伯来语——以色列          |
| hr-HR           | Croatian –  Croatia         | 克罗地亚语 - 克罗地亚     |
| hu-HU           | Hungarian –  Hungary        | 匈牙利语 - 匈牙利         |
| it-IT           | Italian –  Italy            | 意大利语——意大利          |
| ja-JP           | Japanese –  Japan           | 日本 - 日本               |
| ko-KR           | Korean –  Korea             | 韩语 – 韩国               |
| lt-LT           | Lithuanian –  Lithuania     | 立陶宛语 – 立陶宛语       |
| lv-LV           | Latvian –  Latvia           | 拉脱维亚 – 拉脱维亚       |
| nb-NO           | Norwegian –  Norway         | 挪威语 – 挪威             |
| nl-BE           | Dutch –  Belgium            | 荷兰语 – 比利时           |
| nl-NL           | Dutch –  Netherlands        | 荷兰语 - 荷兰             |
| pl-PL           | Polish –  Poland            | 波兰语 – 波兰             |
| pt-BR           | Portuguese –  Brazil        | 葡萄牙语 - 巴西           |
| pt-PT           | Portuguese –  Portugal      | 葡萄牙语 - 葡萄牙         |
| ro-RO           | Romanian –  Romania         | 罗马尼亚语 – 罗马尼亚     |
| ru-RU           | Russian –  Russia           | 俄语 - 俄罗斯             |
| sk-SK           | Slovak –  Slovak Republic   | 斯洛伐克 - 斯洛伐克共和国 |
| sl-SL           | Slovenian –  Slovenia       | 斯洛文尼亚语 - 斯洛文尼亚 |
| sv-SE           | Swedish –  Sweden           | 瑞典语 – 瑞典             |
| th-TH           | Thai –  Thailand            | 泰语 - 泰国               |
| tr-TR           | Turkish –  Turkey           | 土耳其 - 土耳其           |
| uk-UA           | Ukrainian –  Ukraine        | 乌克兰语 - 乌克兰         |
| zh-CN           | Chinese –  China            | 中文 - 中国               |
| zh-HK           | Chinese –  Hong Kong SAR    | 中文 – 香港特别行政区     |
| zh-TW           | Chinese –  Taiwan           | 中国 – 台湾               |

## 