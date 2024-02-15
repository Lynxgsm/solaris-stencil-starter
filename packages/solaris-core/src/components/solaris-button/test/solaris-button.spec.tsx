import { newSpecPage } from '@stencil/core/testing';
import { SolarisButton } from '../solaris-button';

describe('solaris-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SolarisButton],
      html: `<solaris-button></solaris-button>`,
    });
    expect(page.root).toEqualHtml(`
      <solaris-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </solaris-button>
    `);
  });
});
