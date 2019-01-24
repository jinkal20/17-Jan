(() => {
    const HomePageComponent = { 
        template: "<h2>This is home page</h2>"
    }
    const UsersPageComponent = {
        props: ['id'],
        template: "#userList",

        data: function(){
            return{
                users: []
            }
        },
         
        created: function(){
            console.log('user component');
            this.fetchuserData(this.id);
        },

        methods:{
            fetchuserData(user){
                
                let url = `./includes/index.php?users=${this.id}`;

                fetch(url)
                    .then(res => res.json())
                    .then(data => this.users=data)
                    .catch(function(error){
                        console.error(error);
                    });
            }
        }
        
    }
    const ContactPageComponent = {
        template: "<h2>This is Contact page</h2>"
    }
    const ErrorPageComponent = {
        template: "<h2>This is Error page</h2>"
    }

    const routes =[
        { path: '/', name: 'home', component:HomePageComponent},
        { path: '/contact', name: 'contact', component:ContactPageComponent},
        { path: '/users/:id', name: 'users', component:UsersPageComponent, props: true },
        { path: '/*', name: 'error', component:ErrorPageComponent},
    ]
    const router = new VueRouter({
        routes
    });
    //Vue instance
    const vn = new Vue({
        el: "#app",
        data:{
            testmessage: "sup"
        },
        methods:{
            calledOnParent(){
                console.log("this method is from vue");
            }
        },
        created: function(){
            console.log("this is vue created");
        },
        components:{
            'homepagecomponent' : HomePageComponent,
            'userspagecomponent' : UsersPageComponent,
            'contactpagecomponent' :ContactPageComponent,
            'errorpagecomponent' : ErrorPageComponent
        },
        
        router
    })
})();