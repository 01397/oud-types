import { Directory } from '../type/ou';
import { Ressya } from './ressya';

export const Dia: Directory = {
  children: [
    {
      description: `ダイヤの名称です。空文字列は許容されません。また、路線の中で一意の名称である必要があります。`,
      examples: ['平日ダイヤ'],
      format: 'string',
      key: 'DiaName',
      multiple: false,
      optional: false,
      summary: 'ダイヤの名称',
      type: 'property',
    },
    {
      children: [Ressya],
      key: 'Kudari',
      multiple: false,
      optional: false,
      summary: '下りダイヤ',
      type: 'directory',
    },
    {
      children: [Ressya],
      key: 'Nobori',
      multiple: false,
      optional: false,
      summary: '上りダイヤ',
      type: 'directory',
    },
  ],
  key: 'Dia',
  multiple: true,
  optional: true,
  ref: ['oud.1.02.05:DiagramEdit/DiagramEdit/entDed/CconvCentDed.cpp:1460'],
  summary: 'ダイヤ',
  type: 'directory',
};
