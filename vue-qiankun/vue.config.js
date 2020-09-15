module.exports = {
    devServer: {
        port: 8090,
        proxy: {
            "/api": {
                target: "http://localhost:8090",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    // 路径重写，
                    "^/api": "" // 替换target中的请求地址
                }
            }
        }
    }
}