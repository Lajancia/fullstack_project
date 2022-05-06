module.exports = {
  
  configureWebpack: config => {
    
    if (process.env.NODE_ENV === 'production') {
        config.mode = 'production';
                     // Package file size configuration
        config.performance = {
          maxEntrypointSize: 10000000,
          maxAssetSize: 30000000
        }
    }
},
  devServer: {
    disableHostCheck: true,
        port: 8081,
        public: '0.0.0.0:8081',
    proxy: { 
      
      '/api': { 
        target: 'http://localhost:3000/api',
        changeOrigin: true, 
        pathRewrite: { 
          '^/api': ''
        } 
      } 
    } 
  },
 
  
}