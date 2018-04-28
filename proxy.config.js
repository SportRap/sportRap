const proxy = [
  {
    context: '/*',
    target: 'http://sportrap-app.herokuapp.com/login',
    pathRewrite: {'^/api' : ''}
  }
];
module.exports = proxy;
