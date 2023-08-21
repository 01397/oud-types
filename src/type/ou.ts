import { Format } from './value';

interface Support {
  format: 'oud' | 'oud2';
  min?: number;
  max?: number;
}

type Base = {
  key: string;
  summary: string;
  /**
   * Markdown形式です。
   */
  description?: string;
  support?: Support[];
  multiple: boolean;
  ref?: string[];
};

/**
 * Ouのディレクトリ
 */
export type Directory = Base & {
  type: 'directory';
  children: (Directory | Property)[];
  optional: boolean;
};

/**
 * Ouのプロパティ
 */
export type Property = Base & {
  type: 'property';
  format: Format;
  examples?: string[];
} & (
    | {
        optional: false;
      }
    | {
        optional: true;
        default: string;
      }
  );
