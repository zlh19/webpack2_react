
global.jsBridge = {
    bridge:null,
    setup:function(callback,responsecallback){
        if (window.WebViewJavascriptBridge) { 
            return callback(WebViewJavascriptBridge,responsecallback); 
        }
        
        if (window.WVJBCallbacks) { 
            return window.WVJBCallbacks.push(callback); 
        }
        
        window.WVJBCallbacks = [callback];
        var WVJBIframe = document.createElement('iframe');
        WVJBIframe.style.display = 'none';
        WVJBIframe.src = 'https://__bridge_loaded__';
        document.documentElement.appendChild(WVJBIframe);
        setTimeout(function() { 
            document.documentElement.removeChild(WVJBIframe);
            if(responsecallback!=undefined){responsecallback();}
        }, 0);
    },
    init:function(responsecallback){
        const call_by_ios = function(bridge,responsecallback) {
            jsBridge.bridge = bridge;
            if(responsecallback != undefined){
                responsecallback();
            }
        };
        jsBridge.setup(call_by_ios,responsecallback);
    },
    callback:function(name, value){
        //eval("var data = " + value + ";");
        var data = JSON.parse(value);
        if(name == 'JS_CALLBACK_REFRESH_TOKEN'){
            jsBridge.callback_action.refresh_token(data);
        }else if(name == 'JS_CALLBACK_TRAIN_LESSON'){
            jsBridge.callback_action.linkTrainLesson(data);
        }else if(name == 'JS_CALLBACK_TRAIN_BIKE'){
            jsBridge.callback_action.linkTrainBike(data);
        }else if(name == 'JS_CALLBACK_SHOWME_BEST'){
            jsBridge.callback_action.linkTrendSelected();
        }else if(name == 'JS_CALLBACK_SHOWME_NEW'){
            jsBridge.callback_action.linkTrendNewest();
        }else if(name == 'bicycleLinkBlueTooth'){
            jsBridge.callback_action.bicycleLinkBlueTooth(data);
        }else if(name == 'classShowPublicPhoto'){
            jsBridge.callback_action.classShowPublicPhoto(data);
        }else if(name == 'deleteShowPublishPhoto'){
            jsBridge.callback_action.deleteShowPublishPhoto(data);
        }else if(name == 'uploadClassPublishPhoto'){
            jsBridge.callback_action.uploadClassPublishPhoto();
        }else if(name == 'JS_CALLBACK_LOAD_MORE'){
            jsBridge.callback_action.showLoadMore();
        }else if(name == 'refreshTrendsNewest'){
            jsBridge.callback_action.refreshTrendsNewest();
        }else if(name == 'refreshTrainClass'){
            jsBridge.callback_action.refreshTrainClass();
        }else if(name == 'trendsCommentSubmit'){
            jsBridge.callback_action.trendsCommentSubmit(data);
        }else if(name == 'JS_CALLBACK_BLUETOOTH_SEC_DATA'){
            jsBridge.callback_action.freeBicycleBlueSendBlueTooth(data);
        }else if(name == 'IOS_GET_DEVICE_USERID'){
            jsBridge.callback_action.getDeviceUserId(data);
        }
    },
    callback_action : {
        refresh_token:function(data){         
            localStorage.setItem('token',data.token);
            window.location.reload()
        },
        set_w:function(data){},
        linkTrainLesson(data){},
        linkTrainBike(data){},
        linkTrendSelected(){},
        linkTrendNewest(){},
        bicycleLinkBlueTooth(data){},
        classShowPublicPhoto(data){},
        uploadClassPublishPhoto(){},
        showLoadMore(){},
        refreshTrendsNewest(){},
        trendsCommentSubmit(data){},
        freeBicycleBlueSendBlueTooth(data){},
        refreshTrainClass(){},
        getDeviceUserId(data){}
    },
    showLoading(){
        // if(typeof androidClient != "undefined" ){
        //     androidClient.beautifulRefresh(true);
        //     return;
        // }          
        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }
        
        bridge.callHandler('IOS_SHOW_LOADING', {}, function(response) {
            //返回值不用处理;
        });
    },
    hideLoading(){
        // if(typeof androidClient != "undefined" ){
        //     androidClient.beautifulRefresh(false);
        //     return;
        // }  
        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }
        
        bridge.callHandler('IOS_HIDE_LOADING', {}, function(response) {
            //返回值不用处理;
        });
    },
    refresh_token(callback){

        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }
        
        bridge.callHandler('IOS_REFRESH_TOKEN', {}, function(response) {
            callback(response)
        });
    },
    //蓝牙继续播放
    set_play(){
        if(typeof androidClient != "undefined" ){
            androidClient.startBleSendToJs();
            return;
        }           
        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }
        
        bridge.callHandler('IOS_BLUETOOTH_PLAY', {}, function(response) {
        });
    },
    //蓝牙退出
    blueToothStop:function(){
        if(typeof androidClient != "undefined" ){
            var connectData=androidClient.disconnectBlueTooth();
            return JSON.parse(connectData);
        }

        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }
        
        bridge.callHandler('disconnectBlueTooth', {}, function(response) {
            
            callback(response)
        });
    },
    // 自由骑行暂停
    setFreeBicyclePause(){
        if(typeof androidClient != "undefined" ){
            androidClient.myBikePause();
            return;
        }           
        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }
        
        bridge.callHandler('IOS_BLUETOOTH_PAUSE', {}, function(response) {

        });
    },
    // 开启摄像头
    scan_qr(url,callback){
        if(typeof androidClient != "undefined" ){
            androidClient.gotoChallengeScan(url);
            return;
        }
        
        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }
                
        bridge.callHandler('goClassScan', {}, function(response) {
            //因为IOS是异步最后会到 JS_CALLBACK_WEIXIN_LOGIN 回调给JS
            callback(response)
        });
    },
    // 显示秀圈内容
    showTopTab(isShow){
        if(typeof androidClient != "undefined" ){
            androidClient.showTopTab(isShow);
            return;
        }
    },
    // 训练详情
    goActionListActivity(id){
        if(typeof androidClient != "undefined" ){
            androidClient.goActionListActivity(id);
            return;
        }

        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }
        

        bridge.callHandler('goActionListActivity', {'id':id}, function(response) {
            
        });
    },
    // 显示训练摄像头按钮
    trainIsShowBicycle(isShow){
        if(typeof androidClient != "undefined" ){
            androidClient.trainIsShowBicycle(isShow);
            return;
        }

        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }
        bridge.callHandler('trainIsShowBicycle', {'isShow':isShow}, function(response) {
            
        });
    },
    // 移除进度条
    remove_progress:function(){
        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }

        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }
        
        bridge.callHandler('IOS_NOTIFICATION_CMD', {command:'IOS_REMOVE_PROGRESS_VIEW', isShow:1}, function(response) {
            
        });
    },
    // 状态
    bicycleLinkBlueTooth:function(callback){
        if(typeof androidClient != "undefined" ){
            var stateData=androidClient.bicycleLinkBlueTooth();
            return JSON.parse(stateData);
        }
        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }

        bridge.callHandler('IOS_BLUETOOTH_IS_CONNECTED', {}, function(response) {
            
            callback(response)
        });
    },
    // 跳转页面
    pageHref:function(pageUrl,state){
        if(typeof androidClient != "undefined" ){
            androidClient.goH5Page(pageUrl);
            return;
        }
        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }

        var topBarState=state||0
        //默认0，1无头部，2有头部，3有下拉，有头部，4，无头，有下拉
        bridge.callHandler('goH5Page', {'page':pageUrl,'topBarState':topBarState}, function(response) {
            
        });
    },
    // 获取课程信息
    getClassFinishData:function(callback){
        if(typeof androidClient != "undefined" ){
            const sendData= androidClient.sendDataClass();
            return JSON.parse(sendData);
        }

        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }

        bridge.callHandler('sendClassFinishData', {}, function(response) {
            
            callback(response)
        });

    },
    // 选择上传图片
    cameraChoice:function(photoSize){
        if(typeof androidClient != "undefined" ){
            androidClient.chosePhotoClickForPublish(photoSize);
            return;
        }

        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }

        bridge.callHandler('chosePhotoClickForPublish', {'photoSize':photoSize}, function(response) {
        });
    },
    // 提供高度
    getWebViewHeight:function(data){
        if(typeof androidClient != "undefined" ){
            androidClient.getWebViewHeight(data);
            return;
        }

        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }

        bridge.callHandler('getWebViewHeight', {'webViewHeight':data}, function(response) {
        });
    },
    // 截图
    getWebViewPicture(callback){
        if(typeof androidClient != "undefined" ){
            const classCompletePhoto=androidClient.getWebViewPicture();
            if(classCompletePhoto){
                 return JSON.parse(classCompletePhoto);
            }
        }

        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }

        bridge.callHandler('getWebViewPicture', {}, function(response) {
            
            callback(response)
        });
    },
    // 发布
    uploadClassPublishState(url){
        if(typeof androidClient != "undefined" ){
            androidClient.uploadClassPublishState(url);
            return;
        }

        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }

        bridge.callHandler('uploadClassPublishState', {}, function() {
            
        });
    },
    // 朋友圈发布完成
    trendsPublishFinished(){
        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }

        bridge.callHandler('trendsPublishFinished', {}, function() {
            
        });
    },
    finishWebViewShowActivity(){
        if(typeof androidClient != "undefined" ){
            androidClient.finishWebViewShowActivity();
            return;
        }
    },
    testUrl(){
      var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }

        bridge.callHandler('testUrl', {}, function(response) {
            
            // callback(response)
        });  
    },
    /*
        用  途：关闭加载更多
        方法名：whetherToLoadMore
        参  数：isOpen--true 开启，flase 关闭
    */
    whetherToLoadMore(isOpen){
        if(typeof androidClient != "undefined" ){
            androidClient.whetherToLoadMore(isOpen);
            return;
        }

        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }
                
        bridge.callHandler('IOS_NOTIFICATION_CMD', {command:'whetherToLoadMore',keys:{isOpen:isOpen}}, function(response) {
            //因为IOS是异步最后会到 JS_CALLBACK_WEIXIN_LOGIN 回调给JS
        });  
    },
    /*
        用  途：开始拉
        方法名：loadMoreBegining
        参  数：无
    */
    loadMoreBegining(){
        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }
                
        bridge.callHandler('IOS_NOTIFICATION_CMD', {command:'loadMoreBegining',keys:{}}, function(response) {
            //因为IOS是异步最后会到 JS_CALLBACK_WEIXIN_LOGIN 回调给JS
        });  
    },
    /*
        用  途：拉到最后
        方法名：loadMoreEnding
        参  数：无
    */
    loadMoreEnding(){
        if(typeof androidClient != "undefined" ){
            androidClient.loadMoreEnding();
            return;
        }

        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }
                
        bridge.callHandler('IOS_NOTIFICATION_CMD', {command:'loadMoreEnding',keys:{}}, function(response) {
            //因为IOS是异步最后会到 JS_CALLBACK_WEIXIN_LOGIN 回调给JS
        });  
    },
    /*
        用  途：关闭下拉刷新
        方法名：whetherToRefresh
        参  数：isOpen--true 开启，flase 关闭
    */
    whetherToRefresh(isOpen){
        if(typeof androidClient != "undefined" ){
            androidClient.whetherToRefresh(isOpen);
            return;
        } 
    },
    /*
        用  途：下拉完毕回到初始值，基本在ajax请求后，调用
        方法名：close_pull_up
        参  数：isshow=1关闭
    */
    close_pull_up:function(){
        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }

        bridge.callHandler('IOS_NOTIFICATION_CMD', {command:'IOS_CLOSE_PULL_UP', isShow:1}, function(response) {
            
        });
    },
    goToCourse(){
        if(typeof androidClient != "undefined" ){
            androidClient.goToCourse();
            return;
        }
        
        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }
                
        bridge.callHandler('goToCourse', {}, function(response) {
            
        });
    },
    /*
        用  途：客户端获取token,返回token,deviceCode，保存到locaStorage中
        方法名：getToken
        参  数：无
    */
    get_token:function(callbackFn){
        if(typeof androidClient != "undefined" ){
            var resposeObj=androidClient.getToken();
            localStorage.setItem("token", JSON.parse(resposeObj).token);
            localStorage.setItem("deviceCode", JSON.parse(resposeObj).deviceCode);
            callbackFn()
            return;
        }

        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            //callbackFn({});
            return;
        }
        
        bridge.callHandler('IOS_GET_TOKEN', {}, function(response) {
            localStorage.setItem("token", response.token);
            localStorage.setItem("deviceCode", response.deviceCode);
            //返回值不用处理;
            callbackFn(response)
        });
    },
    // 标题显示+title
    setShowNav(obj){
        if(typeof androidClient != "undefined" ){
            androidClient.setShowNav(obj);
            return;
        }

        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }
        bridge.callHandler('IOS_SET_TITLE', {title:obj.title}, function(response) {
            
        });
    },
    freeRideFromTabTrain(){
        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }
                
        bridge.callHandler('freeRideFromTabTrain',{}, function(response) {
            //因为IOS是异步最后会到 JS_CALLBACK_WEIXIN_LOGIN 回调给JS
        });
    },
    freeBicycleFinish(){
        if(typeof androidClient != "undefined" ){
            androidClient.freeBicycleFinish();
            return;
        }
        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }
        bridge.callHandler('freeBicycleFinish',{}, function(response) {
            //因为IOS是异步最后会到 JS_CALLBACK_WEIXIN_LOGIN 回调给JS
        });
    },
    toTrendsDetailActivity(url){
        if(typeof androidClient != "undefined" ){
            androidClient.toTrendsDetailActivity(url);
            return;
        }

        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }
                
        bridge.callHandler('toTrendsDetailActivity',{url:url}, function(response) {
            //因为IOS是异步最后会到 JS_CALLBACK_WEIXIN_LOGIN 回调给JS
        });
        
    },
    // 获取发布信息
    sendTrendsDetailReplyInfo(data){
        if(typeof androidClient != "undefined" ){
            androidClient.getTrendsDetailReplyInfo(data);
            return;
        }

        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }
                
        bridge.callHandler('sendTrendsDetailReplyInfo', JSON.parse(data), function(response) {
            //因为IOS是异步最后会到 JS_CALLBACK_WEIXIN_LOGIN 回调给JS
        });
    },
    freeBicycleBlueToothPause(){
        if(typeof androidClient != "undefined" ){
            androidClient.freeBicycleBlueToothPause();
            return;
        }

        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }
                
        bridge.callHandler('IOS_BLUETOOTH_PAUSE',{}, function(response) {
            //因为IOS是异步最后会到 JS_CALLBACK_WEIXIN_LOGIN 回调给JS
        });
    },
    freeBicycleBlueToothStop(){
        if(typeof androidClient != "undefined" ){
            androidClient.freeBicycleBlueToothStop();
            return;
        }

        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }
                
        bridge.callHandler('IOS_BLUETOOTH_STOP', {}, function(response) {
            //因为IOS是异步最后会到 JS_CALLBACK_WEIXIN_LOGIN 回调给JS
        });
    },
    freeBicycleBlueToothPlay(){
        if(typeof androidClient != "undefined" ){
            androidClient.freeBicycleBlueToothPlay();
            return;
        }

        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }
                
        bridge.callHandler('IOS_BLUETOOTH_PLAY', {}, function(response) {
            //因为IOS是异步最后会到 JS_CALLBACK_WEIXIN_LOGIN 回调给JS
        });
    },

    /*
        用  途：发布照片，点击传给客户端index值
        方法名：sendPhotoIndex
        参  数：index--传入index索引值，0开始
    */
    sendPhotoIndex(index){
        if(typeof androidClient != "undefined" ){
            androidClient.sendPhotoIndex(index);
            return;
        }
        var bridge = jsBridge.bridge;
        if(bridge == undefined || bridge == null){
            return;
        }
                
        bridge.callHandler('IOS_NOTIFICATION_CMD', {command:'sendPhotoIndex',keys:{index:index}}, function(response) {
            //因为IOS是异步最后会到 JS_CALLBACK_WEIXIN_LOGIN 回调给JS
        });  
    }


}

export {
    jsBridge
}
