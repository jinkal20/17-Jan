import UserComponent from './UserComponent.js';

export default{
    template:`
        <div id="row">
            <div class="col-sm-12">
                <h1>You are on users page</h1>
            </div>

            <user v-for="(user,index) in userlist" : liveuser="user" :key="index"></user>
        </div>
    `,
    
    data(){
        return{
            message:"ywho is using Roku",

            userList:[]

        }
    },
    methods: {
        fetchAllUsers(){
            let url = `./admin/scripts/users.php?allUsers=true`;
            fetch(url)
                .then(res=> res.json())
                .then(data => {this.userList=data})
            .catch(function(error){
                console.error(error);
            });
            
        }
    },

    components:{
        user: UserComponent
    }
}