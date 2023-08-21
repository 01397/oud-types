import { Directory } from '../type/ou';

export const Ressya: Directory = {
  children: [
    {
      description: `列車の方向を表します。親オブジェクトである列車コンテナと方向が一致している必要があります。

- \`Kudari\`: 下り列車
- \`Nobori\`: 上り列車`,
      format: 'string',
      key: 'Houkou',
      multiple: false,
      optional: false,
      summary: '列車方向',
      type: 'property',
    },
    {
      default: '0',
      description: `列車の種別を[\`Ressyasyubetsu\`](../../../Ressyasyubetsu)のインデックスで指定します。

0以上、列車種別数未満である必要があります。`,
      examples: ['0'],
      format: 'int',
      key: 'Syubetsu',
      multiple: false,
      optional: true,
      summary: '列車種別インデックス',
      type: 'property',
    },
    {
      default: '',
      description: '列車番号',
      examples: ['A0001M'],
      format: 'string',
      key: 'Ressyabangou',
      multiple: false,
      optional: true,
      summary: '列車番号',
      type: 'property',
    },
    {
      default: '',
      description: '列車名',
      examples: ['特急れいじ'],
      format: 'string',
      key: 'Ressyamei',
      multiple: false,
      optional: true,
      summary: '列車名',
      type: 'property',
    },
    {
      default: '',
      description: '号数',
      examples: ['1'],
      format: 'string',
      key: 'Gousuu',
      multiple: false,
      optional: true,
      summary: '号数',
      type: 'property',
    },
    {
      description: `各駅の時刻や駅扱いを表します。

### 書式

書式は、次のようにカンマ(\`,\`)区切りで各駅を表します。駅時刻の個数は、駅([\`Eki\`](../../../Eki))の個数以下である必要があります。

また、末尾の連続する「運行なし」は省略できます。これは終着駅以降を省略できることを意味します。

- \`<駅時刻>,<駅時刻>,<駅時刻>, ...\`

\`<駅時刻>\`は次のいずれかです。

- \`<駅扱い>\`
- \`<駅扱い>;<着時刻>/\`
- \`<駅扱い>;<着時刻>/<発時刻>\`
- \`<駅扱い>;<発時刻>\`

### 駅扱い

\`<駅扱い>\`は次のいずれかです。

- (空文字列): 運行なし (発時刻と着時刻は無効)
- \`1\`: 停車
- \`2\`: 通過
- \`3\`: 経由なし (発時刻と着時刻は無効)

### 時刻

\`<着時刻>\`および\`<発時刻>\`は次のいずれかです。

- \`HHMMSS\`
- \`HHMM\`
- \`HH:MM:SS\`
- \`HH:MM\`

\`HH\`は時を表す1桁または2桁の整数です。0以上23以下である必要があります。1桁目を0または半角スペースで埋めても良いです。例: \`8\`, \`13\`, \`08\`, \` 8\`

\`MM\`は分を表す2桁の整数です。0以上59以下である必要があります。例: \`00\`, \`59\`

\`SS\`は秒を表す2桁の整数です。0以上59以下である必要があります。例: \`00\`, \`59\`

秒を省略した場合、0として扱われます。

      `,
      examples: [',,,,1;900,2,2,2,1;925/927;2,2,2,1;1015/1016,2,2,1:1037/'],
      format: 'string',
      key: 'EkiJikoku',
      multiple: false,
      optional: false,
      summary: '各駅時刻と駅扱い',
      type: 'property',
    },
    {
      default: '',
      description: '備考',
      examples: ['休日運休'],
      format: 'string',
      key: 'Bikou',
      multiple: false,
      optional: true,
      summary: '備考',
      type: 'property',
    },
  ],
  key: 'Ressya',
  multiple: true,
  optional: true,
  ref: ['oud.1.02.05:DiagramEdit/DiagramEdit/entDed/CconvCentDed.cpp:1122'],
  summary: '列車',
  type: 'directory',
};
