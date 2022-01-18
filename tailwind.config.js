module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },

      height: theme => ({
        "screen/2": "50vh",
        "required":"470px",
        "screen-0.7":"calc(100vh*7/10)",
      }),

      spacing: {
        '92percent': '92%',
        '94percent': '94%'
      },

      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },

      fontFamily: {
        'Belgrano':'Belgrano',
        'DMSans':'DM Sans',
        'DMSerifDisplay':'DM Serif Display',
        'Montserrat':'Montserrat',
        'Poppins':'Poppins',
      },
  
    },
  },
  plugins: [],
}
