var app = new Vue({
    el:'#app',
    data:{
        html:'<span>111</span>',
        message: 'Hello'
    },
    computed:{
        reversedMessage:function(){
            return this.message.split('').reverse().join('')
        }
    },
    methods:{
        reversedMessage:function(){
            return this.message.split('').reverse().join('')
        }
    }
})
var vm = new Vue({
    el: '#demo',
    data: {
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar'
    },
    watch: {
      firstName: function (val) {
        this.fullName = val + ' ' + this.lastName
      },
      lastName: function (val) {
        this.fullName = this.firstName + ' ' + val
      }
    }
  })