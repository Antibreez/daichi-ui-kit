import { PropType } from './vue/dist/vue.esm-bundler.js';
declare const _default: __VLS_WithTemplateSlots<import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<"small" | "medium" | "large">;
        default: string;
    };
    color: {
        type: PropType<"primary" | "secondary">;
        default: string;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<"small" | "medium" | "large">;
        default: string;
    };
    color: {
        type: PropType<"primary" | "secondary">;
        default: string;
    };
}>>, {
    disabled: boolean;
    size: "small" | "medium" | "large";
    color: "primary" | "secondary";
}, {}>, {
    "left-icon"?(_: {}): any;
    default?(_: {}): any;
    "right-icon"?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
