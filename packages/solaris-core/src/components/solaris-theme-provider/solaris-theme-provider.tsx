import { Color } from '@/common/types/color-scheme';
import { Component, Host, Prop, h } from '@stencil/core';

type SolarisThemeProps = Partial<{
  presets: 'PART' | 'PRO';
  colors: Partial<{
    primary: Color;
    secondary: Color;
    accent: Color;
  }>;
}>;

@Component({
  tag: 'solaris-theme-provider',
  styleUrl: 'solaris-theme-provider.scss',
  shadow: false,
})
export class SolarisThemeProvider {
  @Prop() theme: SolarisThemeProps = {
    presets: 'PART',
    colors: {
      primary: 'supernova',
      secondary: 'cobalt',
      accent: 'alert-light',
    },
  };
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}

// Surcharge le provider par un autre (il faut le faire)
// Typography classes surchargeable taille, weight, line-height, italic, underline
