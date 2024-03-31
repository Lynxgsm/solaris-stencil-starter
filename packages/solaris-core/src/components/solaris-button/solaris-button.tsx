import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'solaris-button',
  styleUrl: 'solaris-button.scss',
  shadow: true,
})
export class SolarisButton {
  @Prop()
  render() {
    return (
      <Host>
        <button class="">
          <slot></slot>
        </button>
      </Host>
    );
  }
}
