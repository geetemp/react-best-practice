1.BEM

2.styled component

#### webpack 配置

`loader: "style-loader!css-loader?modules&localIdentName=[name]__[local]__[hash:base64:5]"`

配置 cssloader，传入 modules 参数和 localIdentName，其中 `modules`启用/禁用 css 模块，默认禁用。`localIdentName` 配置生成的标志符。这里我们基本按照 BEM 的命名方式来配置。

更多用法参见 webpack 文档 [戳我戳我](http://www.css88.com/doc/webpack/loaders/css-loader/)

#### 使用

`import styles from './index.css';`
`className={styles.game}`
首先引入 css，然后再为组件设置样式时，直接设置`styles.classname`即可。
