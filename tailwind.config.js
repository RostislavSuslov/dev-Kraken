/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gradient:        'var(--primary)',
        blue:            'var(--blue)',
        brandBlue:       'var(--brandBlue)',
        blueSecondary:   'var(--blueSecondary)',
        purple:          'var(--purple)',
        brandPurple:     'var(--brandPurple)',
        red:             'var(--red)',
        redSecondary:    'var(--redSecondary)',
        green:           'var(--green)',
        greenSecondary:  'var(--greenSecondary)',
        gold:            'var(--gold)',
        goldSecondary:   'var(--goldSecondary)',
        light:           'var(--Light)',
        gray:            'var(--gray)',
        graySecondary:   'var(--graySecondary)',
        grayThird:       'var(--grayThird)',
        grayFourth:      'var(--grayFourth)',
        dark:            'var(--dark)',
        darkSecondary:   'var(--darkSecondary)',
        darkThird:       'var(--darkThird)',
      }
    },
  },
  plugins: [],
}

