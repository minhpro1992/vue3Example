<template>
  <product></product>
</template>

<script>
import { inject, provide, ref } from 'vue';
import Product from './Product.vue'
  // import { Product as ProductType } from  "../types/Product"
export default {
  components: {
    Product
  },
  setup() {
      const products = ref([
      {
        id: 1,
        title: 'A Carpet',
        description: 'A nice looking, maybe a little bit used carpet.',
        price: 15.99
      },
      {
        id: 2,
        title: 'A Book',
        description: 'You can read it. Maybe you should read it.',
        price: 12.99
      }
    ]);

    function addProduct (productData) {
      const newProduct = {
        id: +products.value.length + 1,
        title: productData.title,
        description: productData.description,
        price: productData.price
      };
      products.value.push(newProduct);
    console.log('add product: ', products);
    
    }

    provide('products', products);
    provide('addProduct', addProduct);
  },
};
</script>

<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}
</style>