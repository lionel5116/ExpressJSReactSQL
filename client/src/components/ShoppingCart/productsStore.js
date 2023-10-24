const productsArray = [
    {
        id:"1",
        title:"Coffee",
        price:4.99
    },
    {
        id:"2",
        title:"Sunglasses",
        price:9.99
    },
    {
        id:"3",
        title:"Camera",
        price:39.99
    },

]

function getProductsData(id) {
   let productData = productsArray.find(product => product.id === id)
   
   if (productData == undefined) {
      console.log("Product data does not exist for id " + id)
      return undefined
   }
   
   return productData;
}

export {productsArray,getProductsData};