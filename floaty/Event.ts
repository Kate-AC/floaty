import { Config } from "./Config";

export class Event {
  config: Config;

  open:   (e: MouseEvent, dom: HTMLElement) => void = () => {};
  opened: (e: MouseEvent, dom: HTMLElement) => void = () => {};
  close:  (e: MouseEvent, dom: HTMLElement) => void = () => {};
  closed: (e: MouseEvent, dom: HTMLElement) => void = () => {};
  current: HTMLElement | null = null;

  constructor(config: Config) {
    this.config = config;
  }

  setOpen(func: () => void) {
    this.open = func;
  }

  setOpened(func: () => void) {
    this.opened = func;
  }

  setClose(func: () => void) {
    this.close = func;
  }

  setClosed(func: () => void) {
    this.closed = func;
  }

  applyStyle(dom: HTMLElement, style: any) {
    Object.keys(style).forEach((key: string) => {
      dom.style[<any>key] = style[key];
    });
  }

  use(current: HTMLElement) {
    this.current = current;
  }

  e_init(dom: HTMLElement) {
    this.applyStyle(dom, this.config.getStyle());
  }

  e_show(e: MouseEvent, dom: HTMLElement) {
    this.applyStyle(dom, this.config.getStyleWhenShow());

    if (this.current !== null) {
      dom = this.current;
    }

    this.e_open(e, dom);
    setTimeout(() => {
      this.e_opened(e, dom);
    }, Config.FINISHE_SEC * 1000);
  }

  e_hide(e: MouseEvent, dom: HTMLElement) {
    const key: string = "." + this.config.getClassName().close;
    const close: HTMLElement | null = dom.querySelector(key);
    if (close === null) return;

    close.addEventListener("click", () => {
      this.applyStyle(dom, this.config.getStyleWhenClose());

      this.e_close(e, dom);
      setTimeout(() => {
        this.e_closed(e, dom);
      }, Config.FINISHE_SEC * 1000);
    });
  }

  e_open(e: MouseEvent, dom: HTMLElement) {
    this.open(e, dom);
  }

  e_opened(e: MouseEvent, dom: HTMLElement) {
   this.opened(e, dom);
  }

  e_close(e: MouseEvent, dom: HTMLElement) {
    this.close(e, dom);
  }

  e_closed(e: MouseEvent, dom: HTMLElement) {
    this.closed(e, dom);
  }
}

