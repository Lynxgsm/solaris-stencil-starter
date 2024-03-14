import { newSpecPage } from '@stencil/core/testing';
import { SolarisThemeProvider } from '../solaris-theme-provider';

describe('solaris-theme-provider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SolarisThemeProvider],
      html: `<solaris-theme-provider></solaris-theme-provider>`,
    });
    expect(page.root).toEqualHtml(`
      <solaris-theme-provider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </solaris-theme-provider>
    `);
  });
});
