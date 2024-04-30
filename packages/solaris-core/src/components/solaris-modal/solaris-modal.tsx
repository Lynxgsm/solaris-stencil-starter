import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'solaris-modal',
  styleUrl: 'solaris-modal.scss',
  shadow: true,
})
export class SolarisModal {
  render() {
    return (
      <Host>
        <dialog>
          <slot></slot>
        </dialog>
      </Host>
    );
  }
}
