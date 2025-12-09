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
  // 如果设置了 dg-path，使用它作为基础路径
  if (data.dgPath) {
    return `${data.dgPath}/${data.page.fileSlug}/`;
  }
  // 默认使用 notes 目录
  return `notes/${data.page.fileSlug}/`;
},
};
