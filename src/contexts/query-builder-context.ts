import React from "react";
import { ISource, TDialogState } from "../types";

type TSourceContext = {
  sources: any;
  joinFieldName: string;
  dialogHandler: (state: TDialogState) => void;
  getItems?: () => Promise<void>;
};

export const QueryBuilderContext = React.createContext<TSourceContext>({
  sources: [],
  joinFieldName: "",
  dialogHandler: (state) =>
    console.error(
      "There is no QueryBuilderContext.Provider for handle dialog state: ",
      state
    ),
});
