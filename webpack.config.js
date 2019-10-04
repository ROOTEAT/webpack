const path = require('path')

module.exports = {
  // 打包模式，可選development和production
  mode: 'development',
  // 配置入口檔案
  entry: 
		main:'./src/index.js',
  // 配置輸出檔案
  output: {
    // 輸出路徑
    path: path.resolve(__dirname, './dist'),
    // 輸出檔名稱
    filename: 'build.js'
  },
  // 模組，可以使用各種loader，比如css轉換，圖片壓縮等
  module: {
    rules: [
      {
        test: /\.css$/, // 匹配css檔案模組
        use: ['style-loader', 'css-loader'] // 使用對應的loader處理
      },
      {
        test: /\.(png|gif|jpe?g|svg)$/, // 匹配圖片檔案
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]?[hash]',
            // 會輸出類似下面這樣的結果
            // path/to/file.png?e43b20c069c4a01867c31e98cbce33c9
          }
        }]
      },
      {
        test: /\.(html)$/, // 用來匹配html檔案模組(html需要通過外掛引入？)，可以將html標籤中引入的圖片資源進行打包
        use: [{
          loader: 'html-loader',
          options: {
            attrs: ['<tag>:<attribute>'] // <tag>為引入圖片的標籤名，<attribute>為引入圖片的屬性名
          }
        }]
      }
    ]
  },
  // 外掛，用於生成模板和其它功能
  plugins: [],
  // 可配置本地的webpack開發服務功能
  devServer: {}
}