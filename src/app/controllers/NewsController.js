class NewsController {
    // GET  /news
    new(req, res) {
        res.render("news", { title: "new page", layout: "./layouts/main" });
    }
    show(req, res) {
        res.send("new detail");
    }
    index(req, res) {
        res.render("home", { title: "Home page", layout: "./layouts/main" });
    }
    search(req, res) {
        res.render("search", { title: "search page", layout: "./layouts/main" });
    }
}
module.exports = new NewsController();
