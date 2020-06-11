Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
    <div class="product">
      <div class="product-image">
        <img v-bind:src="image" alt="alt" />
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock > 10">In Stock</p>
        <p v-else>Out of Stock</p>
        <p v-if="onSale">OnSale!</p>
        <p>Shipping: {{ shipping }}</p>

        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div
          v-for="(variant, index) in variants"
          :key="variant.variantId"
          class="color-box"
          :style="{ backgroundColor: variant.variantColor}"
          @mouseover="updateProduct(index)"
        ></div>

        <button
          @click="addToCart"
          :disabled="!inStock"
          :class="{disabledButton: !inStock}"
        >
          Add to Cart
        </button>
        <button
          v-if="cart > 0"
          @click="removeFromCart"
          style="background-color: red;"
        >
          Remove from Cart
        </button>

        <div class="cart">
          <p>Cart({{ cart }})</p>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      brand: 'Vue Mastery',
      product: 'Socks',
      selectedVariant: 0,
      onSale: true,
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      variants: [
        {
          variantId: 2234,
          variantColor: 'green',
          variantImage: './assets/vmSocks-green-onWhite.jpg',
          variantQuantity: 3,
        },
        {
          variantId: 2235,
          variantColor: 'blue',
          variantImage: './assets/vmSocks-blue-onWhite.jpg',
          variantQuantity: 0,
        },
      ],
      cart: 0,
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    shipping() {
      if (this.premium) {
        return "Free"
      }
      return "2.99"
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    removeFromCart() {
      this.cart -= 1
    },
    updateProduct(index) {
      this.selectedVariant = index
    },
  },
})

var app = new Vue({
  el: '#app',
  data: {
    premium: true
  }
})
