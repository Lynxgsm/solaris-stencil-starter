import { newE2EPage } from '@stencil/core/testing';

describe('solaris-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<solaris-modal></solaris-modal>');

    const element = await page.find('solaris-modal');
    expect(element).toHaveClass('hydrated');
  });
});
