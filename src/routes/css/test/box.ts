export class BoxClass {
  display: string = "flex";
  "flex-direction": {
    value: string;
    options: string[];
  } = {
    value: "row",
    options: ["row", "row-reverse", "column", "column-reverse"],
  };
  "flex-wrap": {
    value: string;
    options: string[];
  } = {
    value: "nowrap",
    options: ["wrap", "nowrap", "wrap-reverse"],
  };
  "justify-content": {
    value: string;
    options: string[];
  } = {
    value: "flex-start",
    options: [
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
      "start",
      "end",
      "left",
      "right",
    ],
  };
  "align-items": {
    value: string;
    options: string[];
  } = {
    value: "flex-start",
    options: [
      "flex-start",
      "flex-end",
      "center",
      "stretch",
      "baseline",
      "first baseline",
      "last baseline",
      "start",
      "end",
      "self-start",
      "self-end",
      "safe center",
      "unsafe center",
    ],
  };
  "align-content": {
    value: string;
    options: string[];
  } = {
    value: "flex-start",
    options: [
      "flex-start",
      "flex-end",
      "center",
      "stretch",
      "space-between",
      "space-around",
      "space-evenly",
      "start",
      "end",
      "baseline",
      "first baseline",
      "last baseline",
      "safe center",
      "unsafe center",
    ],
  };
  width: {
    value: number;
    unit: string;
    options: string[];
  } = {
    value: 20,
    unit: "%",
    options: [
      "vw",
      "vh",
      "%",
      "px",
      "em",
      "rem",
      "cm",
      "mm",
      "in",
      "pt",
      "pc",
      "ex",
      "ch",
      "vmin",
      "vmax",
    ],
  };
  height: {
    value: number;
    unit: string;
    options: string[];
  } = {
    value: 20,
    unit: "%",
    options: [
      "vw",
      "vh",
      "%",
      "px",
      "em",
      "rem",
      "cm",
      "mm",
      "in",
      "pt",
      "pc",
      "ex",
      "ch",
      "vmin",
      "vmax",
    ],
  };
  count: number = 0;
  children: BoxClass[] = [];
}

let item = {
  "flex-grow": 0,
  "flex-shrink": 1,
  "flex-basis": {
    value: "auto",
    options: ["%"],
  },
  "align-self": {
    value: "auto",
    options: [
      "auto",
      "flex-start",
      "flex-end",
      "center",
      "stretch",
      "baseline",
    ], //'first baseline', 'last baseline', 'start', 'end', 'self-start', 'self-end', 'safe center', 'unsafe center'],
  },
  order: 0,
};
