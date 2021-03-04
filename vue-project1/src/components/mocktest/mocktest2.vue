<template>
    <div>
        新闻列表
        <ul>
            <li v-for="(item,index) in arr" :key="index">{{item.title}}</li>
        </ul>
        
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            arr:[]
        }
    },
    mounted(){
        axios.get('/list').then(res=>{
        console.log(res.data.code); //200
        //console.log(this.$route.params.id);  yule shehui
        let id=this.$route.params.id;
        // console.log(id);
        // console.log(res.data[id])
        this.arr=res.data[id];
        }).catch(err=>console.log('列表获取失败',err));
    }
}
</script>
