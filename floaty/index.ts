import { Floaty }   from "./Floaty";

declare global {
  interface Document {
    getFloaty: () => Floaty;
  }
}

const floaty: Floaty = new Floaty();

document.getFloaty = () => {
  return floaty;
}

