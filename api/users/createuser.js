// creating a new user via normal way
Router.post('/new', urlencodedParser, (req, res) => {
    // get request body
    var body = req.body;
    // create a new instance of Post model,
    // and pass in properties obtained from request body.
    // A instance of a model is a document.
    var post = new Post({
        username: body.username,
        password: body.password,
        wechatId: body.wechatId,
        wechatAccessToken: body.wechatAccessToken,
        wechatRefreshToken: body.wechatRefreshToken,
        email: body.email,
        // 0: unauthorized
        // 1: limited
        // 2: authorized
        category: 0
    });
    // save the document to database
    // by calling save() on it
    post.save(err => {
        if (err) throw err;
        // TODO: redirect to the newly-created post
        res.redirect('/');
    });
});