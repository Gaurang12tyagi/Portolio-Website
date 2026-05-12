const path = require("path");
module.exports = {
  eslint: {
    ignoreDuringBuilds: true, // 👈 add this
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["res.cloudinary.com", "media.dev.to"],
  },
};
