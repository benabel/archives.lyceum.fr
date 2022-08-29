// from gatsby site
const colors = {
  primary: `#003cba`,
  accent: `#ffb238`, // "Mustard",
  success: `#37b635`,
  warning: `#ec1818`,
  blue: `295db1`,
  indigo: `252235`,
  purple: `c234c6`,
  pink: `eff3f4`,
  red: `d02a3e`,
  orange: `dbda4a`,
  yellow: `f2f11d`,
  green: `4faf41`,
  teal: `b9c8c5`,
  cyan: `37b0db`,
  ui: {
    bright: `#e0d6eb`,
    light: `#f5f3f7`,
    whisper: `#fbfafc`,
  },
  bootstrap: [`primary`, `secondary`, `success`, `danger`, `warning`, `info`],
  matters: { isn: `primary`, pc: `secondary` },
  classes: { '2gt': `success`, '1g': `warning`, ts: `danger` },
  gray: {
    dark: `#20232a`,
    mid: `#282c34`,
    light: `#33373f`,
  },
  white: `#fff`,
}

const presets = { headerHeight: `2.5rem` }

// Il s'agit des breakpoints de bootstrap 4 par défaut
// TODO: lier à bootstrap???
const SIZES = {
  xsmall: { min: 0, max: 575 },
  small: { min: 576, max: 767 },
  medium: { min: 768, max: 991 },
  large: { min: 992, max: 1199 },
  xlarge: { min: 1200, max: Infinity },

  // Sidebar/nav related tweakpoints
  largerSidebar: { min: 1100, max: 1339 },
  sidebarFixed: { min: 2000, max: Infinity },
}

//type Size = $Keys<typeof SIZES>

const media = {
  max(size) {
    return SIZES[size][`max`]
  },
  min(size) {
    return SIZES[size][`min`]
  },
  between(smallKey, largeKey, excludeLarge = false) {
    if (excludeLarge) {
      return `@media (min-width: ${
        SIZES[smallKey].min
      }px) and (max-width: ${SIZES[largeKey].min - 1}px)`
    } else {
      if (SIZES[largeKey].max === Infinity) {
        return `@media (min-width: ${SIZES[smallKey].min}px)`
      } else {
        return `@media (min-width: ${SIZES[smallKey].min}px) and (max-width: ${
          SIZES[largeKey].max
        }px)`
      }
    }
  },

  greaterThan(key) {
    return `@media (min-width: ${SIZES[key].min}px)`
  },

  lessThan(key) {
    return `@media (max-width: ${SIZES[key].min - 1}px)`
  },

  size(key) {
    const size = SIZES[key]

    if (size.min == null) {
      return media.lessThan(key)
    } else if (size.max == null) {
      return media.greaterThan(key)
    } else {
      return media.between(key, key)
    }
  },
}

module.exports = { media, colors, presets }
