(() => {
    const UserComponent = {
        props: ['name' ,'role'],
        template: "#usertemplate"
    }

    const vn = new Vue({
        el: "#app",
        data:{
            testmessage: "sup"
        },
        methods:{

        },
        components:{
            'activeusers' : UserComponent
        }
    })
})();