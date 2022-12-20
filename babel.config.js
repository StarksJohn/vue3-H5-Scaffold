module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: name => `${name}/style/less`
      },
      'vant',
    ],
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '@', // `@` 默认
        rootPathSuffix: 'src'
      }
    ]
  ]
}
