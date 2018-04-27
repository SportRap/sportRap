const proxy = [
  {
    context: '/api',
    target: 'http://sportrap-app.herokuapp.com/login',
    pathRewrite: {'^/api' : ''}
  }
];
module.exports = proxy;
