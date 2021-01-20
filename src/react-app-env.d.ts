/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />


/*
 <reference types="node" />参考链接：https://www.tslang.cn/docs/handbook/triple-slash-directives.html
 reference[ˈrefrəns] v & n.参考、涉及;
 declare [dɪˈkler] v.宣布;
 interface[ˈɪntərfeɪs] n.接口;v.连接;

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
