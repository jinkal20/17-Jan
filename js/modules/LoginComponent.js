export default{
    template:`
        <div id="login">
            <h1>Login In</h1>
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
            console.log(this.$parent.mockAccount.username);

            if(this.input.username != "" && this.input.password != ""){
                //do login
            }else{
                console.log("username and password cannot be blank");
            }
        }
    }
}