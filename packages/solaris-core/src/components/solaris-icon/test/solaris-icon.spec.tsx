import { newSpecPage } from '@stencil/core/testing';
import { SolarisIcon } from '../solaris-icon';

describe('solaris-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SolarisIcon],
      html: `<solaris-icon></solaris-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <solaris-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </solaris-icon>
    `);
  });
});
