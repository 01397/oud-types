import { Directory } from '../type/ou';
import { DispProp } from './dispprop';
import { Rosen } from './rosen';

export const doc: Directory = {
  children: [
    {
      description: `OuDiaファイルのバージョンを表します。

以下は、OuDiaやOudiaSecondで用いられているバージョンの一覧です。

- \`OuDia.1.02\` (OuDia v1.02.05, OuDiaSecond v1.00)
- \`OuDiaSecond.1.00\` (OuDiaSecond v1.01)
- \`OuDiaSecond.1.01\` (OuDiaSecond v1.02)
- \`OuDiaSecond.1.03\` (OuDiaSecond v1.03)
- \`OuDiaSecond.1.04\` (OuDiaSecond v1.04)
- \`OuDiaSecond.1.05\` (OuDiaSecond v1.04.04)
- \`OuDiaSecond.1.07\` (OuDiaSecond v2.00.05)
- \`OuDiaSecond.1.08\` (OuDiaSecond v2.02.03)
- \`OuDiaSecond.1.09\` (OuDiaSecond v2.03)
- \`OuDiaSecond.1.10\` (OuDiaSecond v2.05)
- \`OuDiaSecond.1.11\` (OuDiaSecond v2.06)
- \`OuDiaSecond.1.12\` (OuDiaSecond v2.06.02)
- \`OuDiaSecond.1.13\` (OuDiaSecond v2.06.05)

        `,
      examples: ['OuDia.1.02'],
      format: 'string',
      key: 'FileType',
      multiple: false,
      optional: false,
      ref: [
        'oud.1.02.05:DiagramEdit/DiagramEdit/DedRosenFileData/CconvCDedRosenFileData.h:137',
      ],
      summary: 'ファイル形式',
      type: 'property',
    },
    Rosen,
    DispProp,
    {
      description:
        'ファイルを作成したアプリケーション名を記述します。特に決まったフォーマットはなく、開発者が任意の文字列を指定します。',
      examples: ['OuDia Ver. 1.02.02'],
      format: 'string',
      key: 'FileTypeAppComment',
      multiple: false,
      optional: false,
      summary: 'ファイルを生成したアプリケーション',
      type: 'property',
    },
  ],
  key: '',
  multiple: false,
  optional: false,
  ref: [
    'oud.1.02.05:DiagramEdit/DiagramEdit/DedRosenFileData/CconvCDedRosenFileData.cpp:173',
  ],
  summary: '',
  type: 'directory',
};
