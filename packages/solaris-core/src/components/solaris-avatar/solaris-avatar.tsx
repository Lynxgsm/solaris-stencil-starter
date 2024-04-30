import { prefix } from '@/common/constants/variables';
import { ColorScheme } from '@/common/types/color-scheme';
import { Size } from '@/common/types/size';
import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'solaris-avatar',
  styleUrl: 'solaris-avatar.scss',
  shadow: true,
})
export class SolarisAvatar {
  @Prop() backgroundColor?: ColorScheme;
  textContent: string;
  variant?: 'rectangle' | 'circle' | 'square' = 'circle';
  size?: Size | number;

  render() {
    return (
      <Host>
        <p class={`${prefix}-avatar ${prefix}-avatar-${this.backgroundColor} ${prefix}-avatar-${this.variant}`}>{this.textContent}</p>
      </Host>
    );
  }
}
