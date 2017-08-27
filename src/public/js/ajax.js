import axios from 'axios'
import qs from 'qs';
import {jsBridge} from './jsBridge'

const Ajax=function(obj){
    let url=obj.url||''
    const data=obj.data||{}
    const method=obj.method||'GET'
    const loading=obj.loading
    const success=obj.success
    const error=obj.error||function(){}

    const host=window.location.host
    let hostName=''
    host=='www.xhdfit.com'?hostName='https://www.xhdfit.com/api':hostName='http://www.hzyuniu.com/api'

    // method=='get'?url=url+'?'+vueqsData(data):url
    // 添加时间戳
    let urlFlag = null
    if( url.indexOf('?') < 0 ){
        urlFlag = true;
    }else{
        urlFlag = false;
    }
    const timestamp =  Date.parse(new Date());
    url = urlFlag ? (url+'?tempVer='+ timestamp) : ( url+'&tempVer='+ timestamp)

    // jsBridge.showLoading()
    if(loading==undefined||loading){
       addLoading()
    }
    const axiosObj={
        method:method,
        // data:qs.stringify(data),
        // params:data,
        url:hostName+url,
        timeout:10000,
        headers:{
            // 'UAINFO':UAINFO,
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'devicecode':localStorage.getItem('deviceCode')||'iphone',
            'token':localStorage.getItem('token')||'QxUCRApUUkZeAQFWAVQGAF8EBFoNBBsSF0VUSi0HEg8JB1EBUUQ=',
            'summary':localStorage.getItem("summary")
        }
    }

    // 添加UaInFO
    if(typeof androidClient != "undefined" ){
        axiosObj.headers.UAINFO = androidClient.getUA();
    }else{
		axiosObj.headers.UAINFO = localStorage.getItem("uainfo");
	}
    
    method=='get'?axiosObj.params=data:axiosObj.data=qs.stringify(data)
    axios(axiosObj)
         .then( (res) =>{

            if(parseInt(res.code) == 10002 || parseInt(res.code) == 10003 || parseInt(res.code) == 10004){
                jsBridge.refresh_token(function(res){
                    Ajax(obj)
                });
                return;
            }
            success(res.data)
            removeLoading()
            return
         })
         .catch( (res)=> {
            error(res)
            removeLoading()
            return
         })

}


const addLoading =function(){
    const loadingHtml=`<div id="loading">
                            <div class="loading">
                                <div class="loading-box">
                                    <div class="loadEffect"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
                                </div>
                            </div>
                        </div>`
    $('body').append(loadingHtml)
}

const removeLoading=function(){
    $('#loading').remove()
}
// ajax 对象转换
const vueqsData = function (data){
    var qsData=[];
    for(var i in data){
        qsData.push(i + '=' + data[i]);
    }
    return qsData.join('&');
}


export {
    Ajax
}

