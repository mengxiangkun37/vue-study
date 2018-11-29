Vue.component('todo-item', {
    props:['todo'],
    template: '<li>{{todo.text}}</li>'
})
var app = new Vue({
    el: '#app',
    data: {
        rawHtml:'<span>111<span/>',
        message: 'hello word',
        groceryList: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '随便其它什么人吃的东西' }
        ]
    }
})






// var app = new Vue({
//     el: '#app-2',
//     data: {
//         message: '页面加载于 ' + new Date().toLocaleString()
//     }
// })
// var app = new Vue({
//     el: '#app-3',
//     data: {
//         aaa: true
//     }
// })

// var app = new Vue({
//     el: '#app-4',
//     data: {
//         aaa: [
//             { text: 111 },
//             { text: 333 },
//             { text: 12211 }
//         ],
//         message: 'aabb'
//     },
//     methods: {
//         fn: function () {
//             this.message = this.message.split('').reverse().join('');
//         }
//     }
// })