class NewsController{

    // GET  /news
    new(req,res){
        res.render('news');

    }
    show(req,res){
        res.send('new detail');

    }
    index(req,res){
        res.render('home');
}
search(req,res){
    res.render('search');
}

}   
module.exports = new NewsController ;