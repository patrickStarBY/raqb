export interface ISource {
  attr: IAttr[];
  desc: string;
  id: number;
  isActive: boolean;
  joinFieldNames: string[];
  name: string;
  ytPath: string;
  uiPath: string;
  service: string;
  starTrackTask: string;
  mainSource: boolean;
  isAutoUpdate: boolean;
  documentationUrl: string;
  title: string;
}

export interface IAttr {
  active: boolean;
  controlName: string;
  data: string;
  description: string;
  groupName: string;
  groupTitle: string;
  id: string;
  name: string;
  title: string;
}

export interface ISourceServices {
  [key: string]: ISource[];
}
