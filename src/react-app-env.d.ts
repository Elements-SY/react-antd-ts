/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />


/*

react-app-env.d.ts文件是干嘛的？关于这个文件在https://www.tslang.cn/docs/handbook/declaration-files/templates.html
意思就是该文件是上述/// <reference types="node" />三个文件的全局模板环境配置文件。


 <reference types="node" />参考链接：https://www.tslang.cn/docs/handbook/triple-slash-directives.html
 reference[ˈrefrəns] v & n.参考、涉及;
 declare [dɪˈkler] v.宣布;
 interface[ˈɪntərfeɪs] n.接口;v.连接;
 
 表明这个文件使用了node_modules目录下的@types/node/index.d.ts里面声明的名字； 
 并且，这个包需要在编译阶段与声明文件一起被包含进来
 仅当在你需要写一个d.ts文件时才使用这个指令。
*/ 


declare namespace NodeJS {
  interface ProcessEnv { // https://ts.xcatliu.com/basics/type-of-object-interfaces.html
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PUBLIC_URL: string;
  }
}

declare module '*.avif' {
  const src: string;
  export default src;
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
    const src: string;
    export default src;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  > & { title?: string }>;

  const src: string;
  export default src;
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
