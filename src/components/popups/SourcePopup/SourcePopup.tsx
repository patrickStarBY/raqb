import "./SourcePopup.scss";

import { ModalProps, Typography } from "@material-ui/core";
import React, { useMemo, useState, useEffect } from "react";
import { Close } from "@material-ui/icons";

import { SourceAccordion } from "../../SourceAccordion";
import { BaseCheckbox } from "../../ui/BaseCheckbox";
import { BaseInput } from "../../ui/BaseInput";
import { BasePopup } from "../../ui/BasePopup";
import { ISource, ISourceServices } from "../../../types";

import {
  POPUP_NOUPDATE,
  POPUP_OTHER,
  POPUP_SEARCH,
  POPUP_SEARCH_FIELD_PLACEHOLDER,
  POPUP_SEARCH_PLACEHOLDER,
  POPUP_SOURCE,
  SOURCE_TITLE,
} from "./SourcePopup.constants";

type TVariantSource =
  | {
      multi: true;
      onSelected: (source: ISource[]) => void;
    }
  | {
      multi?: false;
      onSelected: (source: ISource) => void;
    };

type TSourcePopup = {
  source: ISource[];
  selected?: ISource[];
  title?: string;
  main?: boolean;
  getItems?: () => Promise<void>;
} & TVariantSource &
  Omit<ModalProps, "children">;

export const SourcePopup: React.FC<TSourcePopup> = ({
  selected,
  multi,
  source,
  title,
  main,
  onSelected,
  getItems,
  ...props
}) => {
  const [name, setName] = useState<string>("");
  const [field, setField] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);

  const getItem = (key: string, defaultValue: string): string => {
    const item = window.sessionStorage.getItem(
      main ? `main-sourcePopup-${key}` : `sourcePopup-${key}`
    );
    return item || defaultValue;
  };

  const setItem = (key: string, value: string): void => {
    window.sessionStorage.setItem(
      main ? `main-sourcePopup-${key}` : `sourcePopup-${key}`,
      value
    );
  };

  const selectHandler = (item: ISource) => {
    if (!multi) {
      (onSelected as (source: ISource) => void)(item);
    }
  };

  const filteredSources = useMemo((): ISourceServices => {
    return source
      .filter(
        (item) =>
          !name ||
          item.name.toLowerCase().includes(name.toLowerCase()) ||
          item.id.toString().toLowerCase().includes(name.toLowerCase()) ||
          item.ytPath.toLowerCase().includes(name.toLowerCase()) ||
          item.desc.toLowerCase().includes(name.toLowerCase())
      )
      .filter(
        (item) =>
          !field ||
          item.attr.some((attr) =>
            attr.name.toLowerCase().includes(field.toLowerCase())
          )
      )
      .filter((item) => checked || item.isAutoUpdate)
      .reduce<ISourceServices>((acc, current) => {
        if (current.service) {
          if (acc[current.service]) {
            acc[current.service].push(current);
          } else {
            acc[current.service] = [current];
          }
        } else if (acc[POPUP_OTHER]) {
          acc[POPUP_OTHER].push(current);
        } else {
          acc[POPUP_OTHER] = [current];
        }
        return acc;
      }, {});
  }, [source, checked, name, field]);

  useEffect(() => {
    setName(getItem("name", ""));
    setField(getItem("field", ""));
    setChecked(JSON.parse(getItem("checked", "false")));
  }, []);

  useEffect(() => {
    if (props.open) {
      setName(getItem("name", ""));
      setField(getItem("field", ""));
      setChecked(JSON.parse(getItem("checked", "false")));
    }
  }, [props.open]);

  return (
    <BasePopup className="source-popup" long {...props}>
      <>
        <div className="source-popup__header">
          <Typography className="source-popup__title" variant="h4">
            {title || SOURCE_TITLE}
          </Typography>
          <Close
            className="source-popup__close"
            onClick={(e) => props.onClose && props.onClose(e, "escapeKeyDown")}
          />
        </div>
        <div className="source-popup__container">
          <div className="source-popup__left">
            <Typography variant="h5" className="source-popup__caption">
              {POPUP_SEARCH}
            </Typography>
            <BaseInput
              id="search_name"
              name="search_name"
              className="source-popup__field"
              label={POPUP_SEARCH_PLACEHOLDER}
              fullWidth
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setItem("name", e.target.value);
              }}
            />
            <BaseInput
              id="search_field"
              name="search_field"
              className="source-popup__field"
              label={POPUP_SEARCH_FIELD_PLACEHOLDER}
              fullWidth
              value={field}
              onChange={(e) => {
                setField(e.target.value);
                setItem("field", e.target.value);
              }}
            />
            <BaseCheckbox
              label={POPUP_NOUPDATE}
              checked={checked}
              onChange={(e) => {
                setChecked(e.target.checked);
                setItem("checked", e.target.checked.toString());
              }}
              className="source-popup__checkbox"
            />
          </div>
          <div className="source-popup__right">
            <Typography variant="h5" className="source-popup__caption">
              {POPUP_SOURCE}
            </Typography>
            <SourceAccordion
              items={filteredSources}
              className="source-popup__accordion"
              onSelected={selectHandler}
              multi={multi}
              selected={selected}
              getItems={getItems}
            />
          </div>
        </div>
      </>
    </BasePopup>
  );
};
