import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  components: {
    Table: {
      baseStyle: {
        td: {
          role: 'cell',
          color: 'gray.500',
          fontSize: 'sm'
        }
      },
      variants: {
        striped: {
          th: {
            color: 'gray.900',
            fontSize: 'sm',
            fontWeight: 'normal'
          }
        }
      },
      defaultProps: {
        variant: 'striped'
      }
    }
  },
  colors: {
    primary: {
      100: '#0190fe',
      200: '#0a3b79',
      300: '#E074B1',
      400: '#B62376',
      500: '#8B0E55',
      600: '#7C0649'
    },
    gray: {
      300: '#a0a0a5',
      400: '#f2f4f8',
      500: '#6e6e78',
      600: '#d7d7dc',
      800: '#999',
      900: '#282832'
    }
  },
  styles: {
    global: {
      body: {
        bgColor: 'primary.600'
      }
    }
  }
})
