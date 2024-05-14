// git commit -m "PBL-848 set up base"

import React from 'react';

export type IColumTable = {
  key: string;
  header: string;
  cell: (_row: any) => React.JSX.Element;

  isSelectedKey: boolean;
  isFixed: boolean;
  isHide: boolean;
  enableSort: boolean;
  enableHiding: boolean;
};
