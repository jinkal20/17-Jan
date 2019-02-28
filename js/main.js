//import
import LoginComponent from '../js/modules/LoginComponent.js';
import UsersComponent from '../js/modules/UsersComponent.js';
import UserHomeComponent from '../js/modules/UserHomeComponent.js';
const routes =[
    { path: '/', redirect:{name: "login"}},
    { path: '/login', name: 'login', component:LoginComponent},
    { path: '/users', name: 'users', component:UsersComponent},
    { path: '/usercomponent', name: 'home', component:UserHomeComponent}
    
]
const router = new VueRouter({
    routes
});
//Vue instance
const vm = new Vue({
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
        },
        setAuthenticated(status){
            this.authenticated = status;
        },
        logout(){
            this.$router.push({ path: "/login"});
            this.authenticated = false;
        }
    },
    created: function(){
        console.log("this is vue created");
    },
    
    router : router
}).$mount("#app");

router.beforeEach((to, from, next)=>{
    console.log("router guard fired");
    if(vm.authenticated == false){
        next("/login");
    }
    else{
        next();
    }
});