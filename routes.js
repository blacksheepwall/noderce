var blog = require('./routes/blog');
var admin = require('./routes/admin');
module.exports = function(app) {
  app.get('/', blog.index);
  app.get('/post/:id', blog.post);
  app.get(/^\/p\/(\d+)$/, blog.index);
  app.get('/feed', blog.feed);
  app.get('/photo', blog.photo);
  app.get('/archives', blog.archives);
  app.get('/page/:slug', blog.page);
  app.post('/comment', blog.comment);
  app.get('/tag/:tag', blog.tag);
  app.get('/admin', admin.auth_user, admin.index);
  app.get('/admin/install', admin.install);
  app.post('/admin/install', admin.install);
  app.get('/admin/login', admin.login);
  app.post('/admin/login', admin.login);
  app.get('/admin/logout', admin.auth_user, admin.logout);
  app.get('/admin/post', admin.auth_user, admin.postIndex);
  app.get('/admin/post/write', admin.auth_user, admin.postWrite);
  app.post('/admin/post/write', admin.auth_user, admin.postWrite);
  app.get('/admin/post/edit/:id', admin.auth_user, admin.postEdit);
  app.post('/admin/post/edit/:id', admin.auth_user, admin.postEdit);
  app.get('/admin/post/delete/:id', admin.auth_user, admin.postDelete);
  app.get('/admin/page', admin.auth_user, admin.pageIndex);
  app.get('/admin/page/write', admin.auth_user, admin.pageWrite);
  app.post('/admin/page/write', admin.auth_user, admin.pageWrite);
  app.get('/admin/page/edit/:id', admin.auth_user, admin.pageEdit);
  app.post('/admin/page/edit/:id', admin.auth_user, admin.pageEdit);
  app.get('/admin/page/delete/:id', admin.auth_user, admin.pageDelete);
  app.get('/admin/comment', admin.auth_user, admin.commentIndex);
  app.get('/admin/comment/delete/:id', admin.auth_user, admin.commentDelete);
  app.get('/admin/verifyAkismet', admin.auth_user, admin.verifyAkismet);
  app.get('/admin/submitSpam/:id', admin.auth_user, admin.submitSpam);
  app.get('/admin/photo', admin.auth_user, admin.photoIndex);
  app.get('/admin/photo/edit/:photo_id', admin.auth_user, admin.photoEdit);
  app.post('/admin/photo/edit/:photo_id', admin.auth_user, admin.photoEdit);
  app.get('/admin/photo/write', admin.auth_user, admin.photoWrite);
  app.post('/admin/photo/write', admin.auth_user, admin.photoWrite);
  app.get('/admin/photo/delete/:id', admin.auth_user, admin.photoDelete);
  app.get('*', blog.pageNotFound);
};