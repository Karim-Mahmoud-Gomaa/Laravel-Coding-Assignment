<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination" >
            <li class="page-item" v-bind:class="{ 'disabled': currentPage==1 }"><a class="page-link" @click="currentPage--;GoTo(currentPage)" href="javascript:;">Previous</a></li>
            <template v-if="currentPage-2>1">
                <a class="page-link" @click="GoTo(1)" href="javascript:;">1</a>
                <a v-if="items[0].number!=2" class="page-link disabled" href="javascript:;">...</a>
            </template>
            <template v-for="page in items">
                <li v-if="page.isActive" class="page-item active">
                    <a class="page-link disabled" href="javascript:;">{{page.number}}</a>
                </li>
                <li v-else class="page-item">
                    <a class="page-link" @click="GoTo(page.number)" href="javascript:;">{{page.number}}</a>
                </li>
            </template>
            <template v-if="currentPage+2<pageSize">
                <a v-if="items[items.length-1].number+1!=pageSize" class="page-link disabled" href="javascript:;">...</a>
                <a class="page-link" @click="GoTo(pageSize)" href="javascript:;">{{pageSize}}</a>
            </template>
            
            <li class="page-item" v-bind:class="{ 'disabled': currentPage==pageSize}"><a class="page-link"  @click="currentPage++;GoTo(currentPage)" href="javascript:;">Next</a></li>
        </ul>
    </nav>
</template>
<script>
export default {
    props: ['pageSize','currentPage','GoToPage'],
    data() {
        return {
        };
    },
    computed: {
        items: function () {
            let pages=[];
            let minSize=this.currentPage>=3?this.currentPage-2:1;
            let maxSize=minSize+4>this.pageSize?this.pageSize:minSize+4;
            
            for (let index = minSize; index <= maxSize; index++) {
                pages.push({
                    number:index,
                    isActive:this.currentPage==index,
                })
            }
            return pages
        }
    },
    methods: {
        GoTo(page) {
            this.GoToPage(page)
        },
    }
}
</script>
<style scope>
nav{
    position: absolute!important;
    bottom: 20px!important;
}
</style>