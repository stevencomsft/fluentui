## API Report File for "@fluentui/react-field"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

/// <reference types="react" />

import type { ComponentProps } from '@fluentui/react-utilities';
import type { ComponentState } from '@fluentui/react-utilities';
import { Label } from '@fluentui/react-label';
import * as React_2 from 'react';
import type { Slot } from '@fluentui/react-utilities';
import type { SlotClassNames } from '@fluentui/react-utilities';
import type { SlotRenderFunction } from '@fluentui/react-utilities';
import type { SlotShorthandValue } from '@fluentui/react-utilities';

// @public
export type FieldConfig<T extends FieldControl> = {
    component: T;
    classNames: SlotClassNames<FieldSlots<T>>;
    labelConnection?: 'htmlFor' | 'aria-labelledby';
    ariaInvalidOnError?: boolean;
};

// @public
export type FieldControl = React_2.VoidFunctionComponent<Pick<React_2.HTMLAttributes<HTMLElement>, 'id' | 'className' | 'style' | 'aria-labelledby' | 'aria-describedby' | 'aria-invalid'>>;

// @public
export type FieldProps<T extends FieldControl> = ComponentProps<Partial<FieldSlots<T>>, 'control'> & {
    orientation?: 'vertical' | 'horizontal';
    validationState?: 'error' | 'warning' | 'success';
};

// @public
export type FieldSlots<T extends FieldControl> = {
    root: NonNullable<Slot<'div'>>;
    control: SlotComponent<T>;
    label?: Slot<typeof Label>;
    validationMessage?: Slot<'div'>;
    validationMessageIcon?: Slot<'span'>;
    hint?: Slot<'div'>;
};

// @public
export type FieldState<T extends FieldControl> = ComponentState<Required<FieldSlots<T>>> & Pick<FieldProps<T>, 'orientation' | 'validationState'> & {
    classNames: SlotClassNames<FieldSlots<T>>;
};

// @public (undocumented)
export const getFieldClassNames: (name: string) => SlotClassNames<FieldSlots<FieldControl>>;

// @public
export const renderField_unstable: <T extends FieldControl>(state: FieldState<T>) => JSX.Element;

// @public
export const useField_unstable: <T extends FieldControl>(props: FieldPropsWithOptionalComponentProps<T>, ref: React_2.Ref<HTMLElement>, params: FieldConfig<T>) => FieldState<T>;

// @public
export const useFieldStyles_unstable: <T extends FieldControl>(state: FieldState<T>) => void;

// (No @packageDocumentation comment for this package)

```