const homeController =  require('../controler/home-controler')
const booksControler = require('../controler/books-controller')

module.exports = (app)=>{
    app.get('/',homeController.getIndex),
    app.get('/add', booksControler.getAddBook)
    app.post('/add', booksControler.postAddBook)
    app.get('/all', booksControler.getAll)
    app.get('/details/:id', booksControler.getDetails)
    app.get('/delete/:id', booksControler.deleteBook)
}