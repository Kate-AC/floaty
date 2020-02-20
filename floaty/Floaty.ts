import { DomParser }   from "./DomParser";
import { Config }      from "./Config";
import { Event }       from "./Event";
import { EventSetter } from "./EventSetter";

export class Floaty {
  event: Event;
  eventSetter: EventSetter;

  constructor() {
    const config: Config       = new Config();
    const domParser: DomParser = new DomParser();

    this.event       = new Event(config);
    this.eventSetter = new EventSetter(domParser, this.event);
    this.eventSetter.setAll();
  }

  select(key: string = ""): Floaty {
    this.eventSetter.select(key);
    return this;
  }

  setOpen(func: () => void): Floaty {
    this.event.setOpen(func);
    return this;
  }

  setOpened(func: () => void): Floaty {
    this.event.setOpened(func);
    return this;
  }

  setClose(func: () => void): Floaty {
    this.event.setClose(func);
    return this;
  }

  setClosed(func: () => void): Floaty {
    this.event.setClosed(func);
    return this;
  }
}

