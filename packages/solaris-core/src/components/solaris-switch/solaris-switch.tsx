import { prefix } from '@/common/constants/variables';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'solaris-switch',
  styleUrl: 'solaris-switch.scss',
  shadow: true,
})
export class SolarisSwitch {
  @Prop() checked: boolean = false;
  @Prop() disabled: boolean = false;
  render() {
    return (
      <label class={`${prefix}-switch ${prefix}-disabled`}>
        <input type="checkbox" checked={this.checked} disabled={this.disabled} />
        <span class={`${prefix}-slider round`}></span>
      </label>
    );
  }
}
