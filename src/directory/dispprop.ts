import { Directory } from '../type/ou';

export const DispProp: Directory = {
  children: [
    {
      default: `PointTextHeight=9;Facename=ＭＳ ゴシック`,
      description: `時刻表ビューでの横書きテキスト用書体を指定します。

最大8つまでのフォントを指定できます。

指定しない場合のデフォルト値は、次のとおりです

- 1,5,6,7,8番目は\`PointTextHeight=9;Facename=ＭＳ ゴシック\`です。
- 2番目は、\`PointTextHeight=9;Facename=ＭＳ ゴシック;Bold=1\`です。
- 3番目は、\`PointTextHeight=9;Facename=ＭＳ ゴシック;Italic=1\`です。
- 4番目は、\`PointTextHeight=9;Facename=ＭＳ ゴシック;Bold=1;Italic=1\`です。`,
      format: 'font',
      key: 'JikokuhyouFont',
      multiple: true,
      optional: true,
      summary: '時刻表ビューの横書き書体',
      type: 'property',
    },
    {
      default: 'PointTextHeight=9;Facename=@ＭＳ ゴシック',
      description: `時刻表ビューでの縦書きテキスト用書体を指定します。`,
      format: 'font',
      key: 'JikokuhyouVFont',
      multiple: false,
      optional: true,
      summary: '時刻表ビューの縦書き書体',
      type: 'property',
    },
    {
      description: 'ダイヤグラムビューでの駅名テキスト用書体を指定します。',
      examples: ['PointTextHeight=9;Facename=ＭＳ ゴシック'],
      format: 'font',
      key: 'DiaEkimeiFont',
      multiple: false,
      optional: false,
      summary: 'ダイヤグラムビューの駅名テキスト用書体',
      type: 'property',
    },
    {
      description: 'ダイヤグラムビューでの時刻テキスト用書体を指定します。',
      examples: ['PointTextHeight=9;Facename=ＭＳ ゴシック'],
      format: 'font',
      key: 'DiaJikokuFont',
      multiple: false,
      optional: false,
      summary: 'ダイヤグラムビューの時刻テキスト用書体',
      type: 'property',
    },
    {
      default: 'PointTextHeight=9;Facename=ＭＳ ゴシック',
      description: 'ダイヤグラムビューでの列車テキスト用書体を指定します。',
      format: 'font',
      key: 'DiaRessyaFont',
      multiple: false,
      optional: true,
      summary: 'ダイヤグラムビューの列車テキスト用書体',
      type: 'property',
    },
    {
      description: 'コメントビューでの書体を指定します。',
      examples: ['PointTextHeight=9;Facename=ＭＳ ゴシック'],
      format: 'font',
      key: 'CommentFont',
      multiple: false,
      optional: false,
      summary: 'コメントビューの書体',
      type: 'property',
    },
    {
      description: 'ダイヤグラムビューでの文字色を指定します。',
      examples: ['00000000'],
      format: 'color',
      key: 'DiaMojiColor',
      multiple: false,
      optional: false,
      summary: 'ダイヤグラムビューの文字色',
      type: 'property',
    },
    {
      description: 'ダイヤグラムビューでの背景色を指定します。',
      examples: ['00FFFFFF'],
      format: 'color',
      key: 'DiaHaikeiColor',
      multiple: false,
      optional: false,
      summary: 'ダイヤグラムビューの背景色',
      type: 'property',
    },
    {
      description: 'ダイヤグラムビューでの列車線の色を指定します。',
      examples: ['00000000'],
      format: 'color',
      key: 'DiaRessyaColor',
      multiple: false,
      optional: false,
      summary: 'ダイヤグラムビューの列車線の色',
      type: 'property',
    },
    {
      description: 'ダイヤグラムビューでの縦横の軸色を指定します。',
      examples: ['00000000'],
      format: 'color',
      key: 'DiaJikuColor',
      multiple: false,
      optional: false,
      summary: 'ダイヤグラムビューの縦横軸色',
      type: 'property',
    },
    {
      default: '6',
      description: `ダイヤグラムビューでの駅名欄の幅を、全角文字数単位で指定します。

最小値は1、最大値は29です。`,
      format: 'int',
      key: 'EkimeiLength',
      multiple: false,
      optional: true,
      summary: 'ダイヤグラムビューの駅名欄の幅',
      type: 'property',
    },
    {
      default: '5',
      description: `時刻表ビューでの列車欄の幅を、半角文字数単位で指定します。

最小値は4、最大値は8です。`,
      format: 'int',
      key: 'JikokuhyouRessyaWidth',
      multiple: false,
      optional: true,
      summary: '時刻表ビューの列車欄の幅',
      type: 'property',
    },
  ],
  key: 'DispProp',
  multiple: false,
  optional: false,
  ref: [
    'oud.1.02.05:DiagramEdit/DiagramEdit/DedRosenFileData/CconvCdDedDispProp.cpp:263',
    'oud.1.02.05:DiagramEdit/DiagramEdit/DedRosenFileData/CdDedDispProp.h:90',
  ],
  summary: '表示設定',
  type: 'directory',
};
