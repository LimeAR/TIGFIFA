const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'packed.js',
    path: path.resolve(__dirname, 'docs'),
  },
  optimization: {
    minimize: false
  },
  devServer: {
    // host: 'my-project.dev',
    // https: {
    //     key: fs.readFileSync('./my-project.dev-key.pem'),
    //     cert: fs.readFileSync('./my-project.dev.pem'),
    //     ca: fs.readFileSync('C:/Users/limex/AppData/Local/mkcert/rootCA.pem')
    // },
    static: {
      directory: path.join(__dirname, 'docs'),
    },
    client: {
      overlay: false
    },
    compress: true,
    port: 9000,
    
  },
  
};