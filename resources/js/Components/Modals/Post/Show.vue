<template>
    <!--begin::Modal-->  
    <div class="modal fade" id="showPostModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="formModalLabel" >Blog Post Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div> 
                <div class="modal-body pb-0"> 
                    <div class="col-12">
                        <div class="card" v-if="post">
                            <img class="card-img-top img-fluid" :src="'assets/images/posts/'+post.image" alt="Card image cap">
                            <div class="card-body">
                                <h4 class="card-title ">{{post.title}}</h4>
                                <p class="card-text">{{post.content}}</p>
                                <p class="card-text">
                                    <hr>
                                    <small class="text-muted float-start">
                                        Created At : ({{moment(post.created_at).format("DD/MM/YYYY")}}) 
                                    </small>
                                    <small class="text-muted float-end">By / <b>{{post.user.name}}</b></small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal" >Close</button>
                </div>
            </div>
        </div>
    </div>
    <!--end::Modal-->
</template>

<script>
export default {
    data() {
        return {
            post:null
        };
    }, 
    methods: {
        show(post){
            this.post=post;
            console.log(post);
            $('#showPostModal').modal('show');
        },
    },
}
</script>
