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
      <linearGradient id="brass" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#f0e5bd"/><stop offset=".5" stop-color="#b9c8bf"/><stop offset="1" stop-color="#d0b77a"/></linearGradient>
      <linearGradient id="wood" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#1f4054"/><stop offset=".45" stop-color="#52798b"/><stop offset="1" stop-color="#243f51"/></linearGradient>
      <linearGradient id="inlay" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#e5d7a6"/><stop offset="1" stop-color="#9aaea9"/></linearGradient>
    </defs>
    <!-- A carved cabinet plaque with restrained nautical filigree, not a pile of gears. -->
    <path d="M160 18C147 33 130 35 111 36C119 49 115 61 101 71C116 78 123 91 119 110C123 129 116 142 101 149C115 160 119 172 111 184C132 185 148 191 160 204C172 191 188 185 209 184C201 172 205 160 219 149C204 142 197 129 201 110C197 91 204 78 219 71C205 61 201 49 209 36C190 35 173 33 160 18Z" fill="url(#wood)" stroke="url(#brass)" stroke-width="2.5"/>
    <path d="M160 29C148 42 136 45 122 46C130 58 125 68 114 75C129 84 134 95 131 110C134 125 129 137 114 145C125 153 130 165 122 174C139 176 151 184 160 194C169 184 181 176 198 174C190 165 195 153 206 145C191 137 186 125 189 110C186 95 191 84 206 75C195 68 190 58 198 46C184 45 172 42 160 29Z" fill="none" stroke="url(#inlay)" stroke-width="1.5" opacity=".9"/>
    <g fill="none" stroke="url(#brass)" stroke-width="1.7" stroke-linecap="round">
      <path d="M160 39V67M160 153V181"/>
      <path d="M150 50C136 53 135 65 145 72C151 76 156 72 160 67C164 72 169 76 175 72C185 65 184 53 170 50"/>
      <path d="M150 170C136 167 135 155 145 148C151 144 156 148 160 153C164 148 169 144 175 148C185 155 184 167 170 170"/>
      <path d="M126 92C137 87 145 93 145 102C145 108 139 110 132 110C139 110 145 112 145 118C145 127 137 133 126 128"/>
      <path d="M194 92C183 87 175 93 175 102C175 108 181 110 188 110C181 110 175 112 175 118C175 127 183 133 194 128"/>
      <path d="M141 110H179"/>
    </g>
    <path d="M160 77L178 91V129L160 143L142 129V91Z" fill="#213f51" stroke="url(#brass)" stroke-width="2"/>
    <path d="M160 84L171 94V126L160 136L149 126V94Z" fill="url(#wood)" stroke="#d9c68d" stroke-width="1.2"/>
    <path d="M160 91L165 105L160 118L155 105Z" fill="url(#brass)"/>
    <circle cx="160" cy="110" r="4" fill="#f0e5bd" stroke="#25475a" stroke-width="1.5"/>
    <g fill="url(#brass)" stroke="#29495b" stroke-width="1">
      <circle cx="160" cy="24" r="3"/><circle cx="160" cy="198" r="3"/>
      <circle cx="108" cy="72" r="2.5"/><circle cx="212" cy="72" r="2.5"/>
      <circle cx="108" cy="148" r="2.5"/><circle cx="212" cy="148" r="2.5"/>
    </g>
    <path d="M40 110H96M224 110H280" stroke="url(#brass)" stroke-width="1.3" opacity=".5"/>
    <path d="M47 104L40 110L47 116M273 104L280 110L273 116" fill="none" stroke="url(#brass)" stroke-width="1.3" opacity=".5"/>
  </svg>
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
