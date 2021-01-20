  <!-- 

  React入门：
  1.react 和 react脚手架以及TypeScript。当然你也可以不选择使用TypeScript开发，
  那么也就没必要学习TypeScript。
  2.我们先通过react脚手架快速创建一个react项目。react脚手架官方链接：
  https://www.html.cn/create-react-app/docs/getting-started/
  or
  https://www.html.cn/create-react-app/docs/adding-typescript/

  在上述两个链接我们可以创建不带typescript和带typescript的react项目。

  npx create-react-app my-app
  or
  npx create-react-app my-app --typescript
  在上述最后一个虽然创建的是带typescript的项目，
  但是我们的node react react-dom jest等也就必须使用
  带typescript的库，所以与此同时我们还需要安装如下几个东西。
  npm install --save typescript @types/node @types/react @types/react-dom @types/jest

  我们使用第三方UI组件库如果也想使用typescript开发，那么也必须下载带typescript的，
  我们使用Ant UI组件，在npm i antd --save的时候，它自带了typescript。
  据说Vue3也是自带了typescript。

  OK,假设我们下载的是带typescript的react项目，在我们安装了Ant UI组件和
  typescript @types/node @types/react @types/react-dom @types/jest，
  如果我们使用typescript则会生成一个typescript配置文件(tsconfig.json)
  和react项目环境声明文件(react-app-env.d.ts声明文件)。
  在react项目中tsconfig文件：TypeScript配置文件。
  关于该配置文件的官方文档的链接地址如下：
  link: https://www.tslang.cn/docs/handbook/tsconfig-json.html

  如果我们需要把webpack配置文件down下来，那么我们npm run jest即可。
  当首次执行npm run jest我们需要git add . && git commit -m''提交文件，
  然后再去npm run jest就可以down下来了。

  上述我们讲述了react项目中的tsconfig.json以及react-app-env.d.ts声明文件，
  但是还有setupTests.ts文件没有说，在说setupTests.ts文件之前我们先说一下
  package.json文件中的"jest"字段。
  在react项目src目录下的setupTest.ts文件的作用：
  该文件主要是在执行npm run test时对package.json中的jest字段的配置
  测试插件的入口文件。

  package.json 中jest字段说明：
  官方链接: https://jestjs.io/docs/zh-Hans/getting-started
  不过在react脚手架构建的项目中大可不必关心这，下面的jest
  字段里的东西主要是对npm run test，也就是script文件夹里的
  test.js做框架测试的配置项
  "jest": {
  "roots": [ // 在其中搜索文件的目录的路径列表
    "<rootDir>/src"
    /*
    注意：默认情况下，roots它只有一个条目，<rootDir>但是在某些情况下，
    您可能想在一个项目中具有多个根roots: ["<rootDir>/src/", "<rootDir>/tests/"]。
    */
  ],
  "collectCoverageFrom": [ // 收集列表
    "src/**/*.{js,jsx,ts,tsx}", // 指定src 目录下的文件类型
    "!src/**/*.d.ts" // 但是不包含.d.ts文件
  ],
  "setupFiles": [
    "react-app-polyfill/jsdom"
  ],
  "setupFilesAfterEnv": [
    "<rootDir>/src/setupTests.ts"
  ],
  "testMatch": [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
  ],
  "testEnvironment": "jsdom",
  "testRunner": "D:\\antd-demo-ts\\node_modules\\jest-circus\\runner.js",
  "transform": {
    "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
  },
  "transformIgnorePatterns": [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$"
  ],
  "modulePaths": [],
  "moduleNameMapper": {
    "^react-native$": "react-native-web",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
  },
  "moduleFileExtensions": [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ],
  "watchPlugins": [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ],
  "resetMocks": true
  },


  OK,前面我们介绍了如何快速创建一个react项目和如何在项目中添加typescript，
  以及生成的几个配置文件，现在我们再来进入React框架学习。
  在进入学习React之前笔者发现React有这么多玩意，
  好家伙，与Vue相比起来简直要你半条命。
  react 、
  react-dom、
  react-router、
  react-router-dom、
  react-router-redux、
  react-redux、
  redux-saga、
  redux-thunk、
  react-hot-loader、
  redux-actions、
  redux-promise、
  redux-logger

  那么上述的东西究竟是干嘛的呢？
  我们先着重几个拿出来讲讲。

  react与react-dom的区别？
  OK,在说它们俩之间的区别之前，我们先看看npm down下来的源码吧，
  先去cjs文件中看看最后exports它们有哪些API，然后再去了解它们的API究竟是
  干嘛的，最后再来总结它们之间的区别。
  看看它们各自的文档，

  React 是 React 库的入口文件，
  包含实例化组件的基类，什么是实例化组件的基类呢?
  link: https://react.docschina.org/docs/react-component.html#overview
  就是说可以通过创建一个构造函数的方式实例化一个组件，当然并不是穿件一个构造函数就完事了，
  最后该类还必须要通过extends继承React的组件对象,例如：

  class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }
  上述的含义是Welcome类继承于当前React.Component组件对象;
  在 React.Component 的子类中有个必须定义的 render() 函数,
  React.render、ReactDOM.render、React.Component对象内的render它们的区别 ?
  react 渲染、react dom渲染、react组件渲染?


  React-router与React-router-dom的区别：
  在谈到它们之间的区别时，我们先去看看它们的源码。
  在我看来后者无非就是比前者React-router多了几个元素标签而已，
  在React-router-dom源码中Object.defineProperty(exports, 'Prompt', {})等
  一坨，但是在React-router源码中也有，可能是之前React-router没有这些API
  React-router-dom最后才加的吧。

  

-->

<!-- 
 嘛是ast、jsx、tsx、ts ?
 AST: 抽象语法树;
 JSX: JavaScript XML (JSX是一种嵌入式的类似XML的语法。 它可以被转换成合法的JavaScript，
 尽管转换的语义是依据不同的实现而定的。);JSX官方链接：https://facebook.github.io/jsx/
 TSX: 它是JSX语法文件的扩展名，也就是使用JSX语法书写时，该文件名的扩展类型必须是TSX后缀;
 TS:  Type Script;
 那么在React项目中究竟使用哪一种开发最为合适？
 我们知道不论是上述哪一种浏览器不可能识别的，最终都会转换成JS文件。
 OK，既然浏览器不能够识别这些扩展语法，就一定是为了开发做辅助。

 AST抽象语法树，抽象语法树。你似乎从网上跑了一圈都是同样的话，要不就是给你一个抽象语法树的实例。
 我们可以这么拆解，抽象的语法树，重点在名词"语法树"而并未adj。
 我们应该见识到了抽象语法树的实例，倘若没见过可以去该链接做参考：https://astexplorer.net/
 其实就是将一段代码用抽象的数据结构来表示。
 
 JSX，我们知道它的书写文件扩展名就是TSX。我们在React项目中看到很多人在使用它，
 那么为什么要使用它又是必须的吗？用它能带来什么辅助？
 这里我就不在自己理解了，React官方以图文并茂的方式给了完美的答案，链接如下：
 https://react.docschina.org/docs/introducing-jsx.html

 看完了链接的内容，我们再来抓住它的核心点，官方说了这么一句：

 "React 认为渲染逻辑本质上与其他 UI 逻辑内在耦合,比如..."
 卧槽这句等于白说，那么我们再来看看下一个重点。

 "React 不强制要求使用 JSX，但是大多数人发现，在 JavaScript 代码中将 JSX 和 UI 放在一起时，
 会在视觉上有辅助作用。它还可以使 React 显示更多有用的错误和警告消息。"
 "显示错误和警告消息"这个不难理解，就是在使用JSX语法开发时，JSX和渲染层放在一起时对报错提示
 以及警告起到一定的作用。

 
 -->

<!-- 

  Vue 与 React 的区别：
  从框架和源码以及语法说起。

  React 不能够全局注册

 -->
