(() => {
    const UserComponent = {
        props: ['name' ,'role'],
        template: "#usertemplate",
        created: function(){
            console.log("this is created");
        },

        methods:{
            logFromChild(){
                console.log("logged from component");
            }, 
            passEvent(){
                this.$emit('shutup');
            }
        }
    };

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
            'activeusers' : UserComponent
        }
    })
})();