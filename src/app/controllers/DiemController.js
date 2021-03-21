const myModel = require("../../models/MyModel.js");
class DiemController {
    createget(req, res) {
        res.render("create", { title: "create", layout: "./layouts/main" });
    }

    createpost(req, res) {
        var mssv = req.body.mssv;
        var mmh = req.body.mmh;
        var dqt = req.body.dqt;
        myModel.create(mssv, mmh, dqt, (data) => {
            console.log(data);
        });
        res.render("create", { title: "create", layout: "./layouts/main" });
    }

    showdiem(req, res) {
        myModel.showdiem((data) => {
            res.render("showdiem", { user: data });
        });
    }
}

module.exports = new DiemController();
