const colors = require('../styles/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.gray,
        error: colors.magenta,
        success: colors.lime,
        warning: colors.marigold,
        gray: colors.gray
      }
    }
  }
}