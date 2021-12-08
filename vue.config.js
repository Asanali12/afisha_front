module.exports = {
    devServer: {
        proxy: 'http://ec2-3-17-146-147.us-east-2.compute.amazonaws.com:8080/',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
  }