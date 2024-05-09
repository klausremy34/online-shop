const fs = require('fs');
const path = require('path');
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );
module.exports = class cart {
   static addProduct(id, productPrice){
    fs.readFile(p,(err,fileContent) =>{
        let cat ={products:[],totalPrice: 0};
        if(err){
            cart =JSON.parse(fileContent);
        }
        let updatedProduct;    
        const existingProduct = cart.products.find( prod => prod.id === id);
            if(existingProduct){
                updatedProduct ={...existingProduct};
                updatedProduct.qty = update.qty +1;
            }else{
                updatedProduct ={id:id,qty:1};
            }
            cart.totalPrice = cart.totalPrice + productPrice;
            cart.products = [...cart.products, updatedProduct];
        }
         
    )};
   }
