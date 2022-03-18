<template>
    <div class="search d-flex flex-column justify-content-start">
        <!-- 头部搜索 -->
        <div>
            <van-sticky>
                <div class="search_Box">
                    <div @click="back">
                        <van-icon size="20" name="arrow-left" />
                    </div>
                <div>
                        <form action="javascript:return true">
                            <van-search
                                ref="search"
                                @focus="isSearch = true"
                                placeholder="请输入搜索文字"
                                shape="round"
                                v-model="value"
                                show-action
                                @click="isSearch = true"
                                @search="handleSearch(value)"
                                :autofocus="false"
                            >
                                <template #action>
                                    <div class="search_Btn" @click="handleSearch(value)">搜索</div>
                                </template>
                            </van-search>
                        </form>
                    </div>
                </div>
                <van-tabs v-model:active="active" @click-tab="handleTab">
                    <van-tab title="综合"></van-tab>
                    <van-tab title="销量"></van-tab>
                    <van-tab title="价格升序"></van-tab>
                    <van-tab title="价格降序"></van-tab>
                </van-tabs>
                <!-- <van-dropdown-menu class="dropMenu"  active-color="#29be81">
                        <van-dropdown-item @change="handleLeftMenuChange" v-model="synthesis" :options="option1" />
                        <van-dropdown-item @change="handleRightMenuChange" v-model="defaultSort" :options="option2" />
                </van-dropdown-menu> -->
            </van-sticky>
        </div>
        <!-- 商品列表展示 -->
        <div class="card_Box mrn d-flex flex-column justify-content-start">
            <div v-for="item in testData" :key="item.id">
                <div class="list_content d-flex justify-content-between align-items-center">
                    <div class="left">
                        <van-image radius="14" width="130" height='120' fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" >
                            <template v-slot:loading>
                                <van-loading type="spinner" size="20" />
                            </template>
                            <template v-slot:error>
                                <van-image></van-image>
                            </template>
                        </van-image>
                    </div>
                    <div class="right d-flex flex-column justify-content-around w-100 h-100 ps-4 fs-4">
                        <div>{{item.title}}</div>
                        <div>副标题xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
                        <div class="price">价格：￥{{item.price}}</div>
                        <div>{{item.id}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import { getSearchQuery } from 'api/search'
export default {
    setup(props, ctx) {
        const value = ref('')  // 搜索input框的值
        const isSearch = ref(true) // 是否显示历史搜索
        const goodsList = ref([]) // 根据搜索关键字返回的商品数据
        const searchHistory = ref([]) // 搜索历史记录的数据
        const titleText = ref('搜索')
        const scrollTop = ref(0) // 获取滚动高度

        const active = ref(0) // tab切换默认值

        let testData = [
            {id:1,title:'四件套', price: 999},
            {id:2,title:'被子', price: 555},
            {id:3,title:'枕头', price: 888},
        ]

        // 获取搜索成功的数据
        const getSearchResult = (params) => {
            console.log(params,'params');
            getSearchQuery().then(res=>{
                
            })
        }

        // 点击搜索的回调
        const handleSearch = (e) => {
            getSearchResult(e)
            console.log(e,'eeeeeehandleSearch');
        }
        
        // 切换tab分类标签的回调
        const handleTab = (e) => {
            // getSearchResult({keywords:value.value,searchValue: e.name})
            // console.log(e,'etabs');
            switch (e.name) {
                case 0:
                    testData = testData
                    console.log(testData,'000000000');
                    break;
                case 1:
                    testData = testData
                    console.log(testData,'111111111');
                    break;
                case 2:
                    testData = testData.sort((a,b) => a.price - b.price)
                    console.log(testData,'222222222');
                    break;
                case 3:
                    testData = testData.sort((a,b) => b.price - a.price)
                    console.log(testData,'33333333333');
                    break;
                default:
                    break;
            }
        }
        return {
            value,
            isSearch,
            goodsList,
            searchHistory,
            titleText,
            scrollTop,
            active,
            getSearchResult,
            handleSearch,
            testData,
            handleTab
        }
    }
}
</script>

<style lang="scss" scoped>
.search {
    overflow: hidden;
    .search_Box {
    padding: 4px 10px;
    position: relative;
    display: flex;
    background-color: white;
    >div:nth-child(1){
        width: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #5f656b;
        font-size: 20px;
    }
    >div:nth-child(2) {
        width: calc(100% - 8vw);
        .search_Btn {
            color: #b91c3b;
        }
    }
}
.mrn {
    width: 100vw;
    height: 100vh;
    >div:nth-child(1){
        margin-top: 10px;
    }
    .list_content{
        height: 32vw;
        /* background-color: #f5f5f5; */
        border-radius: 10px;
        margin: 5px;
        padding: 0 10px;
        .left {

        }
        .right {
            overflow: hidden;
            >div{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .price{
                color: red;
            }
            
        }
    }
}
}


</style>