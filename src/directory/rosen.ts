import { Directory } from '../type/ou';
import { Dia } from './dia';
import { Eki } from './eki';
import { Ressyasyubetsu } from './ressyasyubetsu';

export const Rosen: Directory = {
  children: [
    {
      default: '',
      description: '路線の名称です。',
      examples: ['近鉄大阪線'],
      format: 'string',
      key: 'Rosenmei',
      multiple: false,
      optional: true,
      summary: '路線名',
      type: 'property',
    },
    {
      format: 'string',
      key: 'KudariDiaAlias',
      multiple: false,
      optional: false,
      summary: '下りダイヤの別名',
      support: [{ format: 'oud2', min: 1.3 }],
      type: 'property',
    },
    Eki,
    Ressyasyubetsu,
    Dia,
    {
      default: '00:00:00',
      description: `ダイヤグラムの起点時刻を表します。書式は[\`Ressya.EkiJikoku\`](./Dia/Kudari/Ressya/EkiJikoku)の時刻と共通です。`,
      examples: ['300'],
      format: 'time',
      key: 'KitenJikoku',
      multiple: false,
      optional: true,
      summary: '起点時刻',
      type: 'property',
    },
    {
      default: '60',
      description: `列車設定のない駅間の、ダイヤグラムビュー上での縦方向の幅を『ダイヤグラムエンティティY座標』単位(秒)で指定します。`,
      examples: ['60'],
      format: 'int',
      key: 'DiagramDgrYZahyouKyoriDefault',
      multiple: false,
      optional: true,
      summary: 'ダイヤグラムビューにおける列車設定のない駅間での縦方向の幅。',
      type: 'property',
    },
    {
      default: '',
      format: 'string',
      key: 'Comment',
      multiple: false,
      optional: true,
      summary: 'コメント',
      type: 'property',
    },
  ],
  key: 'Rosen',
  multiple: false,
  optional: false,
  ref: ['oud.1.02.05:DiagramEdit/DiagramEdit/entDed/CconvCentDed.cpp:1588'],
  summary: '路線',
  type: 'directory',
};
