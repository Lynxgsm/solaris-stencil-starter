import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'solaris-icon',
  styleUrl: 'solaris-icon.scss',
  shadow: true,
})
export class SolarisIcon {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
