import "./QueryBuilderField.scss";

import { Typography } from "@material-ui/core";
import cn from "classnames";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { FieldItem, FieldProps } from "react-awesome-query-builder";
import MaterialFieldSelect from "react-awesome-query-builder/lib/components/widgets/material/core/MaterialFieldSelect";
import { SourcePopup } from "../../components/popups/SourcePopup";
import { BaseButton } from "../../components/ui/BaseButton";
import { QueryBuilderContext } from "../../contexts";
import { ISource } from "../../types";

import { SELECT_SOURCE } from "../QueryBuilder.constants";
import { POPUP_TITLE } from "./QueryBuilderField.constants";

const FieldComponent: React.FC<FieldProps> = ({ selectedKey, ...props }) => {
  const { sources, joinFieldName, getItems, dialogHandler } =
    useContext(QueryBuilderContext);

  const [open, setOpen] = useState<boolean>(false);
  const [selectSource, setSelectSource] = useState<ISource | null>(null);
  const [items, setItems] = useState<FieldItem[]>([]);

  const selectHandler = (source: ISource) => {
    setOpen(false);
    setSelectSource(source);

    setItems(
      (props.items as unknown as FieldItem[])
        .filter((item) => item.key.includes(`${source.id}_${source.name}`))
        .sort((a, b) => (a.label > b.label ? 1 : -1))
    );
  };

  const FieldTag = useMemo(
    () => (selectSource?.uiPath ? "a" : "div"),
    [selectSource]
  );

  useEffect(() => {
    if (!selectedKey) return;
    const [id, name] = selectedKey.split(/_(.*)/g, 2);
    if (!id && !name) return;
    const currentSource = sources.find(
      (source: any) => name.includes(source.name) && id === source.id.toString()
    );

    if (currentSource) {
      selectHandler(currentSource);

      if (!currentSource.joinFieldNames.includes(joinFieldName)) {
        dialogHandler({
          open: true,
          title: "err",
          text: "err",
          status: "error",
        });
      }
    }
  }, []);

  return (
    <>
      <div className="builder-field">
        {selectSource ? (
          <FieldTag
            className="builder-field__name"
            href={selectSource.uiPath ? selectSource.uiPath : undefined}
            target={selectSource.uiPath ? "_blank" : undefined}
          >
            <Typography
              className={cn(
                "builder-field__title",
                selectSource.desc && "builder-field__title_bold"
              )}
              variant="h5"
              component="p"
              color="primary"
            >
              {selectSource.desc || selectSource.name}
            </Typography>
            {selectSource.desc ? (
              <Typography
                className="builder-field__title"
                variant="h5"
                component="p"
                color="primary"
              >
                {selectSource.name}
              </Typography>
            ) : null}
          </FieldTag>
        ) : (
          <BaseButton
            color="primary"
            variant="contained"
            onClick={() => setOpen(true)}
          >
            {SELECT_SOURCE}
          </BaseButton>
        )}
      </div>

      {selectSource ? (
        <div className="builder-field__operator">
          <MaterialFieldSelect
            selectedKey={selectedKey}
            {...props}
            items={items}
          />
        </div>
      ) : null}
      <SourcePopup
        open={open}
        getItems={getItems}
        onClose={() => setOpen(false)}
        onSelected={selectHandler}
        source={sources}
        title={POPUP_TITLE}
      />
    </>
  );
};

export const QueryBuilderField = React.memo(FieldComponent);
