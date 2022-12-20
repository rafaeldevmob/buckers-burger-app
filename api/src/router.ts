import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { createCategories } from './app/components/categories/createCategory';
import { listCategories } from './app/components/categories/listCategory';
import { changeOrderStatus } from './app/components/order/changeOrderStatus';
import { createOrder } from './app/components/order/createOrder';
import { deleteOrder } from './app/components/order/deleteOrder';
import { listOrder } from './app/components/order/listOrder';
import { createProducts } from './app/components/products/createProduct';
import { getProductsByCategory } from './app/components/categories/getProductsByCategory';
import { listProducts } from './app/components/products/listProducts';
import { deleteCategory } from './app/components/categories/deleteCategory';
import { deleteProduct } from './app/components/products/deleteProduct';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback){
      callback(null, path.resolve(__dirname, '..','uploads'));
    },
    filename(req,file,callback){
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

//lista as categorias
router.get('/categories', listCategories);

//cria categoria
router.post('/categories', createCategories);

//Deletar categoria
router.delete('/categories/:categoryId', deleteCategory);

//----------------------------------------------------------

//lista produtos
router.get('/products', listProducts);

//cria produtos
router.post('/products',upload.single('image'), createProducts);

//obter produtos por categoria
router.get('/categories/:categoryId/products', getProductsByCategory);

//Deletar produtos
router.delete('/products/:productId', deleteProduct);

//----------------------------------

//lista ordens
router.get('/orders', listOrder);

//cria ordens
router.post('/orders', createOrder);

//Muda o status da orden
router.patch('/orders/:orderId', changeOrderStatus);

//Deleta ou cancela a ordem
router.delete('/orders/:orderId', deleteOrder);