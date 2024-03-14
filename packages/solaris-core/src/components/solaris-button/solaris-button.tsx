import { Component, Prop, h } from '@stencil/core';
import { ColorScheme } from '@/common/types/color-scheme';
import { Size } from '@/common/types/size';
import { Variant } from '@/common/types/variants';
import clsx from 'clsx';

@Component({
  tag: 'solaris-button',
  styleUrl: 'solaris-button.scss',
  shadow: false,
})
export class SolarisButton {
  @Prop() variant: Variant = 'default';
  @Prop() color: ColorScheme = 'supernova';
  @Prop() href: string = '';
  @Prop() radius: number = 8;
  @Prop() size: Size = 'md';
  @Prop() iconSize: Size = 'lg';
  @Prop() fullWidth: boolean;
  @Prop() styling: string = '';

  generateStyle() {
    const variant = `solaris-button-${this.variant}`;
    const size = `solaris-button-${this.size}`;
    const color = `solaris-button-${this.color}`;
    return clsx(variant, size, color, this.styling);
  }

  render() {
    return (
      <button
        tabIndex={0}
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
