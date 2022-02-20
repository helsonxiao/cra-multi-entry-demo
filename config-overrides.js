const multipleEntry = require('react-app-rewire-multiple-entry')([
  {
    entry: 'src/albuminfo/index.tsx',
    template: 'src/albuminfo/index.html',
    outPath: '/albuminfo/index.html'
  },
  {
    entry: 'src/sound/index.tsx',
    template: 'src/sound/index.html',
    outPath: '/sound/index.html'
  },
]);

module.exports = {
  webpack: function(config, env) {
    multipleEntry.addMultiEntry(config);
    return config;
  }
};
