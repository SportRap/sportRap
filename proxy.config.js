const proxy = [
  {
    context: '/*',
    target: 'http://sportrap-app.herokuapp.com/login',
    pathRewrite: {'^/*' : ''}
  }
];
module.exports = proxy;
