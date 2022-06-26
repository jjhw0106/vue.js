//실습 1 - todo-footer 컴포넌트 전역 등록

Vue.component('todo-footer',{
    props:['propsdata'],
    template: '<p>this is another global child component</p>'
})
var app = new Vue({
    el: '#app',
    data: {
        message: 'VueJS 실습문제',
        
    },
});

//실습 2 - todo-list 컴포넌트 지역등록
var todoList = {
    template: '<p>This is another local component</p>'
};
new Vue({
    el: '#app',
    components: {'todo-list': todoList }
});