// @ts-nocheck
import "./BaseSelect.scss";

import { MenuItem, TextFieldProps } from "@material-ui/core";
import cn from "classnames";
import React from "react";
import { BaseInput } from "../../../components/ui/BaseInput";
import { SelectItems } from "../../../types";

type TBaseSelect = {
  items: SelectItems;
} & TextFieldProps;

export const BaseSelect: React.FC<TBaseSelect> = ({
  className,
  items,
  ...props
}) => (
  <BaseInput {...props} className={cn("base-select", className)} select>
    {items.map((item) => (
      <MenuItem
        disabled={item.disabled}
        value={item.value}
        key={item.value}
        className="base-select__item"
      >
        {item.title}
      </MenuItem>
    ))}
  </BaseInput>
);
