export const cardContent = {
  documentTitle: '秋风送寒 · 生日送暖',
  documentDescription: '一封只为你打开的生日来信。',
  cover: '生日来信',
  decorative: {
    innerMark: 'A LITTLE WINTER THEATRE',
    waxMonogram: '煮酒敬上',
  },
  hints: {
    sealed: '轻触任意位置，启动机关',
    revealing: '移动光芒，慢慢读完这封信',
    keyboard: '按 Enter 或空格键，也可以开启',
  },
  letter: {
    salutation: '见字如面，致未曾谋面的安安：',
    birthday: '生日快乐呐。ヾ(•ω•`)o',
    wishes: [
      '虽然突发奇想，打算做点什么，写点什么来稍稍弥补一下忘记你生日的时期，但也很显然，时间不是很充足，急忙赶工了这个电子贺卡出来，如果有bug的话，还请当没看见。',
      '转眼咱们都认识好几年了，时间过得真快，今年你也正式毕业、步入职场了。这些年一起打游戏、唠嗑的日子，真的带来了很多快乐。',
      '愿新的一年里，你仍然保有好奇，拥有选择的自由，也有重新出发的勇气。',
      '而无论你此刻身在何处在干什么（虽然我看见你打开apex了），都愿这封小小的来信，像一座亮着灯的剧场，替你留住一小片安静的夜晚。',
    ],
    signature: '—— 愿你被生活温柔以待',
    date: 'Happy Birthday · 10.21',
  },
  finale: {
    title: '愿你平安喜乐',
    wishes: ['愿灯火长明，', '愿每一次出发，都有温柔回响。'],
    footer: '这里写啥啊，我没想好，要不我随便找点聊天记录吧，nmd怎么都是QQ农场，我说QQ农场害人不浅啊',
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
