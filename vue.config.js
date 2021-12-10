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
  outputDir: '../front_end/public_html', 
}