import { serve } from "https://deno.land/std@0.120.0/http/server.ts";

async function handleRequest(request: Request) {
    const req = request
    const urlStr = req.url
    const urlObj = new URL(urlStr)
    const path = urlObj.href.substr(urlObj.origin.length)
    const headers_init = {
      headers: {
        "content-type": "application/javascript; charset=utf-8",
        "Access-Control-Allow-Origin": "https://lab.qsim.top",
        "Access-Control-Allow-Methods": "GET"
      }
    }
    const hostdomain = request.headers.get("host");
    const ua = request.headers.get("user-agent");
    if (path=="/favicon.ico") {
        return fetch("https://cdn.jsdelivr.net/npm/zg-cdn/logo/64.png")
    }
    if (path=="/" || hostdomain != 'ipmessage.deno.dev' || !ua.match(/Mozilla\/5.0\b/i)) {
        return Response.redirect('https://lab.qsim.top/ip/', 301); //重定向
    }
    if (path.startsWith('/ip')) {
        const ipmsg = request.headers.get("X-Forwarded-For");
        const ip = urlObj.searchParams.get('ip'); //ip=1/ipv4v6/asn 赋值数值

        if(ip){
          if(ip === '1'){
            const ipinfourl = 'https://ipinfo.io/'+ipmsg+'/json?token=*********************************************'
            const ipinfomsg = await (await fetch(ipinfourl)).json()
            const dbip = 'https://db-ip.com/demo/home.php?s='+ipmsg;
            const dbip2 = (await (await fetch(dbip)).json())
            if(dbip2.demoInfo.error){
              return new Response(JSON.stringify({
                "ip":ipmsg,
                "hostname":ipinfomsg.hostname || '0', //host域名
                "city":ipinfomsg.city || '0', //城市
                "region":ipinfomsg.region ||'0', //省
                "country":ipinfomsg.country ||'0', //国家
                "loc":ipinfomsg.loc || '0', //位置
                "org":ipinfomsg.org || '0', //组织
                "timezone":ipinfomsg.timezone ||'0', //地区时间
                "postal":ipinfomsg.postal || '0', //邮编
                "city2":'0',
                "currencyCode":'0',//货币代码(cny)
                "phonePrefix":'0',//电话前缀名称
                "languages":'0',//语言
                "isp":'0',//ISP 网络服务提供商
                "asNumber":'0', //asn
                "asName":'0', //asn
                "weatherCode":'0',//天气代码
                "threatLevel":'0',//威胁等级
            }), headers_init
          )
            }
            const dbipmsg = dbip2.demoInfo || '0'
            // const zxinc = 'https://ip.zxinc.org/api.php?type=json&ip='+ipmsg;
            // const zxincmsg = (await (await fetch(zxinc)).json()).data
            return new Response(JSON.stringify({
              "ip":ipmsg,
              "hostname":ipinfomsg.hostname || '0', //host域名
              "city":ipinfomsg.city || '0', //城市
              "region":ipinfomsg.region ||'0', //省
              "country":ipinfomsg.country ||'0', //国家
              "loc":ipinfomsg.loc || '0', //位置
              "org":ipinfomsg.org || '0', //组织
              "timezone":ipinfomsg.timezone ||'0', //地区时间
              "postal":ipinfomsg.postal || '0', //邮编
              "city2":dbipmsg.city ||'0',
              "currencyCode":dbipmsg.currencyCode || '0',//货币代码(cny)
              "phonePrefix":dbipmsg.phonePrefix ||'0',//电话前缀名称
              "languages":dbipmsg.languages[0] ||'0',//语言
              "isp":dbipmsg.isp || '0',//ISP 网络服务提供商
              "asNumber":dbipmsg.asNumber ||'0', //asn
              "asName":dbipmsg.asName ||'0', //asn
              "weatherCode":dbipmsg.weatherCode ||'0',//天气代码
              "threatLevel":dbipmsg.threatLevel ||'0',//威胁等级
            }), headers_init
          )
          }else if(checkipv4(ip) || checkipv6(ip)){
            const ipinfourl = 'https://ipinfo.io/'+ip+'/json?token=*********************************************'
            const ipinfomsg = await (await fetch(ipinfourl)).json()
            if(ipinfomsg.bogon){ // 处理127.0.0.1等情况
              return new Response(JSON.stringify({
                "ip":ipinfomsg.ip ||'0',
                "hostname":"bogon",
                "country":"本地网络&保留网络"
              }), headers_init);
            }
            const dbip = 'https://db-ip.com/demo/home.php?s='+ip;
            const dbip2 = (await (await fetch(dbip)).json())
            if(dbip2.demoInfo.error){
              return new Response(JSON.stringify({
                "ip":ipinfomsg.ip ||'0',
                "hostname":ipinfomsg.hostname || '0', //host域名
                "city":ipinfomsg.city || '0', //城市
                "region":ipinfomsg.region ||'0', //省
                "country":ipinfomsg.country ||'0', //国家
                "loc":ipinfomsg.loc || '0', //位置
                "org":ipinfomsg.org || '0', //组织
                "timezone":ipinfomsg.timezone ||'0', //地区时间
                "postal":ipinfomsg.postal || '0', //邮编
                "city2":'0',
                "currencyCode":'0',//货币代码(cny)
                "phonePrefix":'0',//电话前缀名称
                "languages":'0',//语言
                "isp":'0',//ISP 网络服务提供商
                "asNumber":'0', //asn
                "asName":'0', //asn
                "weatherCode":'0',//天气代码
                "threatLevel":'0',//威胁等级
            }), headers_init
          )
            }
            const dbipmsg = dbip2.demoInfo || '0'
            return new Response(JSON.stringify({
              "ip":ipinfomsg.ip || '0',
              "hostname":ipinfomsg.hostname || '0', //host域名
              "city":ipinfomsg.city || '0', //城市
              "city2":dbipmsg.city ||'0',
              "region":ipinfomsg.region ||'0', //省
              "country":ipinfomsg.country ||'0', //国家
              "currencyCode":dbipmsg.currencyCode || '0',//货币代码(cny)
              "phonePrefix":dbipmsg.phonePrefix ||'0',//电话前缀名称
              "languages":dbipmsg.languages[0] ||'0',//语言
              "loc":ipinfomsg.loc || '0', //位置
              "isp":dbipmsg.isp || '0',//ISP 网络服务提供商
              "org":ipinfomsg.org || '0', //组织
              "asNumber":dbipmsg.asNumber ||'0', //asn
              "asName":dbipmsg.asName ||'0', //asn
              "timezone":ipinfomsg.timezone ||'0', //地区时间
              "postal":ipinfomsg.postal || '0', //邮编
              "weatherCode":dbipmsg.weatherCode ||'0',//天气代码
              "threatLevel":dbipmsg.threatLevel ||'0',//威胁等级
            }), headers_init
          )
          }else if(checkasn(ip)){
            const dbip = 'https://db-ip.com/demo/home.php?s='+ip;
            const dbipmsg = (await (await fetch(dbip)).json()).demoInfo
            return new Response(JSON.stringify(dbipmsg), headers_init
          )
          }else{
            const ipapi = 'http://ip-api.com/json/' + ip;
            const ipapi2 = (await (await fetch(ipapi)).json());
            const ipapiip = (await (await fetch(ipapi)).json()).query;
            if(ipapi2.status == 'fail'){
              return new Response('Not Found.', {
                status: 404
              });
            }
            const ipinfourl = 'https://ipinfo.io/'+ipapiip+'/json?token*********************************************'
            const ipinfomsg = await (await fetch(ipinfourl)).json()
            const dbip = 'https://db-ip.com/demo/home.php?s='+ipapiip;
            const dbip2 = (await (await fetch(dbip)).json())
            if(dbip2.demoInfo.error){
              return new Response(JSON.stringify({
                "ip":ipinfomsg.ip ||'0',
                "hostname":ipinfomsg.hostname || '0', //host域名
                "city":ipinfomsg.city || '0', //城市
                "region":ipinfomsg.region ||'0', //省
                "country":ipinfomsg.country ||'0', //国家
                "loc":ipinfomsg.loc || '0', //位置
                "org":ipinfomsg.org || '0', //组织
                "timezone":ipinfomsg.timezone ||'0', //地区时间
                "postal":ipinfomsg.postal || '0', //邮编
                "city2":'0',
                "currencyCode":'0',//货币代码(cny)
                "phonePrefix":'0',//电话前缀名称
                "languages":'0',//语言
                "isp":'0',//ISP 网络服务提供商
                "asNumber":'0', //asn
                "asName":'0', //asn
                "weatherCode":'0',//天气代码
                "threatLevel":'0',//威胁等级
            }), headers_init
          )
            }
            const dbipmsg = dbip2.demoInfo || '0'
            return new Response(JSON.stringify({
              "ip":ipinfomsg.ip || '0',
              "hostname":ipinfomsg.hostname || '0', //host域名
              "city":ipinfomsg.city || '0', //城市
              "city2":dbipmsg.city ||'0',
              "region":ipinfomsg.region ||'0', //省
              "country":ipinfomsg.country ||'0', //国家
              "currencyCode":dbipmsg.currencyCode || '0',//货币代码(cny)
              "phonePrefix":dbipmsg.phonePrefix ||'0',//电话前缀名称
              "languages":dbipmsg.languages[0] ||'0',//语言
              "loc":ipinfomsg.loc || '0', //位置
              "isp":dbipmsg.isp || '0',//ISP 网络服务提供商
              "org":ipinfomsg.org || '0', //组织
              "asNumber":dbipmsg.asNumber ||'0', //asn
              "asName":dbipmsg.asName ||'0', //asn
              "timezone":ipinfomsg.timezone ||'0', //地区时间
              "postal":ipinfomsg.postal || '0', //邮编
              "weatherCode":dbipmsg.weatherCode ||'0',//天气代码
              "threatLevel":dbipmsg.threatLevel ||'0',//威胁等级
            }), headers_init
          )
          }
          
        }else{
          return new Response(JSON.stringify({"ip":ipmsg}), headers_init)
        }
        
    }

}
function checkipv4(ip) {
  return ip.match(/^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/) != null ? true : false
}
function checkipv6(ip) {
  return ip.match(/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/) != null ? true : false
}
function checkasn(asn) { 
  return asn.match(/^(as6553[0-5]|as655[0-2]\d|as65[0-4]\d\d|as6[0-4]\d{3}|as[1-5]\d{4}|as[1-9]?\d\d\d?|as[1-9])$/) != null ? true : false
}
console.log("Listening on http://localhost:8000");
await serve(handleRequest);
