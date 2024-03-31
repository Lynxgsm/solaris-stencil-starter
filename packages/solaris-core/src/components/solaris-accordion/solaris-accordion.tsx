import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'solaris-accordion',
  styleUrl: 'solaris-accordion.css',
  shadow: true,
})
export class SolarisAccordion {
  render() {
    return (
      <Host>
        <slot></slot>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In quibusdam, nisi assumenda velit minima harum ipsam odio? Rem pariatur, recusandae officia alias error numquam
          a consectetur, modi totam quos vel.
        </p>
      </Host>
    );
  }
}
