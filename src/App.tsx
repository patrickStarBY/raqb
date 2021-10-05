import { useState, useCallback, useEffect } from "react";
import {
  Config,
  ImmutableTree,
  JsonGroup,
  Utils as QbUtils,
} from "react-awesome-query-builder";

import "./App.css";
import { QueryBuilder } from "./QueryBuilder";
import { QueryBuilderContext } from "./contexts";
import { DialogPopup } from "./components/popups/DialogPopup";
import { sources as initSources } from "./sources.json";
import { tree } from "./tree.json";
import { config as configBuilder } from "./builder";
import { Fields } from "react-awesome-query-builder";
import { DataType } from "./types";

type TDialog = {
  title: string;
  text: string;
  status: "success" | "error";
};

type TDialogState = {
  open: boolean;
} & TDialog;

const INIT_DIALOG: TDialogState = {
  open: false,
  title: "",
  text: "",
  status: "success",
};

const INIT_TREE: JsonGroup = {
  id: QbUtils.uuid(),
  type: "group",
  properties: {
    conjunction: "AND",
  },
};

const getFields = (sources: any): Fields => {
  return sources.reduce((acc: Fields, current: any): Fields => {
    const { id } = current;
    current.attr.forEach((item: any) => {
      const type = item.controlName.toLowerCase();
      acc[`${id}_${item.id}`] = {
        ...item,
        type,
        label: item.title || item.name,
        valueSources: ["value"],
        fieldSettings: {
          validateValue: (val) => {
            if (type === DataType.dateNow && val) {
              if (val === "now") return true;
              const num = ((val as string).match(/\d*$/g) || [])[0];
              return (num && Number(num) > 0) || "Не валидное поле";
            }
            return !!val || typeof val === "boolean" || "Не валидное поле";
          },
        },
      };
    });
    return acc;
  }, {});
};

const App = () => {
  const [sources, setSources] = useState<any>(initSources);
  const [joinFieldName] = useState<any>("puid");
  const [config, setConfig] = useState<Config>({
    ...configBuilder,
    fields: getFields(initSources),
  });
  const [initTree, setInitTree] = useState<any>(tree);
  const [dialogState, setDialogState] = useState(INIT_DIALOG);
  const closeDialog = useCallback(
    () => setDialogState((prev) => ({ ...prev, open: false })),
    []
  );

  const onChangeTree = (tree: ImmutableTree) => {};

  return (
    <div className="App">
      {config.fields && (
        <>
          <QueryBuilderContext.Provider
            value={{
              sources,
              joinFieldName,
              dialogHandler: setDialogState,
            }}
          >
            <QueryBuilder
              value={initTree}
              config={config}
              onChange={onChangeTree}
              className="add__builder"
            />
          </QueryBuilderContext.Provider>
          <DialogPopup
            {...dialogState}
            onClose={closeDialog}
            clickBtn={closeDialog}
          />
        </>
      )}
    </div>
  );
};

export default App;
