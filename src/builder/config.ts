import { Config, FieldProps } from "react-awesome-query-builder";
import MaterialConfig from "react-awesome-query-builder/lib/config/material";
import { QueryBuilderField } from "../QueryBuilder/QueryBuilderField";
import { QueryBuilderHOC } from "../QueryBuilder/QueryBuilderHOC";

import { operators, types, widgets } from "./settings";

export const config: Config = {
  ...MaterialConfig,
  settings: {
    ...MaterialConfig.settings,
    addRuleLabel: "Добавить условие",
    addGroupLabel: "Добавить группу условий",
    fieldPlaceholder: "Выберите поле",
    operatorPlaceholder: "Выберите оператор",
    renderField: (props) =>
      QueryBuilderHOC<FieldProps>(props, QueryBuilderField)(),
    clearValueOnChangeField: true,
    showErrorMessage: true,
  },
  types,
  operators,
  widgets,
};
