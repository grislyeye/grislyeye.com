import { LitElement } from 'lit';
import { Die } from './dice';
export declare class VellumDice extends LitElement {
    static styles: import("lit").CSSResult;
    animation: boolean;
    hidedice: boolean;
    get die(): Die | undefined;
    private reroll;
    private roll;
    render(): import("lit-html").TemplateResult<1>;
}
