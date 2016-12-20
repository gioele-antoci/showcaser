declare class Showcaser {
    static showcase(text: string, element?: HTMLElement, options?: IShowcaseOptions): void;
    static close(): void;
    static skipAll(): void;
    static readonly queueLength: number;
}
export interface IShowcaseOptions {
    allowSkip?: boolean;
    backgroundColor?: {
        r: number;
        g: number;
        b: number;
        a?: number;
    };
    before?: () => void;
    buttonText?: string;
    close?: () => void;
    fadeBackground?: boolean;
    paddingPx?: number;
    position?: {
        horizontal: "right" | "center" | "left";
        vertical: "top" | "middle" | "bottom";
    };
    positionTracker?: boolean;
    scrollBufferPx?: number;
    skipText?: string;
    skip?: () => void;
    shape?: "circle" | "rectangle";
}
export default Showcaser;
