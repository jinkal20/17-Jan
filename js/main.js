(() => {
    const HomePageComponent = { 
        template: "<h2>This is home page</h2>"
    }
    const UsersPageComponent = {
        template: "<h2>This is users page</h2>"
    }
    const ContactPageComponent = {
        template: "<h2>This is contact page</h2>"
    }

    const routes =[
        { path: '/', name: 'home', component:HomePageComponent},
        { path: '/contact', name: 'contact', component:ContactPageComponent},
        { path: '/users', name: 'users', component:UsersPageComponent},
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
            'contactpagecomponent' :ContactPageComponent
        },
        
        router
    })
})();