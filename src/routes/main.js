const express=require('express');
const router=express.Router();
const {contacto, faqs, home, nosotros, admin }=require('../controllers/mainController');
const adminMiddleware=require('../middlewares/adminMiddleware');

router.get('/', home);
router.get('/nosotros', nosotros);
router.get('/contacto', contacto);
router.get('/preguntas-frecuentes', faqs);
router.get('/admin', adminMiddleware, admin);

module.exports=router;