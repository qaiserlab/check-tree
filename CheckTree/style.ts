const menu = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
}

export default {
  lv1: menu,
  lv2: {
    ...menu,
    paddingLeft: '32px',
  },
  lv3: {
    ...menu,
    paddingLeft: '64px',
  },
};
