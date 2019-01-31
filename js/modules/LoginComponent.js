export default{
    template:`
        <div id="login">
            <h1>Log In</h1>
            <input type="text" name="username" v-model="input.username" placeholder="username" />
            <input type="password" name="password" v-model="input.password" placeholder="password" />
            <button v-on:click="login()">Login</button>
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
                let url = `./includes/index.php?username=${this.input.username}&&password=${this.input.password}`;
                fetch(url)
                    .then(res  => res.json())
                    .then(data =>{
                        if(dtaa[0] =="false"){
                            console.log("login attempt failed");
                        }else{
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