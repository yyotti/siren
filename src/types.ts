export enum ItemType {
  WEAPON, // 武器
  SHIELD, // 盾
  BRACELET, // 腕輪
  SCROLL, // 巻物
  GRASS, // 草・種
  VASE, // 壺
  CANE, // 杖
}

export enum ItemStatus {
  NORMAL, // 通常
  GOOD, // 祝福
  BAD, // 呪い/封印
}

export type Item = {
  type: ItemType,
  name: string,
  buyPrice: number,
  sellPrice: number,
  minCount: number,
  maxCount: number,
}
