/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor:         'var(--primaryColor)',
        brandPrimaryColor:    'var(--brandPrimaryColor)',
        secondaryColor:       'var(--secondaryColor)',
        secondaryPurple:      'var(--secondaryPurple)',
        brandSecondaryColor:  'var(--brandSecondaryColor)',
        accentRed:            'var(--accentRed)',
        accentRedSecondary:   'var(--accentRedSecondary)',
        accentGreen:          'var(--accentGreen)',
        accentGreenSecondary: 'var(--accentGreenSecondary)',
        accentGold:           'var(--accentGold)',
        accentGoldSecondary:  'var(--accentGoldSecondary)',
        lightBackground:      'var(--lightBackground)',
        grayBackground:       'var(--grayBackground)',
        graySecondary:        'var(--graySecondary)',
        grayTertiary:         'var(--grayTertiary)',
        grayQuaternary:       'var(--grayQuaternary)',
        darkBackground:       'var(--darkBackground)',
        darkSecondary:        'var(--darkSecondary)',
        darkTertiary:         'var(--darkTertiary)',
      },
      fontSize: {
         fsH1:              'var(--fsH1)',
         fsH2:              'var(--fsH2)',
         fsH3:              'var(--fsH3)',
         fsH4:              'var(--fsH4)',
         fsH5:              'var(--fsH5)',
         fsH6:              'var(--fsH6)',

         caption:           'var(--fsCaption)',
         button:            'var(--fsButton)',
         buttonSmall:       'var(--fsButtonSmall)',
         paragraph:         'var(--fsParagraph)',
         link:              'var(--fsLink)',
      },
    },
  },
  plugins: [],
}

