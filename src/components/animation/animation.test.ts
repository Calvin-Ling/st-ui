import { aTimeout, expect, fixture, oneEvent } from '@open-wc/testing';
import { html } from 'lit';
import '../../../dist/shoelace.js';
import type StAnimation from './animation.js';

describe('<st-animation>', () => {
  const boxToAnimate = html`<div style="width: 10px; height: 10px;" data-testid="animated-box"></div>`;

  it('renders', async () => {
    const animationContainer = await fixture<StAnimation>(html`<st-animation>${boxToAnimate}</st-animation>`);

    expect(animationContainer).to.exist;
  });

  it('is accessible', async () => {
    const animationContainer = await fixture<StAnimation>(html`<st-animation>${boxToAnimate}</st-animation>`);

    await expect(animationContainer).to.be.accessible();
  });

  describe('animation start', () => {
    it('does not start the animation by default', async () => {
      const animationContainer = await fixture<StAnimation>(
        html`<st-animation name="bounce" easing="ease-in-out" duration="10">${boxToAnimate}</st-animation>`
      );
      await aTimeout(0);

      expect(animationContainer.play).to.be.false;
    });

    it('emits the correct event on animation start', async () => {
      const animationContainer = await fixture<StAnimation>(
        html`<st-animation name="bounce" easing="ease-in-out" duration="10">${boxToAnimate}</st-animation>`
      );

      const startPromise = oneEvent(animationContainer, 'st-start');
      animationContainer.play = true;
      return startPromise;
    });
  });

  it('emits the correct event on animation end', async () => {
    const animationContainer = await fixture<StAnimation>(
      html`<st-animation name="bounce" easing="ease-in-out" duration="1">${boxToAnimate}</st-animation>`
    );

    const endPromise = oneEvent(animationContainer, 'st-finish');
    animationContainer.iterations = 1;
    animationContainer.play = true;
    return endPromise;
  });

  it('can be finished by hand', async () => {
    const animationContainer = await fixture<StAnimation>(
      html`<st-animation name="bounce" easing="ease-in-out" duration="1000">${boxToAnimate}</st-animation>`
    );

    const endPromise = oneEvent(animationContainer, 'st-finish');
    animationContainer.iterations = 1;
    animationContainer.play = true;

    await aTimeout(0);

    animationContainer.finish();
    return endPromise;
  });

  it('can be cancelled', async () => {
    const animationContainer = await fixture<StAnimation>(
      html`<st-animation name="bounce" easing="ease-in-out" duration="1">${boxToAnimate}</st-animation>`
    );
    let animationHasFinished = false;
    oneEvent(animationContainer, 'st-finish').then(() => (animationHasFinished = true));
    const cancelPromise = oneEvent(animationContainer, 'st-cancel');
    animationContainer.play = true;

    await aTimeout(0);
    animationContainer.cancel();

    await cancelPromise;
    expect(animationHasFinished).to.be.false;
  });
});
