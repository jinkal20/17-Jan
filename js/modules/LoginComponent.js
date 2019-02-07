export default{
    template:`
    <div class="jumbotron roku-jumbotron">
    <h1 class="display-4">Welcome to Flashback!</h1>
    <p class="lead">Before revisiting your favourite movies, tv shows or music from yesteryear, please log in with a valid username and password.</p>
    <hr class="my-4">
    <form>
        <div class="form-row align-items-center">
            <div class="col-sm-3 my-1">
                <label class="sr-only" for="inlineFormInputName">Name</label>
                <input v-model="input.username" type="text" class="form-control" id="inlineFormInputName" placeholder="username" required>
            </div>

            <div class="col-sm-3 my-1">
                <label class="sr-only" for="inlineFormPassword">Name</label>
                <input v-model="input.password" type="password" class="form-control" id="inlineFormPassword" placeholder="password" required>
            </div>

            <div class="col-auto my-1">
                <button v-on:click.prevent="login()" type="submit" class="btn btn-primary">Go!</button>
            </div>
        </div>
    </form>            
</div>
    `,

    data(){
        return{
            input: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        login(){
            console.log("trying to log in");
            //console.log(this.$parent.mockAccount.username);

            if(this.input.username != "" && this.input.password != ""){
                let url = `./admin/admin_login.php`;

                const formData = new FormData();

                formData.append("usename",this.input.username);
                formData.append("password",this.input.password);

                fetch(url,{
                    method: 'POST',
                    body: formData
                })
                    .then(res  => res.json())
                    .then(data =>{
                        if(data =="Login Failed"){
                            console.log("login attempt failed");
                            return;
                        }else{
                            this.$emit("authenticated",true);
                            this.$router.replace({ name: "users"});
                        }
                    })
                    .catch(function(erro){
                        console.log(error);
                    });
            
            }else{
                console.log("username and password cannot be blank");
            }
        }
    }
}