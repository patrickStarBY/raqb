import { WidgetProps, Widgets } from "react-awesome-query-builder";
import MaterialConfig from "react-awesome-query-builder/lib/config/material";
import { Types } from "../../types";

export const widgets: Widgets = {
  ...MaterialConfig.widgets,
  [Types.text]: {
    ...MaterialConfig.widgets.text,
    valuePlaceholder: "Введите строку",
    type: Types.text,
    customProps: {
      multiline: true,
    },
  },
};
