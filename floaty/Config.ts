export interface Style {
  [key: string]:   string;
  display:         string;
  justifyContent:  string;
  alignItems:      string;
  position:        string;
  left:            string;
  top:             string;
  height:          string;
  width:           string;
  opacity:         string;
  zIndex:          string;
  transition:      string;
  backgroundColor: string;
}

export interface StyleSwitch {
  [key: string]:   string;
  opacity:         string;
  zIndex:          string;
  backgroundColor: string;
}

export interface ClassName {
  close: string;
}

export class Config {
  static readonly FINISHE_SEC: number = 0.7;

  getStyle(): Style {
    return {
      display:         "flex",
      justifyContent:  "center",
      alignItems:      "center",
      position:        "absolute",
      left:            "0",
      top:             "0",
      height:          "100%",
      width:           "100%",
      opacity:         "0",
      zIndex:          "-9999",
      transition:      "0.5s all",
      backgroundColor: "rgba(0, 0, 0, 0)"
    };
  }

  getStyleWhenShow(): StyleSwitch {
    return {
      opacity:         "1",
      zIndex:          "9999",
      backgroundColor: "rgba(0, 0, 0, " + Config.FINISHE_SEC + ")"
    };
  }

  getStyleWhenClose(): StyleSwitch {
    return {
      opacity:         "0",
      zIndex:          "-9999",
      backgroundColor: "rgba(0, 0, 0, 0)"
    };
  }

  getClassName(): ClassName {
    return {
      close: "f-close"
    };
  }
}
