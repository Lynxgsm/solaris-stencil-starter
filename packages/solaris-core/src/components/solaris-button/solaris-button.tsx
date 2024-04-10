import { prefix } from '@/common/constants/variables';
import { IconName } from '@/common/types/icon';
import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'solaris-button',
  styleUrl: 'solaris-button.scss',
  shadow: false,
})
export class SolarisButton {
  @Prop() color: 'supernova' | 'default' | 'cobalt' | 'darkgrey' | 'white' | 'danger' = 'supernova';
  @Prop() type: 'default' | 'outline' | 'ghost' = 'default';
  @Prop() disabled: boolean = false;
  @Prop() href?: string = '';
  @Prop() icon?: IconName;
  @Prop() radius?: number = 8;
  @Prop() iconPosition: 'left' | 'right' = 'left';
  @Prop() focusable?: boolean = true;
  @Prop() loading?: boolean = false;
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';
  @Prop() customClass?: string = '';

  render() {
    return (
      <Host>
        <button
          class={`${prefix}-btn ${prefix}-btn-${this.type} ${prefix}-btn-${this.color} ${prefix}-btn-${this.size} ${this.customClass}`}
          disabled={this.disabled}
          style={{
            borderRadius: `${this.radius}px`,
          }}
        >
          <slot />
        </button>
      </Host>
    );
  }
}
