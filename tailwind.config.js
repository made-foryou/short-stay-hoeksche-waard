module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.antlers.php',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {
        typography: (theme) => ({
           DEFAULT: {
               ul: {
                   listStyleType: 'disc',
               }
           }
        }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
