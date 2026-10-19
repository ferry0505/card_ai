import { cardContent } from '../config/content';

const escapeHtml = (value: string): string =>
  value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;',
    };
    return entities[character];
  });

const coverBotanical = `
  <svg class="cover-botanical cover-mechanics" viewBox="0 0 320 220" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="brass" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#f1e6bd"/><stop offset=".52" stop-color="#b5c4bd"/><stop offset="1" stop-color="#d8c48b"/></linearGradient>
      <linearGradient id="wood" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#29485a"/><stop offset=".5" stop-color="#7896a0"/><stop offset="1" stop-color="#29485a"/></linearGradient>
    </defs>
    <g fill="none" stroke="url(#brass)" stroke-linecap="round" stroke-linejoin="round">
      <path d="M160 24V63M160 157V196" stroke-width="3"/>
      <path d="M139 50L160 63L181 50M139 170L160 157L181 170" stroke-width="2.5"/>
      <path d="M104 110H126M194 110H216" stroke-width="3"/>
      <path d="M118 102L126 110L118 118M202 102L194 110L202 118" stroke-width="2"/>
      <circle cx="160" cy="24" r="4"/><circle cx="160" cy="196" r="4"/>
    </g>
    <g transform="translate(160 110)">
      <circle r="43" fill="url(#wood)" stroke="url(#brass)" stroke-width="3"/>
      <circle r="34" fill="none" stroke="#d8c48b" stroke-width="2"/>
      <circle r="25" fill="#34596b" stroke="url(#brass)" stroke-width="2"/>
      <g fill="url(#brass)">
        <rect x="-3" y="-42" width="6" height="12" rx="1"/>
        <rect x="-3" y="30" width="6" height="12" rx="1"/>
        <rect x="30" y="-3" width="12" height="6" rx="1"/>
        <rect x="-42" y="-3" width="12" height="6" rx="1"/>
        <rect x="-3" y="-42" width="6" height="12" rx="1" transform="rotate(45)"/>
        <rect x="-3" y="-42" width="6" height="12" rx="1" transform="rotate(90)"/>
        <rect x="-3" y="-42" width="6" height="12" rx="1" transform="rotate(135)"/>
        <rect x="-3" y="-42" width="6" height="12" rx="1" transform="rotate(225)"/>
      </g>
      <circle r="14" fill="url(#brass)" stroke="#31566b" stroke-width="2"/>
      <circle r="6" fill="#31566b"/>
      <path d="M-17-17L17 17M17-17L-17 17" stroke="#d8c48b" stroke-width="2" opacity=".9"/>
    </g>
    <g fill="url(#brass)" stroke="#31566b" stroke-width="1.5">
      <circle cx="160" cy="63" r="4"/><circle cx="160" cy="157" r="4"/>
      <circle cx="126" cy="110" r="3.5"/><circle cx="194" cy="110" r="3.5"/>
    </g>
  </svg>`;
const paperBotanical = `
  <svg class="paper-botanical paper-botanical--top" viewBox="0 0 150 120" aria-hidden="true" focusable="false">
    <g fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round">
      <path d="M137 9C107 17 87 35 77 61C67 88 47 103 12 111" />
      <path d="M91 40C94 25 103 16 118 13C116 27 108 37 94 44" />
      <path d="M76 63C93 61 105 67 113 80C98 84 86 78 78 68" />
      <path d="M57 87C49 73 37 68 22 71C28 85 39 92 54 92" />
    </g>
  </svg>
  <svg class="paper-botanical paper-botanical--bottom" viewBox="0 0 150 120" aria-hidden="true" focusable="false">
    <g fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round">
      <path d="M137 9C107 17 87 35 77 61C67 88 47 103 12 111" />
      <path d="M91 40C94 25 103 16 118 13C116 27 108 37 94 44" />
      <path d="M76 63C93 61 105 67 113 80C98 84 86 78 78 68" />
      <path d="M57 87C49 73 37 68 22 71C28 85 39 92 54 92" />
    </g>
  </svg>`;

export const createTemplate = (): string => {
  const copy = cardContent;
  const wishLines = copy.letter.wishes
    .map((line, index) => {
      const sticker = index === 1
        ? '<figure class="letter-sticker letter-sticker--postcard"><img src="./images/winter-postcard.svg" alt="雪夜小屋插画" loading="lazy"><figcaption>把一盏灯，留给冬夜。</figcaption></figure>'
        : index === 3
          ? '<figure class="letter-sticker letter-sticker--snow"><img src="./images/snowflake-sticker.svg" alt="雪花装饰" loading="lazy"></figure>'
          : '';
      return `<span class="reveal-line reveal-target">${escapeHtml(line)}</span>${sticker}`;
    })
    .join('');
  const finaleLines = copy.finale.wishes
    .map((line) => `<p class="finale-line">${escapeHtml(line)}</p>`)
    .join('');

  return `
    <main class="experience phase-sealed" data-experience>
      <div class="ambient ambient--one" aria-hidden="true"></div>
      <div class="ambient ambient--two" aria-hidden="true"></div>
      <div class="botanical-shadow botanical-shadow--left" aria-hidden="true"></div>
      <div class="botanical-shadow botanical-shadow--right" aria-hidden="true"></div>

      <section class="scene" data-scene aria-label="${escapeHtml(copy.accessibility.sceneLabel)}">
        <div class="cloud-curtain mist-curtain mist-curtain--left" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="cloud-curtain mist-curtain mist-curtain--right" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="snow-specks" aria-hidden="true"></div>
        <div class="card-stage" data-card-stage>
          <div class="card-float" data-card-float>
            <div class="card-book" data-card-book>
              <div class="card-depth" aria-hidden="true"></div>
              <div class="puppet-hardware puppet-hardware--left" aria-hidden="true"><i></i><i></i><i></i></div>
              <div class="puppet-hardware puppet-hardware--right" aria-hidden="true"><i></i><i></i><i></i></div>
              <div class="card-inner" aria-hidden="true">
                <span class="theatre-curtain theatre-curtain--left"></span><span class="theatre-curtain theatre-curtain--right"></span>
                <span class="card-inner-mark">${escapeHtml(copy.decorative.innerMark)}</span>
              </div>

              <article class="letter-sheet" data-letter-sheet aria-label="${escapeHtml(copy.accessibility.letterLabel)}">
                <div class="letter-paper" data-letter-paper aria-hidden="true"></div>
                <div class="paper-ornaments" data-paper-ornaments aria-hidden="true">
                  ${paperBotanical}
                  <span class="paper-rule paper-rule--top"></span>
                  <span class="paper-rule paper-rule--bottom"></span>
                </div>

                <div class="letter-copy-wrap" data-letter-copy-wrap>
                  <div class="letter-copy" data-letter-copy>
                    <p class="letter-salutation reveal-target">${escapeHtml(copy.letter.salutation)}</p>
                    <p class="letter-birthday reveal-target" data-birthday-line>${escapeHtml(copy.letter.birthday)}</p>
                    <p class="letter-wishes">${wishLines}</p>
                    <div class="letter-signoff">
                      <p class="reveal-target">${escapeHtml(copy.letter.signature)}</p>
                      <p class="reveal-target">${escapeHtml(copy.letter.date)}</p>
                    </div>
                  </div>

                </div>

                <div class="finale-content" data-finale-content aria-live="polite" aria-hidden="true">
                  <h1 class="finale-title" data-finale-title>${escapeHtml(copy.finale.title)}</h1>
                  <div class="finale-wishes">${finaleLines}</div>
                  <p class="finale-footer">${escapeHtml(copy.finale.footer)}</p>
                </div>
              </article>

              <div class="card-page card-page--left" data-page-left aria-hidden="true">
                <div class="page-face page-face--front">
                  ${coverBotanical}
                  <span class="cover-copy cover-copy--left">${escapeHtml(copy.cover)}</span>
                </div>
                <div class="page-face page-face--back"><span class="inside-sprig"></span></div>
              </div>

              <div class="card-page card-page--right" data-page-right aria-hidden="true">
                <div class="page-face page-face--front">
                  ${coverBotanical}
                  <span class="cover-copy cover-copy--right">${escapeHtml(copy.cover)}</span>
                </div>
                <div class="page-face page-face--back"><span class="inside-sprig inside-sprig--right"></span></div>
              </div>

              <button class="wax-seal" data-wax-seal type="button" aria-label="${escapeHtml(copy.controls.sealAria)}">
                <span class="wax-base" aria-hidden="true"></span>
                <span class="mechanism-leaf mechanism-leaf--one" aria-hidden="true"></span>
                <span class="mechanism-leaf mechanism-leaf--two" aria-hidden="true"></span>
                <span class="mechanism-leaf mechanism-leaf--three" aria-hidden="true"></span>
                <span class="mechanism-gear" aria-hidden="true"></span>
                <span class="mechanism-bolt mechanism-bolt--one" aria-hidden="true"></span>
                <span class="mechanism-bolt mechanism-bolt--two" aria-hidden="true"></span>
                <span class="mechanism-bolt mechanism-bolt--three" aria-hidden="true"></span>
                <span class="wax-monogram" aria-hidden="true">${escapeHtml(copy.decorative.waxMonogram)}</span>
              </button>
            </div>
          </div>
        </div>

        <p class="stage-hint" data-stage-hint aria-live="polite">${escapeHtml(copy.hints.sealed)}</p>
        <button
          class="letter-turn-button"
          data-continue
          type="button"
          aria-label="${escapeHtml(copy.controls.continueAria)}"
          aria-hidden="true"
          disabled
        >
          <span class="letter-turn-line" aria-hidden="true"></span>
          <span>${escapeHtml(copy.controls.continue)}</span>
          <svg viewBox="0 0 24 12" aria-hidden="true" focusable="false">
            <path d="M1 6h20M16.5 1.8 21 6l-4.5 4.2" />
          </svg>
        </button>
        <p class="keyboard-note">${escapeHtml(copy.hints.keyboard)}</p>
      </section>

      <nav class="utility-controls" aria-label="${escapeHtml(copy.accessibility.controlsLabel)}">
        <button class="quiet-button replay-button" data-replay type="button" aria-label="${escapeHtml(copy.controls.replay)}" aria-hidden="true" disabled>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.8 7.2A7 7 0 1 1 5 12M6.8 7.2V3.8M6.8 7.2h3.4" /></svg>
          <span>${escapeHtml(copy.controls.replay)}</span>
        </button>
        <button class="quiet-button sound-button" data-sound-toggle type="button" aria-label="${escapeHtml(copy.controls.soundOffAria)}" aria-pressed="false">
          <svg class="sound-icon sound-icon--off" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 10v4h3l4 3V7L8 10H5Z" />
            <path class="sound-cross" d="m17 10 4 4m0-4-4 4" />
            <path class="sound-waves" d="M16 9.2c1.4 1.6 1.4 4 0 5.6m2.6-8.2c2.8 3 2.8 7.8 0 10.8" />
          </svg>
          <span data-sound-label>${escapeHtml(copy.controls.soundOff)}</span>
        </button>
      </nav>

      <div class="sr-status" data-sr-status aria-live="polite"></div>
    </main>`;
};
