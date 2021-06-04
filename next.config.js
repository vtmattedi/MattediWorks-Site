const withConfig = require("next-config");
module.exports = withConfig();


module.exports = {
  async redirects() {
    return [
      {
        source: '/a',
        destination: '/a.html',
        permanent: true,
      },
    ]
  },
  resolve: {
    fallback: {
        "fs": false
    },
}
}