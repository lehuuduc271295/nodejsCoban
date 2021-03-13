const express=require('express');
const router=express.Router();
const newsController = require('../app/controllers/NewsController');



router.use('/new/:slug',newsController.show);
router.use('/new',newsController.new);
router.use('/search/:slug',newsController.show);
router.use('/search',newsController.search);
router.use('/:slug',newsController.show);
router.use('/',newsController.index);





module.exports = router;