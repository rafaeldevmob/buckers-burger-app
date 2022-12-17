import { Router } from 'express';

export const router = Router();

//lista as categorias
router.get('/categories', (req,res) => {
  res.send('OK');
});

//cria categoria
router.post('/categories', (req,res) => {
  res.send('OK');
});

//lista produtos
router.get('/products', (req,res) => {
  res.send('OK');
});

//cria produtos
router.post('/products', (req,res) => {
  res.send('OK');
});

//obter produtos por categoria
router.get('/categories/:categoryId/products', (req,res) => {
  res.send('OK');
});

//lista ordens
router.get('/orders', (req,res) => {
  res.send('OK');
});

//cria ordens
router.get('/orders', (req,res) => {
  res.send('OK');
});

//Muda o status da orden
router.patch('/orders/orderId', (req,res) => {
  res.send('OK');
});

//Deleta ou cancela a ordem
router.delete('/orders/orderId', (req,res) => {
  res.send('OK');
});