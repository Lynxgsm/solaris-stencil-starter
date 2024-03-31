import { newSpecPage } from '@stencil/core/testing';
import { SolarisAccordion } from '../solaris-accordion';

describe('solaris-accordion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SolarisAccordion],
      html: `<solaris-accordion></solaris-accordion>`,
    });
    expect(page.root).toEqualHtml(`
      <solaris-accordion>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </solaris-accordion>
    `);
  });
});
