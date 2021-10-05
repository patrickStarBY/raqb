import { Types } from "react-awesome-query-builder";
import MaterialConfig from "react-awesome-query-builder/lib/config/material";
import { DataType, Operators, Types as WidgetTypes } from "../../types";

export const types: Types = {
  [DataType.integer]: {
    ...MaterialConfig.types.number,
    widgets: {
      [WidgetTypes.number]: {
        operators: [
          Operators.equal,
          Operators.greater,
          Operators.greater_or_equal,
          Operators.less,
          Operators.less_or_equal,
        ],
      },
    },
  },
  [DataType.string]: {
    ...MaterialConfig.types.text,
    widgets: {
      [WidgetTypes.text]: {
        operators: [
          Operators.equal,
          Operators.not_equal,
          Operators.begins_with,
          Operators.not_begins_with,
          Operators.contains,
          Operators.not_contains,
          Operators.in,
          Operators.not_in,
          Operators.is_empty,
          Operators.is_not_empty,
          Operators.is_null,
          Operators.is_not_null,
          Operators.regexp,
        ],
      },
    },
  },
  [DataType.boolean]: {
    ...MaterialConfig.types.boolean,
    widgets: {
      [WidgetTypes.boolean]: {
        operators: [Operators.equal, Operators.is_null, Operators.is_not_null],
      },
    },
  },
  [DataType.stringSelectize]: {
    ...MaterialConfig.types.select,
    widgets: {
      [WidgetTypes.select]: {
        operators: [
          Operators.in,
          Operators.not_in,
          Operators.is_null,
          Operators.is_not_null,
          Operators.contains,
          Operators.not_contains,
        ],
      },
    },
    defaultOperator: Operators.in,
  },
  [DataType.date]: {
    ...MaterialConfig.types.date,
    widgets: {
      [WidgetTypes.date]: {
        operators: [
          Operators.between,
          Operators.equal,
          Operators.greater,
          Operators.greater_or_equal,
          Operators.less,
          Operators.less_or_equal,
          Operators.is_null,
          Operators.is_not_null,
        ],
      },
    },
  },
  [DataType.dateNow]: {
    valueSources: ["value"],
    defaultOperator: Operators.equal,
    widgets: {
      [WidgetTypes.dateNow]: {
        operators: [
          Operators.between,
          Operators.equal,
          Operators.greater,
          Operators.greater_or_equal,
          Operators.less,
          Operators.less_or_equal,
          Operators.is_null,
          Operators.is_not_null,
        ],
      },
    },
  },
  [DataType.handbookItem]: {
    valueSources: ["value"],
    defaultOperator: Operators.in,
    widgets: {
      [WidgetTypes.handbookItem]: {
        operators: [
          Operators.in,
          Operators.not_in,
          Operators.is_null,
          Operators.is_not_null,
          Operators.contains,
          Operators.not_contains,
        ],
      },
    },
  },
  [DataType.afishaCity]: {
    valueSources: ["value"],
    defaultOperator: Operators.in,
    widgets: {
      [WidgetTypes.afishaCity]: {
        operators: [Operators.in, Operators.not_in],
      },
    },
  },
  [DataType.afishaTag]: {
    valueSources: ["value"],
    defaultOperator: Operators.in,
    widgets: {
      [WidgetTypes.afishaTag]: {
        operators: [Operators.in, Operators.not_in],
      },
    },
  },
  [DataType.afishaEvent]: {
    valueSources: ["value"],
    defaultOperator: Operators.in,
    widgets: {
      [WidgetTypes.afishaEvent]: {
        operators: [Operators.in, Operators.not_in],
      },
    },
  },
  [DataType.cryptaSegments]: {
    valueSources: ["value"],
    defaultOperator: Operators.in,
    widgets: {
      [WidgetTypes.cryptaSegments]: {
        operators: [Operators.in, Operators.not_in],
      },
    },
  },
  [DataType.musicGenre]: {
    valueSources: ["value"],
    defaultOperator: Operators.in,
    widgets: {
      [WidgetTypes.musicGenre]: {
        operators: [Operators.in, Operators.not_in],
      },
    },
  },
  [DataType.musicGenreCode]: {
    valueSources: ["value"],
    defaultOperator: Operators.in,
    widgets: {
      [WidgetTypes.musicGenreCode]: {
        operators: [Operators.in, Operators.not_in],
      },
    },
  },
  [DataType.musicGenreId]: {
    valueSources: ["value"],
    defaultOperator: Operators.in,
    widgets: {
      [WidgetTypes.musicGenreId]: {
        operators: [Operators.in, Operators.not_in],
      },
    },
  },
  [DataType.spam]: {
    valueSources: ["value"],
    defaultOperator: Operators.in,
    widgets: {
      [WidgetTypes.spam]: {
        operators: [Operators.in, Operators.not_in],
      },
    },
  },
  [DataType.spamType]: {
    valueSources: ["value"],
    defaultOperator: Operators.in,
    widgets: {
      [WidgetTypes.spamType]: {
        operators: [Operators.in, Operators.not_in],
      },
    },
  },
  [DataType.double]: {
    valueSources: ["value"],
    defaultOperator: Operators.equal,
    widgets: {
      [WidgetTypes.double]: {
        operators: [Operators.greater, Operators.less],
      },
    },
  },
  [DataType.gender]: {
    valueSources: ["value"],
    defaultOperator: Operators.equal,
    widgets: {
      [WidgetTypes.gender]: {
        operators: [Operators.equal],
      },
    },
  },
};
