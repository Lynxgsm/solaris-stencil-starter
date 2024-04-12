import { prefix } from '@/common/constants/variables';
import { IconName } from '@/common/types/icon';
import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'solaris-button',
  styleUrl: 'solaris-button.scss',
  shadow: false,
})
export class SolarisButton {
  @Prop() color: 'supernova' | 'error' | 'nebula-blue' | 'myrtille' | 'black' | 'disabled-light' | 'neutral' | 'comet' = 'supernova';
  @Prop() type: 'default' | 'outline' | 'link' = 'default';
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
          class={`${prefix}-btn ${prefix}-btn-${this.type} ${prefix}-btn-${this.color} ${prefix}-btn-${this.size} ${this.customClass} ${prefix}-icon-${this.iconPosition}`}
          disabled={this.disabled}
          style={{
            borderRadius: `${this.radius}px`,
            pointerEvents: this.disabled ? 'none' : 'auto',
            color: this.loading ? 'transparent' : null,
          }}
        >
          <slot name="icon" />
          <slot />
          {this.loading && <div class="spinner"></div>}
        </button>
      </Host>
    );
  }
}
