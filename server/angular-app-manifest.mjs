
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/goatgarment/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/goatgarment"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 8510, hash: '3a1dbe613875fd0e8b565911eae0427e61e72a6a246122f8d92d1e5f3f5528ed', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1374, hash: 'c698203e91947b890939ae0fbbf0c8143fc2aa36542d7cd18e651c391619a918', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 38386, hash: '1c9440105b8a6bead729add55f63a0069853cbda8d7a69a8ca021c221262d832', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-D3HHWHHY.css': {size: 319474, hash: '/MRLyYfJQP4', text: () => import('./assets-chunks/styles-D3HHWHHY_css.mjs').then(m => m.default)}
  },
};
