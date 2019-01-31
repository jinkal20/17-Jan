//import
import LoginComponent from '../js/modules/LoginComponent.js';
const routes =[
    { path: '/', redirect:{name: "login"}},
    { path: '/login', name: 'login', component:LoginComponent},
    
]
const router = new VueRouter({
    routes
});
//Vue instance
const vn = new Vue({
    data:{
        testmessage: "sup",
        authenticated: false,
        mockAccount: {
            username: "Jinkal",
            password: "password"
        }
    },
    methods:{
        calledOnParent(){
            console.log("this method is from vue");
        }
    },
    created: function(){
        console.log("this is vue created");
    },
    
    router : router
}).$mount("#app");

router.beforeEach((to, from, next)=>{
    console.log("roter guard fired");
    if(VRFrameData.authenticated == false){
        next("/login");
    }
    else{
        next();
    }
});