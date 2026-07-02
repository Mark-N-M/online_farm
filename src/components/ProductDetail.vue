<script setup>
import {ref, computed} from 'vue'
import { useProductsStore } from '../stores/products'
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'



const router = useRouter()
const productsStore = useProductsStore()
const product = computed(() => productsStore.selectedProduct)

//cart
const cartStore = useCartStore()
const quantity = ref(1)

function buy(product){
    product.quantity = quantity.value
        cartStore.updateCart(product)
}
</script>

<template>
    <v-container v-if="product">
    <v-row>
        <v-col md="2">
            <v-btn icon="mdi-arrow-left" color="primary" to="/products" class="ma-12"></v-btn>
        </v-col>
        <v-col md="10">
            <div class="text-display-medium mb-12 mt-12 text-center">
            Product Details
            </div>
        </v-col>
    </v-row>
    <v-row>
            <v-col md="6">
            <v-card>
                <v-img class="align-end text-white" height="620" :src="product.image || '/product1.jpg'"  ></v-img>
            </v-card>
            </v-col>
            <v-col md="6">
                <v-card height="620" color="primary">
                    <v-card-item>
                        <v-card-title class="mb-4">{{ product.name }}</v-card-title>
                        <v-chip class="mb-4"> {{ product.category }} </v-chip>
                            <v-row>
                                <v-col md="4">
                                    <v-rating :model-value="product.rating || 0" :size="24" readonly ></v-rating>
                                </v-col>
                                <v-col md="6">
                                    <v-btn color="lime-lighten-2" variant="outlined" density="compact" readonly > In Stock</v-btn>
                                </v-col>
                            </v-row>
                        <v-card-text style="height:300px; overflow-y:auto ;">{{ product.long_description || 'No description available.' }} </v-card-text>
                        <v-card-subtitle>Ksh Price</v-card-subtitle>
                        <v-card-text> 
                            <v-row>                    
                                <v-col md="4">Quantity</v-col>
                                <v-col md="6">
                                    <v-number-input v-model="quantity" control-variant="split" density="compact" :min="1" :max="10" > </v-number-input>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card-item>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-card-text>Total: {{ (product.price || 0) * quantity }}</v-card-text>
                        <v-btn elevation="4" variant="elevated" @click="buy(product)" > Add to Cart </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
   </v-container>
   <v-container v-else>
     <v-row>
       <v-col>
         <div class="text-display-medium mt-12 text-center">No product selected.</div>
         <div class="text-center mt-4">
           <router-link to="/products">Back to Products</router-link>
         </div>
       </v-col>
     </v-row>
   </v-container>
</template>