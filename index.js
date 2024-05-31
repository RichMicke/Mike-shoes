


const { createApp, ref } = Vue

createApp({
  setup() {
    const totalProducto = ref(0)
    let Productos = ref([])
    let TotalPagar = ref(0)

      function AgregarCarrito(nombre,precio,id)
    {
      let existe = Productos.value.findIndex(el => el.id==id)
      console.log(existe)
      if(existe >= 0)
      {
        Productos.value[existe].cantidad ++
        Productos.value[existe].precio = precio * Productos.value[existe].cantidad 

      }
      else
      {
        Productos.value.push({nombre,precio,id,"cantidad":1})
      }

      calcularTotal()


      
    }

      function abrirCarrito()

      
    {
      const containerCartProducts = document.querySelector('.container-cart-products')
      containerCartProducts.classList.toggle('hidden-cart')
    }

    function eliminarProducto(id)
    {
      Productos.value = Productos.value.filter(el => el.id != id)
      calcularTotal()

    }

    function calcularTotal()
    {
      TotalPagar.value = 0
      for(let producto of Productos.value)
      {
      TotalPagar.value = TotalPagar.value + parseInt(producto.precio)
      }

      totalProducto.value = Productos.value.length

    }
    
    function botonComprar() {
      alert('¡Gracias por tu compra!');
      Productos.value = [];
      calcularTotal();
    }
    

   
    return {
      totalProducto,
      Productos,
      TotalPagar,
      AgregarCarrito,
      abrirCarrito,
      eliminarProducto,
      botonComprar

    }
  }
}).mount('#app')