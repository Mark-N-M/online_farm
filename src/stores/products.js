import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products',  {
   state: () => {
        const products= {
            0:{
                id: 1,
                name: "Tomato",
                category: "Fruit",            //TO DO ADD MORE PRODUCTS 10 to 9 OBJECTS
                price: 200,
                availability: true,
                image: 'tomato.jpg'
            }
        }
       
        return{
            products
        }
   },
   actions:{
       
   },
   persist: true,
})