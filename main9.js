Vue.component('message', {

    props: [ "title", "body" ],

    template: `
            <article class="message" v-show="isVisible" >
                <div class="message-header">
                    <p>{{ title }}</p>
                    <button class="delete" aria-label="delete" @click="hideModal" ></button>
                </div>
                <div class="message-body">
                    {{ body }}
                </div>
            </article>
            `,
    methods:{
        hideModal(){
            this.isVisible = false ;
        }
    },

    data(){
        return {
           isVisible: true
        };
    }

});


Vue.component('task', {
    template: '<li> <slot></slot> </li>'
});



new Vue({
    el: '#root'
});