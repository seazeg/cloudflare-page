declare module 'jquery' {
  const jquery: JQueryStatic;
  export default jquery;
  export = jquery;
}

interface JQueryStatic {
  (selector: string): JQuery;
  (element: HTMLElement): JQuery;
  fn: JQuery;
  counterUp: (options: { delay: number; time: number }) => JQuery;
  meanmenu: (options: Record<string, unknown>) => JQuery;
}

interface JQuery {
  length: number;
  css(property: string, value: string): JQuery;
  css(property: Record<string, string>): JQuery;
  text(text: string): JQuery;
  text(): string;
  html(html: string): JQuery;
  html(): string;
  val(): string;
  val(value: string): JQuery;
  attr(name: string): string | undefined;
  attr(name: string, value: string): JQuery;
  addClass(className: string): JQuery;
  removeClass(className: string): JQuery;
  toggleClass(className: string): JQuery;
  hasClass(className: string): boolean;
  on(events: string, handler: (e: JQuery.Event) => void): JQuery;
  on(events: string, selector: string, handler: (e: JQuery.Event) => void): JQuery;
  off(events: string): JQuery;
  click(handler?: (e: JQuery.Event) => void): JQuery;
  submit(handler?: (e: JQuery.Event) => void): JQuery;
  find(selector: string): JQuery;
  parent(): JQuery;
  parents(selector: string): JQuery;
  children(selector?: string): JQuery;
  siblings(selector?: string): JQuery;
  next(): JQuery;
  prev(): JQuery;
  closest(selector: string): JQuery;
  animate(properties: Record<string, unknown>, duration?: number, easing?: string, complete?: () => void): JQuery;
  stop(clearQueue?: boolean, jumpToEnd?: boolean): JQuery;
  fadeIn(duration?: number, complete?: () => void): JQuery;
  fadeOut(duration?: number, complete?: () => void): JQuery;
  fadeToggle(duration?: number): JQuery;
  slideUp(duration?: number, complete?: () => void): JQuery;
  slideDown(duration?: number, complete?: () => void): JQuery;
  slideToggle(duration?: number): JQuery;
  show(): JQuery;
  hide(): JQuery;
  toggle(): JQuery;
  each(callback: (index: number, element: HTMLElement) => void): JQuery;
  first(): JQuery;
  last(): JQuery;
  eq(index: number): JQuery;
  index(): number;
  is(selector: string): boolean;
  remove(): JQuery;
  empty(): JQuery;
  append(content: string | JQuery | HTMLElement): JQuery;
  prepend(content: string | JQuery | HTMLElement): JQuery;
  after(content: string | JQuery | HTMLElement): JQuery;
  before(content: string | JQuery | HTMLElement): JQuery;
  clone(withDataAndEvents?: boolean): JQuery;
  data(key: string): unknown;
  data(key: string, value: unknown): JQuery;
  removeData(key: string): JQuery;
  prop(name: string): unknown;
  prop(name: string, value: unknown): JQuery;
  trigger(eventType: string): JQuery;
  scrollTop(): number;
  scrollTop(value: number): JQuery;
  scrollLeft(): number;
  scrollLeft(value: number): JQuery;
  height(): number;
  height(value: number | string): JQuery;
  width(): number;
  width(value: number | string): JQuery;
  outerHeight(includeMargin?: boolean): number;
  outerWidth(includeMargin?: boolean): number;
  offset(): { top: number; left: number };
  position(): { top: number; left: number };
  delay(duration: number): JQuery;
}

declare namespace JQuery {
  interface Event {
    preventDefault(): void;
    stopPropagation(): void;
    target: HTMLElement;
    currentTarget: HTMLElement;
    relatedTarget: HTMLElement;
    type: string;
    which: number;
    pageX: number;
    pageY: number;
    data: unknown;
  }
}

declare module 'bootstrap' {
  export class Modal {
    constructor(element: HTMLElement | string, options?: Record<string, unknown>);
    show(): void;
    hide(): void;
    toggle(): void;
    dispose(): void;
    static getInstance(element: HTMLElement): Modal | null;
    static getOrCreateInstance(element: HTMLElement, options?: Record<string, unknown>): Modal;
  }

  export class Dropdown {
    constructor(element: HTMLElement | string, options?: Record<string, unknown>);
    toggle(): void;
    show(): void;
    hide(): void;
    dispose(): void;
    update(): void;
    static getInstance(element: HTMLElement): Dropdown | null;
    static getOrCreateInstance(element: HTMLElement, options?: Record<string, unknown>): Dropdown;
  }

  export class Collapse {
    constructor(element: HTMLElement | string, options?: Record<string, unknown>);
    toggle(): void;
    show(): void;
    hide(): void;
    dispose(): void;
    static getInstance(element: HTMLElement): Collapse | null;
    static getOrCreateInstance(element: HTMLElement, options?: Record<string, unknown>): Collapse;
  }

  export class Offcanvas {
    constructor(element: HTMLElement | string, options?: Record<string, unknown>);
    show(): void;
    hide(): void;
    toggle(): void;
    dispose(): void;
    static getInstance(element: HTMLElement): Offcanvas | null;
    static getOrCreateInstance(element: HTMLElement, options?: Record<string, unknown>): Offcanvas;
  }

  export class Tab {
    constructor(element: HTMLElement | string);
    show(): void;
    dispose(): void;
    static getInstance(element: HTMLElement): Tab | null;
    static getOrCreateInstance(element: HTMLElement): Tab;
  }

  export class Tooltip {
    constructor(element: HTMLElement | string, options?: Record<string, unknown>);
    show(): void;
    hide(): void;
    toggle(): void;
    dispose(): void;
    enable(): void;
    disable(): void;
    static getInstance(element: HTMLElement): Tooltip | null;
    static getOrCreateInstance(element: HTMLElement, options?: Record<string, unknown>): Tooltip;
  }

  export class Popover {
    constructor(element: HTMLElement | string, options?: Record<string, unknown>);
    show(): void;
    hide(): void;
    toggle(): void;
    dispose(): void;
    enable(): void;
    disable(): void;
    static getInstance(element: HTMLElement): Popover | null;
    static getOrCreateInstance(element: HTMLElement, options?: Record<string, unknown>): Popover;
  }
}

declare global {
  interface Window {
    $: JQueryStatic;
    jQuery: JQueryStatic;
    gsap: typeof import('gsap').gsap;
    ScrollTrigger: typeof import('gsap').ScrollTrigger;
    ScrollToPlugin: typeof import('gsap').ScrollToPlugin;
    SplitText: typeof import('gsap').SplitText;
    bootstrap: typeof import('bootstrap');
    Swiper: typeof import('swiper').default;
    WOW: new (options?: Record<string, unknown>) => { init(): void };
    particles: {
      load: (id: string, options: Record<string, unknown>) => void;
    };
  }
}

export {};
