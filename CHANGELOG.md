# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2026-01-29

### Added
- **Trash functionality**: New `trash` prop to enable "Move to Trash" option in delete confirmation modal
- **Compress/Decompress**: New `onCompress` and `onDecompress` callbacks with corresponding permissions
- **Chmod permissions**: New `onChmod` callback and `chmod` permission for file/folder permission management
- **Theme support**: New `theme` prop ("light" | "dark") for built-in dark mode
- **Collapsible navigation**: New `collapsibleNav` and `defaultNavExpanded` props
- **Custom date formatting**: New `formatDate` prop for custom date display
- **Progress tracking**: Upload progress callback support via `onProgress` in `onUpload`
- **25 languages supported**: ar-SA, da-DK, de-DE, en-US, es-ES, fa-IR, fi-FI, fr-FR, he-IL, hi-IN, it-IT, ja-JP, ko-KR, nb-NO, pl-PL, pt-BR, pt-PT, ru-RU, sv-SE, tr-TR, uk-UA, ur-UR, vi-VN, zh-CN

### Changed
- Improved TypeScript type exports (`IFile`, `IFolder` now publicly exported)
- Enhanced file preview component with better media support
- Updated dependencies to latest versions

### Fixed
- Build warnings for unused variables
- Correct `main` field in package.json pointing to ES module output
