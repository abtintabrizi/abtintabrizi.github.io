const theme = {
  button: {
    defaultProps: {
      ripple: false,
    },
    styles: {
      base: {
        initial: {
          fontWeight: '',
          textTransform: '',
        },
      },
      sizes: {
        sm: {
          fontSize: 'text-xs',
          py: '',
          px: '',
          borderRadius: 'rounded-lg',
        },
        md: {
          fontSize: 'text-xs',
          py: '',
          px: '',
          borderRadius: 'rounded-lg',
        },
        lg: {
          fontSize: 'text-sm',
          py: '',
          px: '',
          borderRadius: 'rounded-lg',
        },
      },
      variants: {
        filled: {
          'blue-gray': {
            background: '',
            color: 'text-white',
            active: '',
          },
        },
      },
    },
  },
  navbar: {
    styles: {
      base: {
        navbar: {
          blurred: {
            backdropFilter: 'backdrop-saturate-150 backdrop-blur-md',
            bgOpacity: 'bg-opacity-30',
            borderWidth: '',
            borderColor: '',
          },
        },
      },
    },
  },
};

export default theme;
