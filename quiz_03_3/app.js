// sibling-component 등록
// options : template, props

Vue.component('child-component',{
    props:['propsdata'],
    template:'<p>{{ propsdata }}</p>'
});

Vue.component('sibling-component',{
    props:['propsdata'],
    template:'<p>{{ propsdata }}</p>'
})

var app = new Vue({
    el:'#app',
    data:{
        message: 'Hello child!',
        anotherMessage: 'Hello Sibling',
        // data 속성 추가, sibling-component에 props로 전달
    }
})