import React from 'react';

export type IColumTable = {
  key: string;
  header: string;
  cell: (_row: any) => React.JSX.Element;

  isFixed: boolean;
  isChecked?: boolean;
  isHide: boolean;
  enableHiding: boolean;
};
