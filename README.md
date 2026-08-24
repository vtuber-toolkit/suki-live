# suki.live

Lightweight static profile and playlist hosting for virtual creators.

[Homepage](https://suki.live) · [Registry](https://suki.live/registry.html) · [Dreamail Guide](https://dreamail.cn/)

## Overview

This repository powers `suki.live`, a static site hosted with GitHub Pages and routed by Cloudflare.

Each creator gets a subdomain such as:

```text
https://your-id.suki.live
```

Most pages use the shared template in `u/index.html`. A creator only needs to provide content files such as `info.json`, `playlist.json`, and optional assets.

## What the site currently supports

- Subdomain-based creator pages
- Shared playlist/profile template
- Optional Markdown bio
- Optional avatar and favicon
- Optional header and body background images
- Optional Dreamail link
- Registry page built from `u/registry.json`
- Optional custom page redirect via `use_custom_page: true`

## Repository structure

```text
suki-live/
├── assets/
│   ├── css/
│   │   ├── site.css
│   │   └── template.css
│   └── js/
│       ├── registry.js
│       └── template/
│           ├── backgrounds.js
│           ├── bili.js
│           ├── bootstrap.js
│           ├── loaders.js
│           ├── playlist.js
│           ├── render.js
│           └── utils.js
├── index.html
├── registry.html
├── CNAME
├── README.md
├── scripts/
│   └── validate-repo.mjs
└── u/
    ├── index.html
    ├── registry.json
    ├── example/
    │   ├── info.json
    │   ├── playlist.json
    │   ├── bio.md
    │   ├── avatar.png
    │   ├── favicon.ico
    │   ├── head_bg.png
    │   ├── head_bg_mobile.png
    │   ├── body_bg.png
    │   ├── body_bg_mobile.png
    │   └── custom.html
    └── your-id/
```

## Registering a new page

### 1. Fork the repository

Create a fork of:

```text
https://github.com/vtuber-toolkit/suki-live
```

### 2. Create your directory

Add a directory under `u/`:

```text
u/your-id/
```

`your-id` becomes your subdomain:

```text
https://your-id.suki.live
```

### 3. Add the required files

Minimum setup:

```text
u/your-id/
├── info.json
└── playlist.json
```

Optional files:

```text
u/your-id/
├── bio.md
├── avatar.png
├── favicon.ico
├── head_bg.png
├── head_bg_mobile.png
├── body_bg.png
├── body_bg_mobile.png
└── custom.html
```

### 4. Add your registry entry

Update `u/registry.json` and add a new object to `vtubers`.

### 5. Open a pull request

Submit your changes to:

```text
https://github.com/vtuber-toolkit/suki-live
```

Recommended PR title:

```text
[Register] your-id
```

## `info.json`

Example:

```json
{
  "name": "Your Name",
  "tagline": "A short description",
  "bio": true,
  "show_playlist": true,
  "show_header_bg": false,
  "show_body_bg": false,
  "anonymail": "https://dreamail.cn/send?dm=xxx",
  "social": [
    { "label": "B站", "url": "https://space.bilibili.com/xxx" }
  ],
  "created_at": "2026-01-01",
  "updated_at": "2026-01-01"
}
```

Fields:

| Field | Type | Required | Description |
|------|------|------|------|
| `name` | string | yes | Display name |
| `tagline` | string | no | Short subtitle |
| `bio` | boolean | no | Whether to load `bio.md` |
| `show_playlist` | boolean | no | Whether to display the playlist section |
| `show_header_bg` | boolean | no | Whether to use `head_bg.png` or `head_bg_mobile.png` |
| `show_body_bg` | boolean | no | Whether to use `body_bg.png` or `body_bg_mobile.png` |
| `anonymail` | string | no | Dreamail link |
| `social` | array | no | Social link list |
| `created_at` | string | no | Creation date |
| `updated_at` | string | no | Last update date |
| `use_custom_page` | boolean | no | Redirects to `custom.html` instead of rendering the shared template |

## `playlist.json`

Example:

```json
{
  "title": "My Playlist",
  "description": "Optional description",
  "items": [
    {
      "title": "Song Title",
      "artist": "Artist Name",
      "source": "B站",
      "language": "中文",
      "genre": "流行",
      "access": "免费",
      "url": "https://example.com",
      "cover": "https://example.com/cover.jpg",
      "note": "Optional note",
      "added_at": "2026-01-01"
    }
  ]
}
```

Fields for each item:

| Field | Type | Required | Description |
|------|------|------|------|
| `title` | string | yes | Song title |
| `artist` | string | no | Artist or original performer |
| `source` | string | no | Platform or source |
| `language` | string or string[] | no | One or more language labels; single-string values remain supported |
| `genre` | string or string[] | no | One or more genre labels; single-string values remain supported |
| `access` | string or string[] | no | One or more access tags such as `免费` or `歌切`; single-string values remain supported |
| `url` | string | no | Playback link |
| `cover` | string | no | Cover image URL |
| `note` | string | no | Free-form note |
| `added_at` | string | no | Added date |

## Optional `bio.md`

If `bio` is `true`, the shared template will try to load `bio.md`.

The page currently supports simple Markdown content including:

- headings
- paragraphs
- emphasis
- links
- blockquotes
- tables
- horizontal rules

## Custom pages

If you set:

```json
{
  "use_custom_page": true
}
```

the current shared template redirects the creator page to:

```text
u/your-id/custom.html
```

This is the current behavior of the repository and should be treated as the supported custom-page path.

## Registry format

`u/registry.json` contains the public directory listing used by `registry.html`.

Example entry:

```json
{
  "id": "your-id",
  "name": "Your Name",
  "tagline": "Your short description",
  "registered_at": "2026-01-01",
  "status": "active"
}
```

Fields:

| Field | Type | Required | Description |
|------|------|------|------|
| `id` | string | yes | Subdomain identifier, must match the directory name |
| `name` | string | yes | Display name |
| `tagline` | string | no | Short description shown in the registry |
| `registered_at` | string | no | Registration date |
| `status` | string | yes | One of `active`, `inactive`, `banned`, or `memorial` |

## Notes for contributors

- Keep file names and directory names consistent with the chosen subdomain ID
- Creator directory names and registry IDs should be lowercase with no leading or trailing spaces
- Prefer relative paths for creator-owned files
- Keep playlist data valid JSON

## Validation

Run the repository checks before submitting a pull request:

```text
node scripts/validate-repo.mjs
```

The validator currently checks:

- every `.json` file parses successfully
- every creator directory under `u/` is lowercase
- every registry `id` is trimmed, lowercase, unique, and matches a real directory
- `playlist.json` exists when playlists are enabled
- `bio.md` exists when `bio: true`
- `custom.html` exists when `use_custom_page: true`
- Keep public-facing copy factual and aligned with the current implementation

## Common issues

### The page returns 404

Check:

1. The pull request has been merged
2. `u/your-id/info.json` exists and is valid JSON
3. The creator ID matches the intended subdomain
4. Deployment and cache have caught up

### The avatar does not show

Check:

1. The file is named `avatar.png`
2. It exists in `u/your-id/`
3. The image is valid and readable by the browser

### The bio does not show

Check:

1. `bio` is set to `true` in `info.json`
2. `bio.md` exists in the same directory

### The custom page does not open

Check:

1. `use_custom_page` is set to `true`
2. `custom.html` exists in `u/your-id/`

## Contribution

Issues and pull requests are welcome.

Suggested PR title patterns:

```text
[Register] add creator page
[Fix] correct template behavior
[Docs] rewrite project documentation
```

Repository:

[vtuber-toolkit/suki-live](https://github.com/vtuber-toolkit/suki-live)
