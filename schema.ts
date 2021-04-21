export interface ItemInterace {
  key?: string;
  title: string;
  icon?: Object;
  disabled?: boolean;
  hidden?: boolean;
  childern?: Array<ItemInterace>;
};

export interface PropsInterface {
  id?: string;
  name?: string;
  value?: Array<string>;
  dataSource: Array<ItemInterace>;
  onChange?: any;
  onBlur?: any;
}

export interface StateInterface {
  _value: Array<string>;
}