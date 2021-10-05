import "./SourceAccordion.scss";

import {
  Accordion,
  AccordionDetails,
  AccordionProps,
  AccordionSummary,
  Link,
  Typography,
  Tooltip,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import cn from "classnames";
import React, { useEffect, useState } from "react";
import { BaseButton } from "../ui/BaseButton";
import { ISource, ISourceServices } from "../../types";
import { useCommonStyles } from "../../styles/styles";

import {
  DOCUMENTATION,
  EMPTY,
  MULTI_TEXT_BUTTON,
  MULTI_TEXT_BUTTON_SELECT,
  SETTING,
  TABLE,
  TASK,
  TEXT_BUTTON,
  TEXT_BUTTON_SELECT,
} from "./SourceAccordion.constants";

type TSourceAccordion = {
  items: ISourceServices;
  onSelected: (item: ISource) => void;
  multi?: boolean;
  selected?: ISource[];
  getItems?: () => Promise<void>;
} & Omit<AccordionProps, "children">;

type TAccordionItem = {
  idx: string;
} & TSourceAccordion;

const AccordionItem: React.FC<TAccordionItem> = ({
  items,
  idx,
  multi,
  selected,
  onSelected,
  getItems,
  ...props
}) => {
  const styles = useCommonStyles();

  const [open, setOpen] = useState<boolean>(true);

  useEffect(() => {
    if (!open) setOpen(true);
  }, [items]);

  const getTitle = (item: ISource): string => {
    const isCheck = selected?.some((i) => i.id === item.id);
    if (multi) {
      if (isCheck) return MULTI_TEXT_BUTTON_SELECT;
      return MULTI_TEXT_BUTTON;
    }

    if (isCheck) return TEXT_BUTTON_SELECT;
    return TEXT_BUTTON;
  };

  return (
    <Accordion
      className="source-accordion__container"
      {...props}
      expanded={open}
      onChange={() => setOpen((prev) => !prev)}
    >
      <AccordionSummary
        id={idx}
        expandIcon={<ExpandMoreIcon />}
        className="source-accordion__header"
      >
        <Typography
          className="source-accordion__title"
          variant="h5"
          component="p"
        >
          {idx}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="source-accordion__content">
        {items[idx].map((item) => (
          <div key={item.id} className="source-accordion__item">
            <Tooltip
              title={item.attr.map((field) => (
                <div key={field.id}>{field.name}</div>
              ))}
              classes={{ tooltip: styles.fontSize16 }}
              arrow
            >
              <div className="source-accordion__left-side">
                {item.desc && (
                  <Typography
                    className="source-accordion__text"
                    variant="h5"
                    component="p"
                  >
                    {item.desc}
                  </Typography>
                )}
                {item.name && (
                  <Typography
                    className="source-accordion__text"
                    variant="h5"
                    component="p"
                  >
                    {item.name}
                  </Typography>
                )}
              </div>
            </Tooltip>
            {item.ytPath && (
              <Link
                href={`https:/`}
                className="source-accordion__link"
                underline="none"
                variant="h5"
                target="_blank"
              >
                {TABLE}
              </Link>
            )}
            {item.documentationUrl && (
              <Link
                href={item.documentationUrl}
                className="source-accordion__link"
                underline="none"
                variant="h5"
                target="_blank"
              >
                {DOCUMENTATION}
              </Link>
            )}
            {item.starTrackTask && (
              <Link
                href={`https:/`}
                className="source-accordion__link"
                underline="none"
                variant="h5"
                target="_blank"
              >
                {TASK}
              </Link>
            )}
            <Link
              href={item.uiPath}
              className="source-accordion__link"
              underline="none"
              variant="h5"
              target="_blank"
            >
              {SETTING}
            </Link>
            <BaseButton
              type="button"
              className="source-accordion__button"
              color="primary"
              variant="contained"
              size="large"
              onClick={() => {
                onSelected(item);
                if (getItems) {
                  getItems();
                }
              }}
              disabled={!multi && selected?.some((i) => i.id === item.id)}
            >
              {getTitle(item)}
            </BaseButton>
          </div>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export const SourceAccordion: React.FC<TSourceAccordion> = ({
  className,
  items,
  ...props
}) => {
  return (
    <div className={cn("source-accordion", className)}>
      {Object.keys(items).length ? (
        Object.keys(items)
          .sort()
          .map((key) => (
            <AccordionItem items={items} key={key} idx={key} {...props} />
          ))
      ) : (
        <Typography
          className="source-accordion__text"
          variant="h5"
          component="p"
        >
          {EMPTY}
        </Typography>
      )}
    </div>
  );
};
