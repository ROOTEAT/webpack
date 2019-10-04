const path = require('path')

module.exports = {
  // ���]�Ҧ��A�i��development�Mproduction
  mode: 'development',
  // �t�m�J�f�ɮ�
  entry: 
		main:'./src/index.js',
  // �t�m��X�ɮ�
  output: {
    // ��X���|
    path: path.resolve(__dirname, './dist'),
    // ��X�ɦW��
    filename: 'build.js'
  },
  // �ҲաA�i�H�ϥΦU��loader�A��pcss�ഫ�A�Ϥ����Y��
  module: {
    rules: [
      {
        test: /\.css$/, // �ǰtcss�ɮ׼Ҳ�
        use: ['style-loader', 'css-loader'] // �ϥι�����loader�B�z
      },
      {
        test: /\.(png|gif|jpe?g|svg)$/, // �ǰt�Ϥ��ɮ�
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]?[hash]',
            // �|��X�����U���o�˪����G
            // path/to/file.png?e43b20c069c4a01867c31e98cbce33c9
          }
        }]
      },
      {
        test: /\.(html)$/, // �ΨӤǰthtml�ɮ׼Ҳ�(html�ݭn�q�L�~���ޤJ�H)�A�i�H�Nhtml���Ҥ��ޤJ���Ϥ��귽�i�楴�]
        use: [{
          loader: 'html-loader',
          options: {
            attrs: ['<tag>:<attribute>'] // <tag>���ޤJ�Ϥ������ҦW�A<attribute>���ޤJ�Ϥ����ݩʦW
          }
        }]
      }
    ]
  },
  // �~���A�Ω�ͦ��ҪO�M�䥦�\��
  plugins: [],
  // �i�t�m���a��webpack�}�o�A�ȥ\��
  devServer: {}
}