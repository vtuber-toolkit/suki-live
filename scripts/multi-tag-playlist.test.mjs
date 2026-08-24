import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

function loadPlaylistHelpers(filters = {}) {
  const elements = {
    "song-search": { value: filters.search ?? "" },
    "filter-language": { value: filters.language ?? "" },
    "filter-genre": { value: filters.genre ?? "" },
    "filter-access": { value: filters.access ?? "" },
  };
  const context = {
    window: { location: { hostname: "koki.suki.live" } },
    document: { getElementById: (id) => elements[id] ?? null },
    navigator: {},
    localStorage: { getItem: () => null, setItem: () => {} },
    alert: () => {},
    setTimeout,
    clearTimeout,
    IntersectionObserver: class {},
  };

  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.resolve("assets/js/template/utils.js"), "utf8"), context);
  vm.runInContext(fs.readFileSync(path.resolve("assets/js/template/playlist.js"), "utf8"), context);
  return context.window.SukiTemplate;
}

test("normalizes legacy tag strings and new tag arrays", () => {
  const template = loadPlaylistHelpers();

  assert.deepEqual(Array.from(template.utils.normalizeTagValues("古风")), ["古风"]);
  assert.deepEqual(Array.from(template.utils.normalizeTagValues(["古风", "流行", "古风"])), ["古风", "流行"]);
});

test("filters songs when a selected tag appears in a multi-value field", () => {
  const template = loadPlaylistHelpers({ genre: "古风", access: "舰长专属" });
  const items = [
    { title: "多标签歌曲", genre: ["流行", "古风"], access: ["舰长专属", "提督专属"] },
    { title: "普通歌曲", genre: "流行", access: "免费" },
  ];

  assert.deepEqual(
    Array.from(template.playlist.filterSongsLogic(items), (song) => song.title),
    ["多标签歌曲"]
  );
});

test("renders each access value as a separate tag", () => {
  const template = loadPlaylistHelpers();
  const markup = template.playlist.renderPlaylist(
    [{ title: "多权限歌曲", access: ["舰长专属", "提督专属"] }],
    "list"
  );

  assert.match(markup, /access-舰长专属[^>]*>舰长专属<\/span>/);
  assert.match(markup, /access-提督专属[^>]*>提督专属<\/span>/);
});

test("renders each language and genre value as an independent tag", () => {
  const template = loadPlaylistHelpers();
  const markup = template.playlist.renderPlaylist(
    [{ title: "多分类歌曲", language: ["中文", "日文"], genre: ["古风", "流行"] }],
    "list"
  );

  assert.match(markup, /song-tag-language[^>]*>中文<\/span>/);
  assert.match(markup, /song-tag-language[^>]*>日文<\/span>/);
  assert.match(markup, /song-tag-genre[^>]*>古风<\/span>/);
  assert.match(markup, /song-tag-genre[^>]*>流行<\/span>/);
});
