/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}

declare module 'react-typewriter-effect' {
  interface TypeWriterEffectProps {
    text?: string;
    multiText?: Array<string>;
    multiTextDelay?: number;
    multiTextLoop?: boolean;
    typeSpeed?: number;
    startDelay?: number;
    hideCursorAfterText?: boolean;
    cursorColor?: string;
    textStyle?: React.CSSProperties;
    scrollArea?: Element | Document | Window;
  }

  export default class TypeWriterEffect extends React.Component<
    TypeWriterEffectProps,
    any
  > {}
}
