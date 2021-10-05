import { Operators } from "react-awesome-query-builder";
import MaterialConfig from "react-awesome-query-builder/lib/config/material";
import { LabelOperators, Operators as KeyOperators } from "../../types";

export const operators: Operators = {
  [KeyOperators.equal]: {
    ...MaterialConfig.operators.equal,
    label: LabelOperators.equal,
  },
  [KeyOperators.greater]: {
    ...MaterialConfig.operators.greater,
    label: LabelOperators.greater,
  },
  [KeyOperators.greater_or_equal]: {
    ...MaterialConfig.operators.greater_or_equal,
    label: LabelOperators.greater_or_equal,
  },
  [KeyOperators.less]: {
    ...MaterialConfig.operators.less,
    label: LabelOperators.less,
  },
  [KeyOperators.less_or_equal]: {
    ...MaterialConfig.operators.less_or_equal,
    label: LabelOperators.less_or_equal,
  },
  [KeyOperators.not_equal]: {
    ...MaterialConfig.operators.not_equal,
    label: LabelOperators.not_equal,
  },
  [KeyOperators.begins_with]: {
    ...MaterialConfig.operators.starts_with,
    label: LabelOperators.begins_with,
  },
  [KeyOperators.not_begins_with]: {
    label: LabelOperators.not_begins_with,
    reversedOp: LabelOperators.begins_with,
    valueSources: ["value"],
  },
  [KeyOperators.contains]: {
    ...MaterialConfig.operators.like,
    label: LabelOperators.contains,
  },
  [KeyOperators.not_contains]: {
    ...MaterialConfig.operators.not_like,
    label: LabelOperators.not_contains,
  },
  [KeyOperators.in]: {
    ...MaterialConfig.operators.select_any_in,
    label: LabelOperators.in,
  },
  [KeyOperators.not_in]: {
    ...MaterialConfig.operators.select_not_any_in,
    label: LabelOperators.not_in,
  },
  [KeyOperators.is_empty]: {
    ...MaterialConfig.operators.is_empty,
    label: LabelOperators.is_empty,
  },
  [KeyOperators.is_not_empty]: {
    ...MaterialConfig.operators.is_not_empty,
    label: LabelOperators.is_not_empty,
  },
  [KeyOperators.is_null]: {
    label: LabelOperators.is_null,
    reversedOp: LabelOperators.is_not_null,
    cardinality: 0,
  },
  [KeyOperators.is_not_null]: {
    label: LabelOperators.is_not_null,
    reversedOp: LabelOperators.is_null,
    cardinality: 0,
  },
  [KeyOperators.regexp]: {
    label: LabelOperators.regexp,
    reversedOp: "",
    valueSources: ["value"],
  },
  [KeyOperators.between]: {
    ...MaterialConfig.operators.between,
    label: LabelOperators.between,
    textSeparators: ["", "и"],
    // @ts-ignore
    validateValues: ([first, second]) => {
      if (first !== undefined && second !== undefined) {
        if (first === null || second === null) return "Неверный диапазон";
        if (
          typeof first === "string" &&
          (first.includes("year") ||
            first.includes("quarter") ||
            first.includes("month") ||
            first.includes("week") ||
            first.includes("day") ||
            first.includes("now"))
        )
          return null;
        return first <= second ? null : "Неверный диапазон";
      }

      return null;
    },
  },
};
