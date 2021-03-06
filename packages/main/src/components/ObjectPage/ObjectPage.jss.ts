import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

const ObjectPageCssVariables = {
  anchorFloat: '--_ui5wcr_ObjectPage_actions_float',
  anchorLeft: '--_ui5wcr_ObjectPage_actions_left',
  anchorRight: '--_ui5wcr_ObjectPage_actions_right',
  avatarMargin: '--_ui5wcr_ObjectPage_avatar_margin'
};

const styles = {
  objectPage: {
    width: '100%',
    height: '100%',
    position: 'relative',
    whiteSpace: 'normal',
    fontFamily: ThemingParameters.sapFontFamily,
    backgroundColor: ThemingParameters.sapBackgroundColor,
    overflowX: 'hidden',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      backgroundColor: ThemingParameters.sapScrollBar_TrackColor,
      width: ThemingParameters.sapScrollBar_Dimension
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: ThemingParameters.sapScrollBar_BorderColor,
      '&:hover': {
        backgroundColor: ThemingParameters.sapScrollBar_Hover_FaceColor
      }
    },
    '&::-webkit-scrollbar-corner': {
      backgroundColor: ThemingParameters.sapScrollBar_TrackColor
    },
    '& section[id="ObjectPageSection-1"] > div[role="heading"]': {
      display: 'none'
    }
  },
  '@global html': {
    [ObjectPageCssVariables.anchorFloat]: 'right',
    [ObjectPageCssVariables.anchorRight]: '1.25rem',
    [ObjectPageCssVariables.anchorLeft]: 'unset',
    [ObjectPageCssVariables.avatarMargin]: '0 1rem 0 0'
  },
  '@global [dir="rtl"]': {
    [ObjectPageCssVariables.anchorFloat]: 'left',
    [ObjectPageCssVariables.anchorRight]: 'unset',
    [ObjectPageCssVariables.anchorLeft]: '1.25rem',
    [ObjectPageCssVariables.avatarMargin]: '0 0 0 1rem'
  },
  iconTabBarMode: {
    '& section[data-component-name="ObjectPageSection"] > div[role="heading"]': {
      display: 'none'
    }
  },
  noHeader: {
    '& $header': {
      display: 'none'
    },
    '& $contentHeader': {
      display: 'none'
    }
  },
  headerCollapsed: {
    '& $contentHeader': {
      display: 'none'
    }
  },
  // header
  header: {
    flexShrink: 0,
    backgroundColor: ThemingParameters.sapObjectHeader_Background,
    position: 'sticky',
    top: 0,
    zIndex: 2
  },
  contentHeader: {
    backgroundColor: ThemingParameters.sapObjectHeader_Background,
    position: 'sticky',
    paddingBottom: '0.25rem',
    maxHeight: '500px',
    overflow: 'hidden',
    paddingLeft: '2rem'
  },
  anchorBar: {
    position: 'sticky',
    zIndex: 2,
    '--_ui5_tc_header_box_shadow': 'inset 0px -1px 0 0px rgba(0,0,0,0.15)'
  },
  titleBar: {
    padding: '0.5rem 2rem',
    display: 'block',
    position: 'relative'
  },
  container: {
    display: 'inline-block',
    lineHeight: 'normal',
    verticalAlign: 'middle',
    width: '70%',
    boxSizing: 'border-box'
    // paddingTop: '1.5rem'
  },
  title: {
    fontSize: '1.375rem',
    paddingRight: '1rem',
    verticalAlign: 'baseline',
    lineHeight: 'normal',
    display: 'inline-block',
    margin: '0',
    fontWeight: 'normal',
    color: ThemingParameters.sapTextColor
  },
  subTitle: {
    display: 'inline-block',
    wordBreak: 'break-word',
    verticalAlign: 'baseline',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    fontSize: '0.875rem',
    color: ThemingParameters.sapContent_LabelColor
  },
  actions: {
    position: 'absolute',
    top: '0',
    paddingTop: '0.75rem',
    zIndex: 1,
    right: `var(${ObjectPageCssVariables.anchorRight})`,
    left: `var(${ObjectPageCssVariables.anchorLeft})`,
    display: 'inline-block',
    float: `var(${ObjectPageCssVariables.anchorFloat})`,
    verticalAlign: 'top',
    '& > *': {
      marginLeft: '0.5rem',
      padding: 0
    }
  },
  titleInHeaderContent: {
    '& contentHeader': {
      paddingTop: 0,
      '& > *': {
        display: 'flex',
        verticalAlign: 'top',
        '&:not(:first-child)': {
          marginRight: '2rem',
          marginBottom: '1rem'
        }
      }
    }
  },
  headerCustomContent: {
    display: 'inline-block',
    verticalAlign: 'top',
    '& > *': {
      float: 'left',
      marginRight: '2rem',
      marginBottom: '1rem',
      lineHeight: '1.5rem'
    },
    '&:after': {
      clear: 'both'
    }
  },
  headerCustomContentItem: {
    marginLeft: '1rem'
  },

  headerImage: {
    maxWidth: '5rem',
    maxHeight: '5rem',
    display: 'inline-block',
    marginRight: '2rem',
    marginBottom: '1rem'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  keyInfos: {
    '& > *': {
      marginLeft: '1rem'
    },
    display: 'flex',
    flexDirection: 'row'
  },
  avatar: {
    margin: `var(${ObjectPageCssVariables.avatarMargin})`
  }
};

export default styles;
