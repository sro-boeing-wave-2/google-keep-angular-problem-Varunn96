import { checkList_Item } from './checkList_Item';
import { Label } from './Label';

export interface INote {
  'Id': number;
  'Title': string;
  'Text': string;
  'CheckList': checkList_Item[];
  'Labels': Label[];
  'isPinned': boolean;
}
