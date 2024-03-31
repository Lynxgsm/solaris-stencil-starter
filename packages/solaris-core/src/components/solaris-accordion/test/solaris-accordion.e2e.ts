import { newE2EPage } from '@stencil/core/testing';

describe('solaris-accordion', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<solaris-accordion></solaris-accordion>');

    const element = await page.find('solaris-accordion');
    expect(element).toHaveClass('hydrated');
  });
});
