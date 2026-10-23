export const cardContent = {
  documentTitle: '霜降送寒 · 柿秋递甜',
  documentDescription: '一封只为你打开的秋日来信。',
  cover: '秋日来信',
  decorative: {
    innerMark: 'A LITTLE WINTER THEATRE',
    waxMonogram: '煮酒',
  },
  hints: {
    sealed: '轻触任意位置，启动机关',
    revealing: '移动光芒，慢慢读完这封信',
    keyboard: '按 Enter 或空格键，也可以开启',
  },
  letter: {
    salutation: '见字如面，致可爱的梦梦：',
    birthday: '圣诞快乐呐。ヾ(•ω•`)o',
    wishes: [
      '先谢谢你的圣诞礼物啦，说实话第一次收到网友这么认真的礼物，真的很喜欢！！可惜我最近被考研进度赶着走，实在来不及准备些更用心些的礼物，果咩＞︿＜',
      '这个礼物是一个坏心情急救包，希望你这个圣诞节能过得轻松一点，听听歌，吃点喜欢的，窝在暖和的地方干些自己喜欢的事情~',
      '今天是也是霜降啦！秋天也要结束喽，愿剩下的日子里，你仍然保有好奇，拥有选择的自由，也有重新出发的勇气。',
      '而无论你此刻身在何处在干什么，都愿这封小小的来信，像一座亮着灯的书店，替你留住一小片安静的夜晚。',
    ],
    signature: '—— 愿你被生活温柔以待',
    date: 'Merry Christmas · 10.23',
  },
  finale: {
    title: '愿你平安喜乐',
    wishes: ['愿灯火长明，', '愿每一次出发，都有温柔回响。'],
    footer: '如果哪天想找人一起听听歌，可以随时找我噢',
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
