import { newSpecPage } from '@stencil/core/testing';
import { SolarisAvatar } from '../solaris-avatar';

describe('solaris-avatar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SolarisAvatar],
      html: `<solaris-avatar></solaris-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <solaris-avatar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </solaris-avatar>
    `);
  });
});
