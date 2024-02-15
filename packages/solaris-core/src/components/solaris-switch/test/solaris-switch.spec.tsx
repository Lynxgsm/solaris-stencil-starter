import { newSpecPage } from '@stencil/core/testing';
import { SolarisSwitch } from '../solaris-switch';

describe('solaris-switch', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SolarisSwitch],
      html: `<solaris-switch></solaris-switch>`,
    });
    expect(page.root).toEqualHtml(`
      <solaris-switch>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </solaris-switch>
    `);
  });
});
