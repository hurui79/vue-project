
export default {
    errormessage(statuscode){
        switch(statuscode){
            case "200" : return "请求成功";
            case "500" : return "内部请求出错";
            case "1000.1" : return "找不到请求的Token或RefreshToken";
            case "1000.2" : return "Token或RefreshToken过期";
            case "1000.3" : return "Token或RefreshToken验证失败";
            case "1000.8" : return "请求的参数信息有误";
            case "1000.9" : return "未找到该RefreshToken对应记录";
            case "1010.1" : return "未检测到上传文件内容";
            case "1010.2" : return "请求最大上传配置项错误";
            case "1010.3" : return "文件超过最大尺寸";
            case "1010.5" : return "请求数据匹配错误";
            case "1020.1" : return "创建签名失败，请检查是否安装客户端exe文件";
            case "1020.2" : return "请求签名错误或过期";
            case "1020.3" : return "请求被禁止或请求失败";
            case "1030.1" : return "该用户不具有此请求权限";
            case "1030.2" : return "未找到相关权限信息";
            case "1030.5" : return "请求数据匹配错误";
            case "1040.5" : return "请求数据匹配错误";
            case "1050.4" : return "未找到任何相关动作信息";
            case "1050.5" : return "参数错误-AuthCode";
            case "1050.6" : return "SystemId-Area错误";
            case "1050.7" : return "SystemId-Controller错误";
            case "1050.8" : return "SystemId-Action错误";
            case "1050.9" : return "SystemId-AreaName错误";
            case "1050.10" : return "SystemId-ControllerName错误";
            case "1050.11" : return "SystemId-ActionName错误";
            case "1250.1" : return "未检测到上传文件内容";	
            case "1250.2" : return "请求最大上传配置项错误";	
            case "1250.3" : return "文件超过最大尺寸";	
            case "1250.5" : return "请求数据匹配错误";
            case "2000.1" : return "参数错误";
            case "2000.2" : return "寻址错误"; 
            case "2100.2" : return "反序列化失败(内部方法)";
            case "2100.3" : return "反序列化失败(外部接口调用)";
            case "2100.4" : return "未知错误编码";
            default : return statuscode;
        }
    },
    handleResponse (response) {
        // 在处理前，删除已经弹出的Alert
        //this.$store.dispatch('deleteAlert');

        if(response.headers.statuscode){//架构组 返回错误信息
            response.statusText = this.errormessage(response.headers.statuscode);
        }
        if(response.data.ResultCode){
            response.statusText = this.errormessage(response.data.ResultCode);
            if(response.data.ResultCode != "200"){
                this.handleApiError(response)
            }
        }
        if (response.status >= 400) {
            if (response.status === 401) {
                this.handleUnauthorized()
            } else if (response.status === 403) {
                this.handleForbidden()
            } else {
                this.handleServerError(response)
            }
        } else {
            if (response.data.status !== 0) {
                this.handleApiError(response)
            }
        }
    },
    /**
     * 处理服务器Http请求异常
     * @param response
     */
    handleServerError (response) {
        this._showAlert(response.statusText)
    },
    /**
     * 处理服务器Http 401未登录异常
     */
    handleUnauthorized () {
        this.$router.replace({name: 'login'})
    },
    /**
     * 处理服务器Http 403无权限异常
     * @param response
     */
    handleForbidden (response) {
        this._showAlert(response.data.message)
    },
    /**
     * 处理服务器API业务异常
     * @param response
     */
    handleApiError (response) {
        this._showAlert(response.data.message)
    },
    /**
     * 向Store中分发需要弹出的消息
     * @param message
     * @private
     */
    _showAlert (message) {
        //this.$store.dispatch('createAlert', {type: 'warning', message: message})
    }
}