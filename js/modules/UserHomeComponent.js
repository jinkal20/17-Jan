import { RSA_NO_PADDING } from "constants";

export default{
    props:['curentuser'],

    template:`
    <div class="container">
        <div class="row>
            <div class="col-sm-12">
                <h1> You are finaaly on the user"s home page !</h1>
            </div>
        </div>
    </div>
    `,
    data(){
        return{
            activeMediaType: "video",
            //push first result and push it into active media reference
            currentMediaDetails: {},

            mediaTypes:[
                { iconclass: "fas fa-headphone" , description:"audio"},
                { iconclass: "fas fa-film" , description:"video"},
                { iconclass: "fas fa-tv" , description:"television"}
            ],

            retrivedMedia: []
        }
    },

    created: function(){
        this.loadMedia(null,"video");
    },

    methods:{
        loadMedia(filter, mediaTypes){
            //se the active media type
            if(this.activeMediaType !== mediaType && mediaType !== null){
                this.activeMediaType = mediaType;
            }

            let url=(filter == null) ? `./admin/scripts/index.php?media=${this.activeMediaType}`: `./admin/scripts/index.php?media=${this.activeMediaType}
            $$filter=${filter}`;

            fetch(url)
                .then(res => res.json())
                .then(data=>{
                    this.retrivedMedia = data;

                    this.currentMediaDetails = data[0];
                })
            .catch(function(error){
                console.log(error);
            })
        }
    }
}