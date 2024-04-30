import { newSpecPage } from '@stencil/core/testing';
import { SolarisModal } from '../solaris-modal';

describe('solaris-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SolarisModal],
      html: `<solaris-modal></solaris-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <solaris-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </solaris-modal>
    `);
  });
});
