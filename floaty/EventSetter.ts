import { DomParser }     from "./DomParser";
import { FloatySetList } from "./DomParser";
import { FloatySet }     from "./DomParser";
import { Event }         from "./Event";

export class EventSetter {
  domParser: DomParser;
  event:     Event;

  constructor(
    domParser: DomParser,
    event:     Event
  ) {
    this.domParser = domParser;
    this.event     = event;
  }

  select(current: string = "") {
    const floatySet: FloatySet | null = this.domParser.get(current);
    if (floatySet === null) return;
    this.event.use(floatySet.boot);
  }

  setAll() {
    const floatySetList: FloatySetList = this.domParser.getAll();
    Object.keys(floatySetList).forEach((key: string) => {
      this._setEventWhenOpen(floatySetList[key]);
    });
  }

  _getElement(modal: HTMLElement, isModal: boolean): HTMLElement {
　  const fragment: string = (<HTMLMetaElement>modal).content;
    const dom: HTMLElement = document.createElement("div");
    dom.append(fragment);
    if (isModal) document.body.appendChild(dom);
    return dom;
  }

  _setEventWhenOpen(floatySet: FloatySet) {
    const dom: HTMLElement = this._getElement(floatySet.modal, true);
    const boot: HTMLElement = this._getElement(floatySet.boot, false);

    this.event.e_init(dom);
    const event: (e: MouseEvent) => void = (e) => {
      this.event.e_show(e, dom);
      this.event.e_hide(e, dom);
    }
    floatySet.boot.removeEventListener("click", event);
    floatySet.boot.addEventListener("click", event);
  }
}

