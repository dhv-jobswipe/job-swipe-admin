import React from 'react';

export type IColumTable = {
  key: string;
  header: string;
  cell: (_row: any) => React.JSX.Element;

  isSelectedKey: boolean;
  isFixed: boolean;
  isHide: boolean;
  enableHiding: boolean;
};
