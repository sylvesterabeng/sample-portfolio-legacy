import * as styledComponents from 'styled-components'

export type Color = string

const breakpoints = {
  md: 768,
  lg: 1024,
  xl: 1280,
}

enum Elevation {
  BACKDROP = 1,
  HEADER,
}

export interface ITheme {
  color: {
    brand: {
      primary: Color
    }
    neutral: {
      500: Color
      400: Color
      300: Color
      200: Color
      100: Color
    }
    semantics: {
      invalid: Color
      progress: Color
      marked: Color
      danger: Color
      success: Color
      info: Color
    }
    black: Color
    white: Color
    backdrop: Color
    disabled: Color
    shadow: Color
  }
  elevation: typeof Elevation
  spacing: (...args: number[]) => string
  shape: {
    radius: {
      sm: string
      rg: string
      lg: string
    }
  }
  font: {
    size: {
      sm: string
      rg: string
      md: string
      lg: string
      xl: string
      xxl: string
      xxxl: string
      xxxxl: string
      heroLg: string
      heroXl: string
    }
    family: {
      brand: string
      base: string
    }
  }
}

const SPACE_UNIT = 8
const spacing = (...args: number[]): string => {
  const unit = (v: number) => v * SPACE_UNIT
  switch (args.length) {
    case 1:
      return `${unit(args[0])}px`
    case 2:
      return [0, 1].map(n => `${args[n] * SPACE_UNIT}px`).join(' ')
    case 3:
      return [0, 1, 2].map(n => `${args[n] * SPACE_UNIT}px`).join(' ')
    case 4:
      return [0, 1, 2, 3].map(n => `${args[n] * SPACE_UNIT}px`).join(' ')
    default:
      return 'auto auto'
  }
}

const brandFontFamily = '"Bellefair", "Noto Serif Japanese", serif, san-serif;'
const primaryFontFamily = '"Noto Serif Japanese", serif, san-serif;'

export const theme: ITheme = {
  color: {
    brand: {
      primary: '#B80F0A',
    },
    neutral: {
      500: '#212226',
      400: '#343840',
      300: '#5F6673',
      200: '#b7bec4',
      100: '#F2F2F2',
    },
    semantics: {
      invalid: '#8B91A1',
      info: '#007AE9',
      progress: '#00F5FF',
      marked: '#F7ACFF',
      danger: '#ED2024',
      success: '#1CC577',
    },
    black: '#000',
    white: '#fff',
    backdrop: 'rgba(0, 0, 0, 0.3)',
    shadow: 'rgba(0, 0, 0, 0.2)',
    disabled: '#d0d0d0',
  },
  elevation: Elevation,
  spacing,
  shape: {
    radius: {
      sm: '3px',
      rg: '8px',
      lg: '16px',
    },
  },
  font: {
    // based on 1.25
    size: {
      sm: '0.8rem',
      rg: '1rem',
      md: '1.25rem',
      lg: '1.563rem',
      xl: '1.953rem',
      xxl: '2.441rem',
      xxxl: '3.052rem',
      xxxxl: '3.815rem',
      heroLg: '120px',
      heroXl: '136px',
    },
    family: {
      brand: `${brandFontFamily}`,
      base: `${primaryFontFamily}`,
    },
  },
}

const media = {
  md: `@media (min-width: ${breakpoints.md}px)`,
  lg: `@media (min-width: ${breakpoints.lg}px)`,
  xl: `@media (min-width: ${breakpoints.xl}px)`,
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>

export default styled
export { breakpoints, media, css, createGlobalStyle, keyframes, ThemeProvider }
