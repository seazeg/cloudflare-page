'use client';

import Script from 'next/script';

export const JQUERY_URL = '/js/jquery.js';
export const BOOTSTRAP_URL = '/js/bootstrap.min.js';
export const GSAP_URL = '/js/gsap.min.js';
export const SCROLL_TRIGGER_URL = '/js/ScrollTrigger.min.js';
export const SCROLL_TO_PLUGIN_URL = '/js/ScrollToPlugin.min.js';
export const SPLIT_TEXT_URL = '/js/SplitText.js';
export const WOW_URL = '/js/wow.js';
export const APPEAR_URL = '/js/appear.js';
export const PARTICLES_URL = '/js/particles.js';
export const SWIPER_URL = '/js/swiper.min.js';
export const MAGNIFIC_URL = '/js/magnific.js';
export const COUNTER_UP_URL = '/js/jquery.counterup.min.js';
export const WAYPOINTS_URL = '/js/waypoints.min.js';
export const NICE_SELECT_URL = '/js/nice-select.js';
export const MEANMENU_URL = '/js/jquery.meanmenu.js';
export const MAIN_URL = '/js/main.js';

interface ScriptsProps {
  onLoad?: () => void;
}

export function CoreScripts({ onLoad }: ScriptsProps) {
  return (
    <>
      <Script src={JQUERY_URL} strategy="afterInteractive" />
      <Script src={BOOTSTRAP_URL} strategy="afterInteractive" />
    </>
  );
}

export function AnimationScripts() {
  return (
    <>
      <Script src={GSAP_URL} strategy="afterInteractive" />
      <Script src={SCROLL_TRIGGER_URL} strategy="afterInteractive" />
      <Script src={SCROLL_TO_PLUGIN_URL} strategy="afterInteractive" />
      <Script src={SPLIT_TEXT_URL} strategy="afterInteractive" />
      <Script src={WOW_URL} strategy="afterInteractive" />
      <Script src={APPEAR_URL} strategy="afterInteractive" />
    </>
  );
}

export function PluginScripts() {
  return (
    <>
      <Script src={SWIPER_URL} strategy="afterInteractive" />
      <Script src={MAGNIFIC_URL} strategy="afterInteractive" />
      <Script src={COUNTER_UP_URL} strategy="afterInteractive" />
      <Script src={WAYPOINTS_URL} strategy="afterInteractive" />
      <Script src={NICE_SELECT_URL} strategy="afterInteractive" />
      <Script src={MEANMENU_URL} strategy="afterInteractive" />
      <Script src={PARTICLES_URL} strategy="afterInteractive" />
    </>
  );
}

export function MainScript() {
  return (
    <Script src={MAIN_URL} strategy="afterInteractive" />
  );
}

export function AllScripts() {
  return (
    <>
      <CoreScripts />
      <AnimationScripts />
      <PluginScripts />
      <MainScript />
    </>
  );
}
