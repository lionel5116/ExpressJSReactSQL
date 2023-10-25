const express = require('express');
const router = express.Router();
const product = require('../../models/product');

router.post('/createProduct',
        async (req,res) => {
        
                const {
                    p_id,
                    title,
                    price,
                  }  = req.body;
        
            let existingProduct;
            try {
                existingProduct = await product.findOne({p_id : p_id});
        
            } catch (error) {
                return res.status(500).json({message: 'Issue verifying if product exists'});
            }
           
            if(existingProduct){
                return res.status(500).json({message: 'productRecord exists already..'});
            }
            
        
            const createProduct = new product({
                p_id,
                title,
                price,
            });
        
            
            await createProduct.save().then(() => {
                res.status(201).json({product: createProduct.toObject({getters: true})});
            })
            .catch((error) => {
                return res.status(500).json({message: 'Failed add up ecc product record. please try again: -' + error});
            });
        
            res.status(201);
        
});

router.get('/fetchAllProducts', 
            async (req,res) => {

                let productRecord;
            
                try {
                    productRecord = await product.find();
                    return res.status(200).json({ product: productRecord });
                } catch (error) {
                    return res
                    .status(500)
                    .json({ message: 'No Records returned for your fetch' });
                } 
            
});

module.exports = router;