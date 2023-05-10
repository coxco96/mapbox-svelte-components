/** @typedef {typeof __propDef.props}  TemplatePageProps */
/** @typedef {typeof __propDef.events}  TemplatePageEvents */
/** @typedef {typeof __propDef.slots}  TemplatePageSlots */
export default class TemplatePage extends SvelteComponentTyped<{
    title: any;
    codeBlock: any;
    content: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type TemplatePageProps = typeof __propDef.props;
export type TemplatePageEvents = typeof __propDef.events;
export type TemplatePageSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        title: any;
        codeBlock: any;
        content: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
