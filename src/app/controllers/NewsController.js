class NewsController {
    // GET  /news
    getNew(req, res) {
        res.render("news", { title: "new page", layout: "./layouts/main" });
    }
    getShow(req, res) {
        res.send("new detail");
    }
    getIndex(req, res) {
        res.render("home", { title: "Home page", layout: "./layouts/main" });
    }
    getSearch(req, res) {
        res.render("search", { title: "search page", layout: "./layouts/main" });
    }
}
<<<<<<< HEAD
} 
module.exports = new NewsController();
=======
module.exports = new NewsController();
>>>>>>> main
