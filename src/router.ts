import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { createCategories } from './app/components/categories/createCategory';
import { listCategories } from './app/components/categories/listCategory';
import { changeOrder } from './app/components/order/changeOrder';
import { createOrder } from './app/components/order/createOrder';
import { deleteOrder } from './app/components/order/deleteOrder';
import { listOrder } from './app/components/order/listOrder';
import { createProducts } from './app/components/products/createProduct';
import { getProductsByCategory } from './app/components/categories/getProductsByCategory';
import { listProducts } from './app/components/products/listProducts';

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

//lista produtos
router.get('/products', listProducts);

//cria produtos
router.post('/products',upload.single('image'), createProducts);

//obter produtos por categoria
router.get('/categories/:categoryId/products', getProductsByCategory);

//lista ordens
router.get('/orders', listOrder);

//cria ordens
router.get('/orders', createOrder);

//Muda o status da orden
router.patch('/orders/orderId', changeOrder);

//Deleta ou cancela a ordem
router.delete('/orders/orderId', deleteOrder);