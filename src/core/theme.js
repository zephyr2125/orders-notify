import { DefaultTheme } from 'react-native-paper'

const base = {
  fontSize: 16,
}

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#000000',
    primary: '#5e72e4',
    secondary: '#8392ab',
    success: '#2dce89',
    error: '#f5365c',
    transparent: 'transparent',
  },
  base: {
    fontSize: 16,
  },
  button: {
    default: {
      text: {
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24,
        color: '#67748e',
        letterSpacing: base.fontSize * -0.025,
        textTransform: 'none',
      },
      btn: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: base.fontSize * 0.5,
        shadowColor:
          '0 4px 6px rgba(50, 50, 93, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
        marginBottom: base.fontSize,
      },
    },
    outlined: {
      text: {},
      btn: {},
    },
    contained: {
      text: {
        color: '#fff',
      },
      btn: {
        backgroundColor: '#5e72e4',
        borderColor: '#5e72e4',
      },
    },
    primary: {},
    secondary: {},
    success: {},
    info: {},
    warning: {},
    danger: {},
    lg: {
      text: {
        fontSize: base.fontSize * 0.875,
      },
      btn: {
        borderRadius: base.fontSize * 0.5,
        paddingVertical: base.fontSize * 0.875,
        paddingHorizontal: base.fontSize * 4,
      },
    },
  },
}
