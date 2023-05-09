/** @typedef {typeof __propDef.props}  MapPageProps */
/** @typedef {typeof __propDef.events}  MapPageEvents */
/** @typedef {typeof __propDef.slots}  MapPageSlots */
export default class MapPage extends SvelteComponentTyped<{
    title: any;
    codeBlock: any;
    content: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type MapPageProps = typeof __propDef.props;
export type MapPageEvents = typeof __propDef.events;
export type MapPageSlots = typeof __propDef.slots;
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
