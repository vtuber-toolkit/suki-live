(function () {
  const template = (window.SukiTemplate = window.SukiTemplate || {});

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function sanitizeRenderedHtml(html) {
    const templateEl = document.createElement("template");
    templateEl.innerHTML = html;

    const blockedTags = new Set(["script", "style", "iframe", "object", "embed", "link", "meta"]);
    const allowedTags = new Set([
      "a",
      "blockquote",
      "br",
      "code",
      "del",
      "em",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "hr",
      "li",
      "ol",
      "p",
      "pre",
      "strong",
      "table",
      "tbody",
      "td",
      "th",
      "thead",
      "tr",
      "ul",
    ]);

    const walk = (node) => {
      Array.from(node.childNodes).forEach((child) => {
        if (child.nodeType === Node.COMMENT_NODE) {
          child.remove();
          return;
        }

        if (child.nodeType !== Node.ELEMENT_NODE) return;

        const tag = child.tagName.toLowerCase();
        if (blockedTags.has(tag)) {
          child.remove();
          return;
        }

        if (!allowedTags.has(tag)) {
          const fragment = document.createDocumentFragment();
          while (child.firstChild) fragment.appendChild(child.firstChild);
          child.replaceWith(fragment);
          walk(node);
          return;
        }

        Array.from(child.attributes).forEach((attr) => {
          const name = attr.name.toLowerCase();

          if (tag === "a" && name === "href") {
            const href = child.getAttribute("href") || "";
            if (/^https?:\/\//.test(href)) {
              child.setAttribute("target", "_blank");
              child.setAttribute("rel", "noopener noreferrer");
            } else if (href.startsWith("#")) {
              child.removeAttribute("target");
              child.removeAttribute("rel");
            } else {
              child.setAttribute("href", "#");
              child.removeAttribute("target");
              child.removeAttribute("rel");
            }
            return;
          }

          child.removeAttribute(attr.name);
        });

        walk(child);
      });
    };

    walk(templateEl.content);
    return templateEl.innerHTML;
  }

  function normalizeTagValues(value) {
    const rawValues = Array.isArray(value) ? value : [value];
    const tags = rawValues
      .flatMap((item) => String(item || "").split("/"))
      .map((item) => item.trim())
      .filter(Boolean);

    return [...new Set(tags)];
  }

  function getPrimaryAccess(accessValue) {
    return normalizeTagValues(accessValue)[0] || "";
  }

  function getVtuberId() {
    const host = window.location.hostname;
    if (host === "suki.live" || host === "www.suki.live") return null;
    return host.split(".")[0];
  }

  function getApexOrigin() {
    return "https://suki.live";
  }

  template.utils = {
    escapeHtml,
    normalizeTagValues,
    sanitizeRenderedHtml,
    getPrimaryAccess,
    getApexOrigin,
    getVtuberId,
  };
})();
