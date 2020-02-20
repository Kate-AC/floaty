export interface FloatySet {
  boot:  HTMLElement;
  modal: HTMLElement;
}

export interface FloatySetList {
  [key: string]: FloatySet;
}

export class DomParser {
  floatySetList: FloatySetList = {};
  prefix: string = "_";

  constructor() {
    this.parse();
  }

  parse() {
    this.floatySetList = {};
    let list = [].slice.call(document.querySelectorAll('[floaty]'));

    let bootList = list.filter((item: HTMLElement) => {
      return !item.classList.contains('floaty');
    });

    let modalList = list.filter((item: HTMLElement) => {
      return item.classList.contains('floaty');
    });

    bootList.forEach((item1) => {
      modalList.forEach((item2, i, array) => {
        let key: string = this._getVal(item1);

        if (key != this._getVal(item2)) return false;
        array.splice(i, 1);
        this.add({ boot: item1, modal: item2 }, key);
      });
    });
  }

  add(floatySet: FloatySet, key: string = "") {
    key = key == ""
      ? this._getUniqueChars()
      : this._getVal(floatySet.boot);

    this.floatySetList[this.prefix + key] = {
      boot:  floatySet.boot,
      modal: floatySet.modal
    };
  }

  getAll(): FloatySetList {
    return this.floatySetList;
  }

  get(key: string = ""): FloatySet | null {
    if (Object.keys(this.floatySetList).length < 1) return null;

    const objectKey: string = Object.keys(this.floatySetList)[0];
    return key != ""
      ? this.floatySetList[this.prefix + key]
      : this.floatySetList[objectKey];
  }

  _getUniqueChars(): string {
    return (new Date()).getTime().toString(16) + Math.random().toString(36).slice(-8);
  }

  _getVal(element: HTMLElement): string {
    return element.getAttribute("floaty") || "";
  }
}

