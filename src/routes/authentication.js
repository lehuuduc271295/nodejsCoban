const authenticationController=require('../app/controllers/AuthenticationController');
const newsController=require('../app/controllers/NewsController');
const express=require('express');
const router=express.Router();



router.use('/login/:slug',newsController.getShow);
router.use('/login',authenticationController.getLogin);
router.use('/postlogin/:slug',newsController.getShow);
router.use('/postlogin',authenticationController.postLogin);
router.use('/signup/:slug',newsController.getShow);
router.use('/signup',authenticationController.getSignup);
router.use('/postsignup/:slug',newsController.getShow);
router.use('/postsignup',authenticationController.postSignup);
router.use('/:slug',newsController.getShow);
router.use('/',authenticationController.getHome);



module.exports=router;

