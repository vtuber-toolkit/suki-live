(function () {
  const template = (window.SukiTemplate = window.SukiTemplate || {});
  const utils = template.utils;

  function getState() {
    return template.state;
  }

  function restorePlaylistView() {
    const savedView = localStorage.getItem("suki_playlist_view");
    const container = document.getElementById("playlist-container");

    if (savedView && container && getState()?.playlistData?.items) {
      switchView(savedView);
    }
  }

  function populateFilterOptions(items) {
    const languageSelect = document.getElementById("filter-language");
    const genreSelect = document.getElementById("filter-genre");
    const accessSelect = document.getElementById("filter-access");
    if (!languageSelect || !genreSelect || !accessSelect) return;

    const languageOrder = ["中文", "粤语", "日文", "英文", "韩文", "西语", "法语", "德语", "俄语", "泰语", "其他"];
    const genreOrder = ["流行", "J-POP", "R&B", "电子", "治愈系", "摇滚", "古风", "动漫", "二次元", "VOCALOID", "VTuber", "民谣", "甜歌", "说唱", "EMO情歌", "其他"];
    const accessOrder = ["免费", "付费", "歌切", "舰长专属", "提督专属", "总督专属"];

    const sortByOrder = (values, order) => {
      const extras = values.filter((value) => !order.includes(value)).sort((a, b) => a.localeCompare(b, "zh-CN"));
      return [...order.filter((value) => values.includes(value)), ...extras];
    };

    const getTags = (value) => utils.normalizeTagValues(value);
    const languages = sortByOrder([...new Set(items.flatMap((song) => getTags(song.language)))], languageOrder);
    const genres = sortByOrder([...new Set(items.flatMap((song) => getTags(song.genre)))], genreOrder);
    const accessValues = sortByOrder([...new Set(items.flatMap((song) => getTags(song.access)))], accessOrder);

    const fillSelect = (select, emptyLabel, values) => {
      const currentValue = select.value;
      select.innerHTML = [`<option value="">${emptyLabel}</option>`, ...values.map((value) => `<option value="${utils.escapeHtml(value)}">${utils.escapeHtml(value)}</option>`)].join("");
      if (currentValue && values.includes(currentValue)) {
        select.value = currentValue;
      }
    };

    fillSelect(languageSelect, "全部语言", languages);
    fillSelect(genreSelect, "全部曲风", genres);
    fillSelect(accessSelect, "全部权限", accessValues);
  }

  function bindPlaylistInteractions() {
    const container = document.getElementById("playlist-container");
    if (!container || container.dataset.bound === "true") return;

    container.addEventListener("click", (event) => {
      if (event.target.closest("a")) return;
      const item = event.target.closest("[data-song-title]");
      if (!item) return;
      copySongTitle(item.dataset.songTitle || "");
    });

    container.dataset.bound = "true";
  }

  function filterSongsLogic(items) {
    const searchText = document.getElementById("song-search")?.value?.toLowerCase().trim() || "";
    const filterLang = document.getElementById("filter-language")?.value || "";
    const filterGenre = document.getElementById("filter-genre")?.value || "";
    const filterAccess = document.getElementById("filter-access")?.value || "";
    const hasTag = (value, tag) => !tag || utils.normalizeTagValues(value).includes(tag);
    const searchableTags = (value) => utils.normalizeTagValues(value).join(" ").toLowerCase();

    return items.filter((song) => {
      const matchSearch =
        !searchText ||
        song.title?.toLowerCase().includes(searchText) ||
        song.artist?.toLowerCase().includes(searchText) ||
        searchableTags(song.genre).includes(searchText) ||
        searchableTags(song.language).includes(searchText) ||
        (song.note && song.note.toLowerCase().includes(searchText));
      const matchLang = hasTag(song.language, filterLang);
      const matchGenre = hasTag(song.genre, filterGenre);
      const matchAccess = hasTag(song.access, filterAccess);
      return matchSearch && matchLang && matchGenre && matchAccess;
    });
  }

  function renderAccessTags(accessValue, className = "access-tag") {
    return utils
      .normalizeTagValues(accessValue)
      .map((access) => `<span class="${className} access-${utils.escapeHtml(access)}">${utils.escapeHtml(access)}</span>`)
      .join("");
  }

  function renderTagText(value) {
    return utils.normalizeTagValues(value).join(" · ");
  }

  function renderCategoryTags(value, category) {
    return utils
      .normalizeTagValues(value)
      .map((tag) => `<span class="song-tag song-tag-${category}">${utils.escapeHtml(tag)}</span>`)
      .join("");
  }

  function renderPlaylist(items, viewMode) {
    const filteredItems = filterSongsLogic(items);

    if (viewMode === "grid") {
      return filteredItems
        .map((song) => {
          const cover = song.cover
            ? `<img class="song-cover" src="${song.cover}" alt="${utils.escapeHtml(song.title)}" onerror="this.style.display='none'" />`
            : "";
          const access = renderAccessTags(song.access);
          const songNote = song.note ? `<div class="song-note">${utils.escapeHtml(song.note)}</div>` : "";
          const songLink = song.url
            ? `<a class="song-link" href="${utils.escapeHtml(song.url)}" target="_blank" rel="noopener" onclick="event.stopPropagation()">播放</a>`
            : "";
          const meta = `${utils.escapeHtml(song.artist || "")}${song.artist && song.source ? " · " : ""}${utils.escapeHtml(song.source || "")}`;
          const categoryTags = `${renderCategoryTags(song.language, "language")}${renderCategoryTags(song.genre, "genre")}`;
          const langGenre = categoryTags ? `<div class="song-tags">${categoryTags}</div>` : "";

          return `
            <li data-song-title="${utils.escapeHtml(song.title)}" title="点击复制「点歌 ${utils.escapeHtml(song.title)}」">
              ${cover}
              <div class="song-info">
                <div class="song-title">
                  ${utils.escapeHtml(song.title)}
                  ${access}
                </div>
                <div class="song-meta">
                  ${meta}
                  ${langGenre}
                  ${songNote}
                </div>
              </div>
              <div class="song-actions">${songLink}</div>
            </li>`;
        })
        .join("");
    }

    return filteredItems
      .map((song) => {
        const cover = song.cover
          ? `<img class="song-cover" src="${song.cover}" alt="${utils.escapeHtml(song.title)}" onerror="this.style.display='none'" />`
          : "";
        const access = renderAccessTags(song.access);
        const songNote = song.note ? `<div class="song-note">${utils.escapeHtml(song.note)}</div>` : "";
        const songLink = song.url
          ? `<a class="song-link" href="${utils.escapeHtml(song.url)}" target="_blank" rel="noopener" onclick="event.stopPropagation()">播放</a>`
          : "";
        const meta = `${utils.escapeHtml(song.artist || "")}${song.artist && song.source ? " · " : ""}${utils.escapeHtml(song.source || "")}`;
        const addedAt = song.added_at ? ` · 添加于 ${song.added_at}` : "";
        const categoryTags = `${renderCategoryTags(song.language, "language")}${renderCategoryTags(song.genre, "genre")}`;
        const langGenre = categoryTags ? `<div class="song-tags">${categoryTags}</div>` : "";

        return `
          <li data-song-title="${utils.escapeHtml(song.title)}" title="点击复制「点歌 ${utils.escapeHtml(song.title)}」">
            ${cover}
            <div class="song-info">
              <div class="song-title">
                ${utils.escapeHtml(song.title)}
                ${access}
              </div>
              <div class="song-meta">
                ${meta}${addedAt}
                ${langGenre}
                ${songNote}
              </div>
            </div>
            ${songLink}
          </li>`;
      })
      .join("");
  }

  function fallbackCopy(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand("copy");
      showCopyToast(`已复制：${text}`);
    } catch (error) {
      showCopyToast("复制失败，请手动复制");
    }
    document.body.removeChild(textarea);
  }

  function showCopyToast(message) {
    const existing = document.getElementById("copy-toast");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.id = "copy-toast";
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--card);
      color: var(--text);
      padding: 0.8rem 1.5rem;
      border-radius: 30px;
      box-shadow: var(--shadow);
      font-size: 0.9rem;
      z-index: 10000;
      animation: toastIn 0.3s ease, toastOut 0.3s ease 2s forwards;
    `;
    document.body.appendChild(toast);

    if (!document.getElementById("toast-style")) {
      const style = document.createElement("style");
      style.id = "toast-style";
      style.textContent = `
        @keyframes toastIn {
          from { opacity: 0; transform: translate(-50%, 20px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        @keyframes toastOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }

    setTimeout(() => toast.remove(), 2500);
  }

  function copySongTitle(title) {
    const text = `点歌 ${title}`;
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => showCopyToast(`已复制：${text}`)).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  }

  function switchView(viewMode) {
    const state = getState();
    const container = document.getElementById("playlist-container");
    if (!container) return;

    document.querySelectorAll(".view-btn").forEach((button) => {
      button.classList.toggle("active", button.dataset.view === viewMode);
    });

    container.classList.remove("list-view", "grid-view");
    container.classList.add(viewMode === "grid" ? "grid-view" : "list-view");

    if (state?.playlistData?.items) {
      container.innerHTML = renderPlaylist(state.playlistData.items, viewMode);
    }

    localStorage.setItem("suki_playlist_view", viewMode);
  }

  function playRandom() {
    const state = getState();
    if (!state?.playlistData?.items?.length) {
      alert("暂无可播放的歌曲～");
      return;
    }

    const filteredItems = filterSongsLogic(state.playlistData.items);
    if (!filteredItems.length) {
      alert("当前筛选条件下暂无可播放的歌曲～");
      return;
    }

    const randomIndex = Math.floor(Math.random() * filteredItems.length);
    state.currentRandomSong = filteredItems[randomIndex];

    document.getElementById("modal-song-title").textContent = state.currentRandomSong.title;

    const coverEl = document.getElementById("modal-song-cover");
    if (state.currentRandomSong.cover) {
      coverEl.src = state.currentRandomSong.cover;
      coverEl.style.display = "block";
    } else {
      coverEl.style.display = "none";
    }

    document.getElementById("modal-song-artist").textContent = state.currentRandomSong.artist ? `${state.currentRandomSong.artist}` : "";

    const metaParts = [];
    if (state.currentRandomSong.language) metaParts.push(renderTagText(state.currentRandomSong.language));
    if (state.currentRandomSong.genre) metaParts.push(renderTagText(state.currentRandomSong.genre));
    document.getElementById("modal-song-meta").textContent = metaParts.join("  |  ");

    const accessEl = document.getElementById("modal-song-access");
    if (state.currentRandomSong.access) {
      accessEl.innerHTML = renderAccessTags(state.currentRandomSong.access, "modal-access-tag");
    } else {
      accessEl.textContent = "";
    }

    const noteEl = document.getElementById("modal-song-note");
    if (state.currentRandomSong.note) {
      noteEl.textContent = state.currentRandomSong.note;
      noteEl.style.display = "block";
    } else {
      noteEl.textContent = "";
      noteEl.style.display = "none";
    }

    document.getElementById("random-modal").style.display = "flex";
  }

  function closeModal() {
    const state = getState();
    document.getElementById("random-modal").style.display = "none";
    state.currentRandomSong = null;
    document.getElementById("modal-song-cover").style.display = "none";
    document.getElementById("modal-song-artist").textContent = "";
    document.getElementById("modal-song-meta").textContent = "";
    document.getElementById("modal-song-access").innerHTML = "";
  }

  function playSelected() {
    const state = getState();
    if (!state?.currentRandomSong) {
      closeModal();
      return;
    }

    if (!state.currentRandomSong.url) {
      alert(`"${state.currentRandomSong.title}" 暂无播放链接～`);
      closeModal();
      return;
    }

    window.open(state.currentRandomSong.url, "_blank", "noopener,noreferrer");
    closeModal();

    const button = document.querySelector(".random-btn");
    if (!button) return;

    const originalText = button.textContent;
    button.textContent = "已播放";
    button.style.background = "#c6f6d5";
    button.style.color = "#22543d";
    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = "";
      button.style.color = "";
    }, 2000);
  }

  function copyRandomSong() {
    const state = getState();
    if (!state?.currentRandomSong?.title) {
      showCopyToast("暂无可复制的歌曲");
      return;
    }

    const text = `点歌 ${state.currentRandomSong.title}`;
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          showCopyToast(`已复制：${text}`);
          setTimeout(() => closeModal(), 800);
        })
        .catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  }

  function filterSongs() {
    const state = getState();
    if (!state?.playlistData?.items) return;

    const container = document.getElementById("playlist-container");
    const viewMode = container?.classList.contains("grid-view") ? "grid" : "list";
    const filtered = filterSongsLogic(state.playlistData.items);

    if (container) {
      container.innerHTML = renderPlaylist(state.playlistData.items, viewMode);
    }

    const tip = document.getElementById("search-result-tip");
    if (!tip) return;

    const total = state.playlistData.items.length;
    const shown = filtered.length;
    if (shown < total || document.getElementById("song-search")?.value) {
      tip.style.display = "block";
      tip.textContent = `找到 ${shown} / ${total} 首歌曲`;
    } else {
      tip.style.display = "none";
    }
  }

  function clearSearch() {
    const input = document.getElementById("song-search");
    if (!input) return;
    input.value = "";
    filterSongs();
    input.focus();
  }

  function switchSection(target) {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.toggle("active", link.dataset.target === target);
    });

    const section = document.getElementById(`section-${target}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function initNavScrollSpy() {
    const sections = ["playlist", "bio"]
      .map((id) => document.getElementById(`section-${id}`))
      .filter(Boolean);
    if (!sections.length) return;

    const navLinks = document.querySelectorAll(".nav-link");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace("section-", "");
            navLinks.forEach((link) => {
              link.classList.toggle("active", link.dataset.target === id);
            });
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
  }

  template.playlist = {
    bindPlaylistInteractions,
    clearSearch,
    closeModal,
    copyRandomSong,
    copySongTitle,
    filterSongs,
    filterSongsLogic,
    initNavScrollSpy,
    playRandom,
    playSelected,
    populateFilterOptions,
    renderPlaylist,
    restorePlaylistView,
    switchSection,
    switchView,
  };

  window.clearSearch = clearSearch;
  window.closeModal = closeModal;
  window.copyRandomSong = copyRandomSong;
  window.filterSongs = filterSongs;
  window.playRandom = playRandom;
  window.playSelected = playSelected;
  window.switchSection = switchSection;
  window.switchView = switchView;
})();
