var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    image: "./assets/vmSocks-green-onWhite.jpg",
    inventory: 9,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./assets/vmSocks-green-onWhite.jpg",
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./assets/vmSocks-blue-onWhite.jpg",
      },
    ],
    cart: 0,
  },
  computed: {
    inStock() {
      return this.inventory > 0;
    },
  },
  methods: {
    addToCart() {
      this.cart += 1;
      this.inventory -= 1;
    },
    removeFromCart() {
      this.cart -= 1;
      this.inventory += 1;
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    },
  },
});
