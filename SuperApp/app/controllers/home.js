
const myHome = (req, res) => {
  res.render('index', { title: "Express & NodeJs"});
}

module.exports = {
  myHome
}