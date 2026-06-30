import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products',  {
   state: () => {
        const products= {
            0:{
                id: 1,
                name: "Tomato",
                category: "Fruit",           
                price: 100,
                availability: true,
                image: 'product9.jpg'
            },

             1:{
                id: 2,
                name: "Tangerine",
                category: "Fruit",           
                price: 30,
                availability: false,
                image: 'product2.jpg'
            },

             2:{
                id: 3,
                name: "Garlic",
                category: "Vegetable",           
                price: 200,
                availability: true,
                image: 'garlichome.jpg'
            },

             3:{
                id: 4,
                name: "Banana",
                category: "Fruit",           
                price: 210,
                availability: false,
                image: 'product7.jpg'
            },
             4:{
                id: 5,
                name: "Eggs",
                category: "Animal Produce",           
                price: 175,
                availability: false,
                image: 'product3.jpg'
            },

             5:{
                id: 6,
                name: "Kiwi",
                category: "Fruit",           
                price: 250,
                availability: false,
                image: 'product13.jpg'
            },

             6:{
                id: 7,
                name: "Milk",
                category: "Animal Produce",           
                price: 60,
                availability: true,
                image: 'product11.jpg'
            },

             7:{
                id: 8,
                name: "Blueberries",
                category: "Fruit",           
                price: 165,
                availability: true,
                image: 'product5.jpg'
            },

             8:{
                id: 9,
                name: "Dragonfruit",
                category: "Fruit",           
                price: 350,
                availability: true,
                image: 'product4.jpg'
            },

             9:{
                id: 10,
                name: "Ginger",
                category: "Vegetable",           
                price: 50,
                availability: false,
                image: 'product14.jpg'
            },

            10:{
                id: 10,
                name: "Pineapple",
                category: "Fruit",           
                price: 50,
                availability: false,
                image: 'product10.jpg'
            },

            11:{
                id: 10,
                name: "Avocado",
                category: "Fruit",           
                price: 50,
                availability: false,
                image: 'product1.jpg'
            },

            13:{
                id: 10,
                name: "Brocolli",
                category: "Vegetable",           
                price: 50,
                availability: false,
                image: 'product15.jpg'
            },

             14:{
                id: 10,
                name: "Bellpeppers",
                category: "Vegetable",           
                price: 50,
                availability: false,
                image: 'product6.jpg'
            },

            
            
            
        }
        const selectedProduct = ref(null)
       
        return{
            products, selectedProduct
        }
   },
   actions:{
   updateSelectedProduct(payload){
    this.selectedProduct = payload
   }    
   },
   persist: true,
})