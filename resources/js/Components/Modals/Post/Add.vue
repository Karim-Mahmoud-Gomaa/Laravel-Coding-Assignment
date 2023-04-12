<template>
    <!--begin::Modal-->  
    <div class="modal fade" id="postModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <form @submit.prevent="form.id ? update() : store()" class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="formModalLabel" >{{ form.id ? 'Edit Post':'Add New Post' }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div> 
                <div class="modal-body row"> 
                    <div class="col-12 mt-3">
                        <AlertErrors :form="form" />
                    </div> 
                    <div class="col-md-12 mt-3">
                        <label><span class='text-danger'>*</span> Title</label>
                        <input v-model="form.title" type="text" autocomplete="off" required
                        class="form-control" :class="{ 'is-invalid': form.errors.has('title') }">
                        <has-error :form="form" field="title"></has-error>
                    </div>  
                    
                    <div class="col-12 mt-3">
                        <label><span class='text-danger'>*</span> Content</label>
                        <textarea v-model="form.content" rows="5" class="form-control" :class="{ 'is-invalid': form.errors.has('content') }"></textarea>
                        <has-error :form="form" field="content"></has-error>
                    </div> 
                    <div class="col-12 mt-3">
                        <div class="card">
                            <div class="card-title align-self-center">
                                <a href="javascript:;" @click="$refs.file1.click()" class="btn btn-info btn-sm m-2 waves-effect waves-light float-sm-end font-size-16"><i class="fas fa-upload"></i> <b>Upload Image</b></a>
                                <input @change="onFileChange($event)" ref="file1" type="file" class="hidden" accept="image/*" multiple>
                            </div>
                            <div class="card-body">
                                <div class="invoice-title row">
                                    <img v-if="image" class="rounded me-2" alt="200x200" width="100%" :src="image" data-holder-rendered="true">
                                    <p v-else class="text-center">No Images Uploaded</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal" >Close</button>
                    <button v-if="form.id" type="submit" class="btn btn-primary" >Edit</button>
                    <button v-else type="submit" class="btn btn-primary" >Save</button>
                </div>
            </form>
        </div>
    </div>
    <!--end::Modal-->
</template>

<script>
import {Form} from 'vform'
import {HasError,AlertErrors} from 'vform/src/components/bootstrap5'
import "vue-select/dist/vue-select.css";


export default {
    components: {HasError,AlertErrors},
    props: ['fetchData'],
    data() {
        return {
            form: new Form({id:null,title:null,content:null,image:null}),
            image:null,
            errors:null,
        };
    }, 
    methods: {
        create(){
            this.form.reset();
            this.image=null;
            this.errors=null;
            $('#postModal').modal('show');
        },
        store(){ 
            this.form.post("posts").then(({data}) => {
                this.fetchData();
                $('#postModal').modal('hide');
            }).catch((error) => {this.errors=error.response.data.errors_bag})
        },  
        edit(form){ 
            this.form.reset();
            this.errors=null;
            this.form.fill(form);
            this.form.image=null;
            if (form.image) {
                this.image='assets/images/posts/'+form.image;
            }
            $('#postModal').modal('show');
        },
        update(){
            this.form._method='put';
            this.form.post("posts/"+this.form.id).then(({data}) => {
                this.fetchData();
                $('#postModal').modal('hide');
            }).catch((error) => {console.log("Error......")})
        },  
        destroy(id) {
            this.$swal.fire({
                title: 'Warning',text: "Are You Sure To Delete This Blog Post ?",
                confirmButtonColor: '#3085d6',cancelButtonColor: '#d33',
                cancelButtonText: "Cancel",confirmButtonText: "Yes ,Delete",
                icon: 'warning',showCancelButton: true,
            }).then((result) => {
                if (result.value) {
                    this.$axios.delete('posts/'+id).then(response => {
                        this.$swal.fire('Done', 'Deleted successfully', 'success');
                        this.fetchData();
                    }).catch(() => {
                        this.$swal.fire({icon: 'error',title: 'Sorry',text: 'An error occurred, please try again',}); 
                    });
                }
            })
        },
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (files.length){
                this.image=URL.createObjectURL(files[0])
                this.form.image=files[0]
            }
        },
    },
}
</script>
