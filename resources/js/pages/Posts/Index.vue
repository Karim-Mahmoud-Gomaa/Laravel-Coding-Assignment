<template>
    <layout-default>
        <div class="page-content">
            <div class="container-fluid">
                <!-- start page title -->
                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box d-flex align-items-center justify-content-between">
                            <h4 class="mb-0"> Blog Posts List </h4>
                            <div class="page-title-right">
                                <button type="button" @click="$refs.FormModal.create()" class="btn btn-success waves-effect waves-light">
                                    Add New +
                                </button>
                                <FormModal ref="FormModal" :fetchData="fetchData" />
                                <ShowModal ref="ShowModal"/>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end page title --> 
                <div class="row">
                    <div class="col-12"> 
                        <div class="card">
                            <div class="col-12">
                                <div class="col-md-4 p-4 pb-0">
                                    <input type="text" @input="fetchData" v-model="filter.search" placeholder="Search.." class="form-control input-filter pb-1">
                                </div>
                            </div> 
                            <div v-if="posts&&posts.data.length" class="card-body pb-5" style="overflow-x: auto;min-height: 400px;">
                                <p class="float-start text-muted mb-0">{{posts.to}}/{{posts.total}} Rows - {{posts.current_page}}/{{posts.last_page}} Pages</p>
                                <table id="datatable" class="table table-bordered dt-responsive nowrap mb-5" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Created By</th>  
                                            <th>Created At</th>  
                                            <th>Options</th> 
                                        </tr> 
                                    </thead>
                                    <tbody>
                                        <tr v-for="(post,index) in posts.data"> 
                                            <td>{{post.title}}</td>
                                            <td>{{post.user.name}}</td>
                                            <td>{{moment(post.created_at).format("DD/MM/YYYY")}}</td>
                                            <td>
                                                <div class="btn-group">
                                                    <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i class="mdi mdi-chevron-down"></i> More
                                                    </button>
                                                    <div class="dropdown-menu" style="min-width: 120px;">
                                                        <a @click="$refs.ShowModal.show(post)" class="dropdown-item dropdownItem" href="javascript:;">
                                                            <i class="far fa-eye"></i> Show
                                                        </a>
                                                        <a @click="$refs.FormModal.edit(post)" class="dropdown-item dropdownItem" href="javascript:;">
                                                            <i class="far fa-edit"></i> Edit
                                                        </a>
                                                        <a @click="$refs.FormModal.destroy(post.id)" class="dropdown-item dropdownItem" href="javascript:;">
                                                            <i class="far fa-trash-alt"></i> Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <PaginationNav v-if="posts.last_page>1" :pageSize="posts.last_page" :currentPage="posts.current_page" :GoToPage="fetchData" :loading="loader" />
                                </div>
                                <div v-else class="card-body">
                                    <beat-loader v-if="loader" :loading="loader" color="#5578eb" class="text-center"></beat-loader>
                                    <p v-else class="card-title-desc" style="text-align: center;"> No Data Yet..</p>
                                </div>
                                
                            </div>
                        </div>
                        <!-- end col -->
                    </div>
                    <!-- end row -->
                </div>
                <!-- container-fluid -->
            </div>
        </layout-default>
    </template>
    <script>
    import LayoutDefault from '../../layouts/App.vue'; 
    import FormModal from '../../Components/Modals/Post/Add.vue';
    import ShowModal from '../../Components/Modals/Post/Show.vue';
    import PaginationNav from '../../Components/Pagination.vue';
    ///////////////////////////////
    export default {
        components: { LayoutDefault, PaginationNav,FormModal,ShowModal },
        data() {
            return { 
                posts: null, 
                loader: false,
                filter:{
                    search:null
                }
            }
        },
       
        created() {
            this.fetchData();
        },
        methods: {
            fetchData(num = 1) {
                this.posts = null;
                this.loader = true;
                let data = { params: { page: num,filter:this.filter } };
                this.$axios.get('posts', data).then(({ data }) => {
                    this.posts = data.success.posts;
                    if(!data.success.posts.data.length&&num!=1){this.fetchData(1)}
                    this.loader = false;
                });
            },
            
        },
    }
</script>