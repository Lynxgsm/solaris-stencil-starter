import { Component, h } from '@stencil/core';

@Component({
  tag: 'solaris-switch',
  styleUrl: 'solaris-switch.scss',
  shadow: true,
})
export class SolarisSwitch {
  render() {
    return (
      <label class="solaris-switch">
        <input type="checkbox" />
        <span class="solaris-slider round"></span>
      </label>
    );
  }
}
