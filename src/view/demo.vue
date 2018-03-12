<template>
    <div class="demo">
        <p>hello {{world}}</p>
        <p v-text="'hello ' + world"></p>
        <p>{{`hello ${world}`}}</p>
        <p v-text="`hello ${world}`"></p>
        <p v-once>hello {{world}}</p>
        <button @click="world='ziksang'">改变wrold值</button>
        <div>
            <p v-html='html'></p>
        </div>
        <div>
            <a :href='href'>href</a>
            <p :id='id'>id</p>
            <img :src="src" alt="图片">
            <button :disabled = 'disabled'>按钮</button>
        </div>
     </div>
</template>

<script>

export default {
    name: "demo",
     data () {
         return {
              world : "world",
              html : `<span style='color : red;'>显示红色的字你就解析成功了</span>`,
              id : 2,
              href : 'http://www.baidu.com',
              src : 'static/img/logo.png',
              disabled : true
         }
     }
}

</script>