const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '算法导论',
                data: '2006-9',
                price: 85.30,
                count: 1
            },
            {
                id: 2,
                name: '算法导论',
                data: '2006-9',
                price: 85.10,
                count: 1
            },
            {
                id: 3,
                name: '算法导论',
                data: '2006-9',
                price: 85.50,
                count: 1
            },
            {
                id: 4,
                name: '算法导论',
                data: '2006-9',
                price: 85.60,
                count: 1
            }
        ]
    },
    filters:{
        showPrice(price){
            return "￥" + price.toFixed(2);
        }
    },
    methods:{
        increment(index){
            this.books[index].count++;
        },
        decrement(index){
            this.books[index].count--;
        },
        removeBook(index){
            this.books.splice(index, 1);
        }
    },
    computed:{
        totalPrice(){
            let total = 0;
            for(let  i = 0; i < this.books.length; ++i){
                total += this.books[i].count * this.books[i].price;
            }
            return total;
        }
    }
})