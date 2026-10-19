export const cardContent = {
  documentTitle: '雪幕之下 · 圣诞来信',
  documentDescription: '一座藏在云海里的木偶剧场，和一封只为你打开的圣诞来信。',
  cover: '圣诞来信',
  decorative: {
    innerMark: 'A LITTLE WINTER THEATRE',
    waxMonogram: '煮酒',
  },
  hints: {
    sealed: '轻触任意位置，启动木制机关',
    revealing: '移动光芒，慢慢读完这封信',
    keyboard: '按 Enter 或空格键，也可以开启剧场',
  },
  letter: {
    salutation: '亲爱的你：',
    birthday: '圣诞快乐。❄',
    wishes: [
      '当冬夜的风吹过窗沿，愿你仍能听见心里细小而明亮的声音。',
      '愿每一片雪花都替你收藏一点温柔；每一盏远处的灯，都提醒你世界仍有值得奔赴的地方。',
      '如果这一年有些漫长，就让今天成为一段短暂的休息。把烦恼放在门外，把热茶、旧歌和喜欢的人留在身边。',
      '愿你不必总是勇敢，也不必时时闪耀。偶尔停下来，发呆、散步、看云，都是认真生活的方式。',
      '愿新的一年里，你仍然保有好奇，拥有选择的自由，也有重新出发的勇气。',
      '而无论你此刻身在何处，都愿这封小小的来信，像一座亮着灯的木偶剧场，替你留住一小片安静的冬夜。',
    ],
    signature: '—— 愿你被冬日温柔以待',
    date: 'Merry Christmas · 12.25',
  },
  finale: {
    title: '愿你平安喜乐',
    wishes: ['愿灯火长明，', '愿每一次出发，都有温柔回响。'],
    footer: 'WITH LOVE · THIS CHRISTMAS',
  },
  controls: {
    continue: '走进下一幕',
    continueAria: '读完这封信，走进下一幕',
    replay: '重新开启剧场',
    soundOn: '声音：开',
    soundOff: '声音：关',
    soundOnAria: '关闭贺卡声音',
    soundOffAria: '开启贺卡声音',
    sealAria: '开启圣诞木偶剧场',
    revealAria: '启动木制机关，打开圣诞剧场',
  },
  accessibility: {
    sceneLabel: '雪幕之下圣诞贺卡',
    letterLabel: '圣诞祝福来信',
    controlsLabel: '贺卡控制',
    openedStatus: '云幕已经拉开，剧场正在呈现来信。',
    completingStatus: '祝福正在完整显现。',
    readingReadyStatus: '祝福已经完整显现。准备好后，可以走进下一幕。',
  },
} as const;

export const theme = {
  background: '#DCEAF2',
  cover: '#31536A',
  rose: '#A8C6D8',
  gold: '#D5C69A',
  paper: '#F6F5EF',
  ink: '#263C4A',
} as const;

export const experience = {
  revealThreshold: 0.65,
  idleHintDelayMs: 3000,
  maxTiltDegrees: 4,
} as const;
