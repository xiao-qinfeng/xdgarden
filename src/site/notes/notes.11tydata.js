require("dotenv").config();
const settings = require("../../helpers/constants");

const allSettings = settings.ALL_NOTE_SETTINGS;

module.exports = {
  eleventyComputed: {
    layout: (data) => {
      if (data.tags && data.tags.indexOf("gardenEntry") != -1) {
        return "layouts/index.njk";
      }
      return "layouts/note.njk";
    },
    permalink: (data) => {
      // 确保只有文件名是 home.md 的文件才能使用根路径永久链接
      if (data.tags && data.tags.indexOf("gardenEntry") != -1 && data.page.fileSlug === "home") {
        return "/";
      }
      return data.permalink || undefined;
    },
    // ...
  },
};
