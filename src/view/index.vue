<template>
    <div>
        <div @click="getdata">
            get测试
        </div>
        <div @click="getApidata">
            getApi测试
        </div>
        <div @click="postapidata">
            postApi测试
        </div>
        <div @click="postdata">
            post测试
        </div>
    </div>
</template>
<script>
export default {
    mounted(){
        this.init()//页面加载完成事件
    },
    methods:{
        getApidata(){
            let self = this;
            //var url='https://getman.cn/echo';
            var url='http://192.168.12.69:2029/api/V1/VCard/GetApiData/?CardID=1';
            self.$http.getApi(url)
            .then(function(response){
                console.log(response)
            }).catch(function(err){
                console.log(err)
            })
        },
        getdata(){
            let self = this;
            //var url='https://getman.cn/echo';
            var url='http://192.168.12.69:2029/api/V1/VCard/GetData/?CardID=1';
            self.$http.get(url)
            .then(function(response){
                console.log(response)
            }).catch(function(err){
                console.log(err)
            })
        },
        postapidata(){
            let self = this;
            let data = { CardID:3 };
            self.$http.postApi('http://192.168.12.69:2029/api/V1/VCard/PostApiData',data)
            .then(function(response){
                console.log(response)
            }).catch(function(err){
                console.log(err)
            })
        },
        postdata(){
            let self = this;
            let data = { CardID:3 };
            self.$http.post('http://192.168.12.69:2029/api/V1/VCard/PostData',data)
            .then(function(response){
                console.log(response)
            }).catch(function(err){
                console.log(err)
            })
        },
        init(){
             window.localStorage.setItem('Token', 'D0996819A937DF7EE734CA66799688B1');
             window.localStorage.setItem('AuthCode', '1266');
             window.localStorage.setItem('EnterpriseId', '0');
             window.localStorage.setItem('TerminalType', '1');
            console.log('页面加载完成')
        }
    }
};
</script>
