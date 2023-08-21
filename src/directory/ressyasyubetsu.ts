import { Directory } from '../type/ou';

export const Ressyasyubetsu: Directory = {
  children: [
    {
      description: `列車種別の名称です。種別の長さは少なくとも1文字以上である必要があります。`,
      examples: ['各駅停車'],
      format: 'string',
      key: 'Syubetsumei',
      multiple: false,
      optional: false,
      summary: '種別名',
      type: 'property',
    },
    {
      default: '',
      description: `列車種別の略称です。最大で半角6文字です。`,
      examples: ['各停'],
      format: 'string',
      key: 'Ryakusyou',
      multiple: false,
      optional: true,
      summary: '略称',
      type: 'property',
    },
    {
      default: '00000000',
      description: `時刻表ビューでの列車種別の文字色です。ダイヤグラムの列車情報の文字色もこの値が使用されます。規定値は黒です。`,
      examples: ['00000000'],
      format: 'color',
      key: 'JikokuhyouMojiColor',
      multiple: false,
      optional: true,
      summary: '時刻表の文字色',
      type: 'property',
    },
    {
      default: '0',
      description: `時刻表ビューでの列車種別のフォントです。規定値は\`0\`です。0以上、[\`JikokuhyouFont\`](../../DispProp/JikokuhyouFont)の要素数未満である必要があります。`,
      examples: ['0'],
      format: 'int',
      key: 'JikokuhyouFontIndex',
      multiple: false,
      optional: true,
      summary: '時刻表のフォント',
      type: 'property',
    },
    {
      description: `ダイヤグラムビューで列車を表す線の色です。`,
      examples: ['00000000'],
      format: 'color',
      key: 'DiagramSenColor',
      multiple: false,
      optional: false,
      ref: ['oud.1.02.05:DiagramEdit/DiagramEdit/entDed/CconvCentDed.cpp:524'],
      summary: 'ダイヤグラムの線の色',
      type: 'property',
    },
    {
      description: `ダイヤグラムビューで列車を表す線のスタイルです。

- \`SenStyle_Jissen\`: 実線
- \`SenStyle_Hasen\`: 破線
- \`SenStyle_Tensen\`: 点線
- \`SenStyle_Ittensasen\` 一点鎖線`,
      examples: [`SenStyle_Jissen`],
      format: 'string',
      key: 'DiagramSenStyle',
      multiple: false,
      optional: false,
      summary: 'ダイヤグラムの線スタイル',
      type: 'property',
    },
    {
      default: '0',
      description: `ダイヤグラムビューで列車を表す線の太さです。

- (省略): 細線
- \`1\`: 太線`,
      examples: ['1'],
      format: 'string',
      key: 'DiagramSenIsBold',
      multiple: false,
      optional: true,
      summary: 'ダイヤグラムの線太さ',
      type: 'property',
    },
    {
      default: 'EStopMarkDrawType_DrawOnStop',
      description: `ダイヤグラムビューで短時間停車駅に丸印で停車駅を描画するかどうかを指定します。
OuDiaのダイヤグラムビューでの停車駅明示がOFFの場合は、この設定より優先されて非表示になります。

- \`EStopMarkDrawType_DrawOnStop\`: 短時間停車駅に○を描画します。
- \`EStopMarkDrawType_Nothing\`: 常に描画しません。各駅停車などに適しています。
- \`EStopMarkDrawType_DrawOnPass\`: 通過駅に記号を描画します。OuDiaでは将来のために予約された値であり、使用されません。
`,
      examples: ['EStopMarkDrawType_DrawOnStop'],
      format: 'string',
      key: 'StopMarkDrawType',
      multiple: false,
      optional: true,
      summary: '停車駅の明示設定',
      type: 'property',
    },
  ],
  description: `列車種別の名称やスタイルです。路線には少なくとも1つの列車種別が必要です。

列車種別を追加・削除した場合は、すべての列車の種別インデックス([\`Ressya.Syubetsu\`](./Dia/Kudari/Ressya/Syubetsu))を更新する必要があります。`,
  key: 'Ressyasyubetsu',
  multiple: true,
  optional: false,
  ref: ['oud.1.02.05:DiagramEdit/DiagramEdit/entDed/CconvCentDed.cpp:649'],
  summary: '列車種別',
  type: 'directory',
};
