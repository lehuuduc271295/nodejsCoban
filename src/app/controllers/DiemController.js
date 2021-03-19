const myModel = require("../../models/MyModel");
class DiemController {
  getCreate(req, res) {
    var userID = req.session.userID;
    var user = req.session.user;
    if (userID !== null) {
      res.redirect("/login");
    } else res.render("./diem/create", { title: "create", layout: "./layouts/main" });
  }

  postCreate(req, res) {
    var mssv = req.body.mssv;
    var mmh = req.body.mmh;
    var dqt = req.body.dqt;
    var dt = req.body.dt;

    myModel.inputDiem(mssv, mmh, dqt, dt, (data) => {
      console.log(data);
    });
    res.render("./diem/create", { title: "create", layout: "./layouts/main" });
  }

  fetchDiem(req, res) {
    myModel.outputDiem((data) => {
      res.render("./diem/showdiem", { title: "show", layout: "./layouts/main", user: data });
    });
  }
  getSearch(req, res) {
    res.render("./diem/searchdiem", { title: "search", layout: "./layouts/main" });
  }
  postSearch(req, res) {
    var mssv = req.body.timkiem;
    myModel.searchDiem(mssv, (data) => {
      res.render("./diem/searchdiempost", { layout: "./layouts/site", user: data });
    });
  }
}

module.exports = new DiemController();
