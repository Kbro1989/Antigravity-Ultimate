/// <reference types="vite/client" />

declare module '*.glsl' {
    const content: string;
    export default content;
}

declare module '*.c' {
    const content: string;
    export default content;
}

declare module '*.glsl.c' {
    const content: string;
    export default content;
}
