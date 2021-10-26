module.exports = api => {
  api.cache(false)

  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@linaria',
      '@xstyled/babel-preset-emotion-css-prop'
    ],
    plugins: [
      [
        'styled-components',
        {
          ssr: true,
          displayName: true,
          pure: true,
          transpileTemplateLiterals: true,
          'topLevelImportPaths': [
            '@xstyled/styled-components'
          ]
        }
      ]
    ]
  }
}
