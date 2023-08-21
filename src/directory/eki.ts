import { Directory, Property } from '../type/ou';

const DiagramRessyajouhouHyouji: Property = {
  default: '',
  description: `ダイヤグラム上で列車情報を表示するかどうかを指定します。

以下の値が指定可能です。
- (省略): 始発駅の場合に表示する。
- \`DiagramRessyajouhouHyouji_Anytime\`: 常に表示する。
- \`DiagramRessyajouhouHyouji_Not\`: 表示しない。
`,
  examples: ['DiagramRessyajouhouHyouji_Not'],
  format: 'string',
  key: '',
  multiple: false,
  optional: true,
  summary: 'ダイヤグラム列車情報表示',
  type: 'property',
};

export const Eki: Directory = {
  children: [
    {
      default: '',
      description: `駅名を表します。`,
      examples: ['渋谷'],
      format: 'string',
      key: 'Ekimei',
      multiple: false,
      optional: true,
      summary: '駅名',
      type: 'property',
    },
    {
      description: `駅時刻の形式を表します。

以下の値が指定可能です。

- \`Jikokukeisiki_Hatsu\`: 発時刻のみ表示。ただし終着駅では着時刻のみ表示します。(規定値)
- \`Jikokukeisiki_HatsuChaku\`: 発着時刻の両方を表示。始発駅や終着駅でも両方を表示します。
- \`Jikokukeisiki_KudariChaku\`: 下り列車では着時刻を、上り列車では発時刻を表示。ただし終着駅では着時刻のみ表示します。
- \`Jikokukeisiki_NoboriChaku\`: 下り列車では発時刻を、上り列車では発時刻を表示。ただし終着駅では着時刻のみ表示します。
`,
      examples: ['Jikokukeisiki_Hatsu'],
      format: 'string',
      key: 'Ekijikokukeisiki',
      multiple: false,
      optional: false,
      summary: '駅時刻形式',
      type: 'property',
    },
    {
      description: `駅の規模を表します。

以下の値が指定可能です。

- \`Ekikibo_Ippan\`: 一般駅。(規定値)
- \`Ekikibo_Syuyou\`: 主要駅。ダイヤグラムビューで罫線が太くなります。時刻表ビューの空欄での表記が「・・」 から「----」に変更されます。
`,
      examples: ['Ekikibo_Syuyou'],
      format: 'string',
      key: 'Ekikibo',
      multiple: false,
      optional: false,
      summary: '駅規模',
      type: 'property',
    },
    {
      default: '',
      description: `下り方向の下に、太い境界線を描画するかどうかを示します。

駅ビューと時刻表ビューの罫線に適用されます。ダイヤグラムビューの罫線の設定は[\`Ekikibo\`](./Ekikibo)で指定します。

- (省略): 境界線なし
- \`1\`: 境界線あり
`,
      examples: ['1'],
      format: 'bool',
      key: 'Kyoukaisen',
      multiple: false,
      optional: true,
      summary: '境界線',
      type: 'property',
    },
    {
      ...DiagramRessyajouhouHyouji,
      key: 'DiagramRessyajouhouHyoujiKudari',
    } satisfies Property,
    {
      ...DiagramRessyajouhouHyouji,
      key: 'DiagramRessyajouhouHyoujiNobori',
    } satisfies Property,
  ],
  description: `駅を表します。0個以上の複数の駅を列挙することができます。

駅の数と、すべての列車が持つ駅時刻([\`EkiJikoku\`](../Dia/Kudari/Ressya/EkiJikoku))の数は一致している必要があります。`,
  key: 'Eki',
  multiple: true,
  optional: true,
  ref: ['oud.1.02.05:DiagramEdit/DiagramEdit/entDed/CconvCentDed.cpp:254'],
  summary: '駅情報',
  type: 'directory',
};
