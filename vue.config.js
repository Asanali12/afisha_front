module.exports = {
    devServer: {
        proxy: 'http://192.168.1.132:8080',
        headers: {
            'Access-Control-Allow-Origin': "*" 
        }
    },
    publicPath: "/"
  }