import { Component, h } from '@stencil/core';

@Component({
  tag: 'solaris-button',
  styleUrl: 'solaris-button.css',
  shadow: true,
})
export class SolarisButton {
  render() {
    return (
      <button class="solaris-button">
        <slot></slot>
      </button>
    );
  }
}
