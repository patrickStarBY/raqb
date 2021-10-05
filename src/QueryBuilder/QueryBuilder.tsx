import "./QueryBuilder.scss";

import { Typography } from "@material-ui/core";
import cn from "classnames";
import React, { useState, useEffect } from "react";
import {
  Builder,
  BuilderProps,
  Config,
  ImmutableTree,
  JsonGroup,
  Query,
  Utils as QbUtils,
} from "react-awesome-query-builder";

import { TITLE } from "./QueryBuilder.constants";

type TQueryBuilder = {
  config: Config;
  value: JsonGroup;
  onChange(tree: ImmutableTree): void;
} & Omit<React.HtmlHTMLAttributes<HTMLDivElement>, "onChange">;

const QueryBuilderComponent: React.FC<TQueryBuilder> = ({
  className,
  config,
  value,
  onChange,
}) => {
  const [tree, setTree] = useState<ImmutableTree>(
    QbUtils.checkTree(QbUtils.loadTree(value), config)
  );

  const onChangeTree = (immutableTree: ImmutableTree) => {
    setTree(immutableTree);

    onChange(immutableTree);
  };

  useEffect(() => {
    setTree(QbUtils.checkTree(QbUtils.loadTree(value), config));
  }, [value, config]);

  const renderBuilder = (props: BuilderProps) => (
    <div className="query-builder__container">
      <div className="query-builder__lite qb-lite">
        <Builder {...props} />
      </div>
    </div>
  );

  return (
    <div className={cn("query-builder", className)}>
      <Typography variant="h5">{TITLE}</Typography>
      <Query
        {...config}
        value={tree}
        onChange={onChangeTree}
        renderBuilder={renderBuilder}
      />
    </div>
  );
};

export const QueryBuilder = React.memo(QueryBuilderComponent);
