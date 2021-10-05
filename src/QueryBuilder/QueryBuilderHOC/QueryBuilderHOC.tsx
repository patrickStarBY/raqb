// Компонент обертка для кастомных элементов query builder
import React from 'react';

export const QueryBuilderHOC = <T,>(
  props: (React.Attributes & T) | undefined,
  Component: React.ComponentType<T>,
): React.Factory<T> => () => (props ? <Component {...props} /> : <></>);
