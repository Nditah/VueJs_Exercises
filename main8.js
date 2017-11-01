Vue.component('task-list', {
    
    template: `
                <div>
                     <task v-for="task in tasks"> <b> {{ task.proj }} </b>:  {{ task.description }} </task>
                </div>
            `,


    data(){
        return {
            tasks: [
                { proj: 'Dart', description: 'Do a Rich Internet Application', complete: false },
                { proj: 'Go', description: 'Publish a desktop app', complete: true },
                { proj: 'Flutters', description: 'Do a mobile App and Playstore', complete: false },
                { proj: 'Angualr', description: 'Learn Ruby-on-Rails', complete: true },
                { proj: 'React', description: 'Install Commence React JS', complete: false },
                { proj: 'Vue', description: 'Study Basics of Vue js', complete: true }
            ]
        };
    }

});


Vue.component('task', {
    template: '<li> <slot></slot> </li>'
});



new Vue({
    el: '#root'
});