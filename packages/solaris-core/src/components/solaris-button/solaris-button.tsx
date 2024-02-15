import { Component, Prop, h } from '@stencil/core';
import { ColorScheme } from '../../common/types/color-scheme';
import { Size } from '../../common/types/size';
import { Variant } from '../../common/types/variants';
import clsx from 'clsx';

@Component({
  tag: 'solaris-button',
  styleUrl: 'solaris-button.scss',
  shadow: true,
})
export class SolarisButton {
  @Prop() variant: Variant = 'default';
  @Prop() colorScheme: ColorScheme = 'supernova';
  @Prop() href: string = '';
  @Prop() radius: number = 8;
  @Prop() size: Size = 'md';
  @Prop() iconSize: Size = 'lg';
  @Prop() fullWidth: boolean;
  @Prop() customClass: string = '';

  generateStyle() {
    const variant = `button-${this.variant}`;
    const size = `button-${this.size}`;
    const colorScheme = `button-${this.colorScheme}`;
    return clsx(variant, size, colorScheme, this.customClass);
  }

  render() {
    return (
      <button
        class={this.generateStyle()}
        style={{
          width: this.fullWidth ? '100%' : undefined,
          borderRadius: `${this.radius}px`,
        }}
      >
        <slot />
      </button>
    );
  }
}
