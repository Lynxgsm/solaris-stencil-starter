import { IconName } from '@/common/types/icon';
import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'solaris-icon',
  styleUrl: 'solaris-icon.scss',
  shadow: false,
  assetsDirs: ['assets'],
})
export class SolarisIcon {
  @Prop() name: IconName;
  @Prop() variant: 'regular' | 'bold' | 'light' = 'regular';
  render() {
    return (
      <Host>
        <i class={`icon-${this.name}-${this.variant} icons`}></i>
      </Host>
    );
  }
}
