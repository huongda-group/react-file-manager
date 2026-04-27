import {
  FileAudio,
  FileImage,
  FileText,
  FileVideo,
  FileArchive,
  FileCode,
  FileSpreadsheet,
  FilePieChart,
  File,
  LucideIcon,
} from "lucide-react";
import { ReactElement } from "react";
import { AnimatedIcon } from "../components/ui/animated-icon";

// Define the static configuration for icons instead of instantiating React Elements directly.
// This prevents creating thousands of unused elements when a directory has many files.
const ICON_CONFIG: Record<string, { icon: LucideIcon; color: string }> = {
  pdf: { icon: FileText, color: "#ef4444" }, // Red for PDF
  jpg: { icon: FileImage, color: "#3b82f6" },
  jpeg: { icon: FileImage, color: "#3b82f6" },
  png: { icon: FileImage, color: "#3b82f6" },
  txt: { icon: FileText, color: "#9ca3af" },
  doc: { icon: FileText, color: "#2563eb" },
  docx: { icon: FileText, color: "#2563eb" },
  mp4: { icon: FileVideo, color: "#a855f7" },
  webm: { icon: FileVideo, color: "#a855f7" },
  mp3: { icon: FileAudio, color: "#ec4899" },
  m4a: { icon: FileAudio, color: "#ec4899" },
  zip: { icon: FileArchive, color: "#f59e0b" },
  ppt: { icon: FilePieChart, color: "#f97316" },
  pptx: { icon: FilePieChart, color: "#f97316" },
  xls: { icon: FileSpreadsheet, color: "#10b981" },
  xlsx: { icon: FileSpreadsheet, color: "#10b981" },
  exe: { icon: File, color: "#6b7280" },
  html: { icon: FileCode, color: "#f97316" },
  css: { icon: FileCode, color: "#3b82f6" },
  js: { icon: FileCode, color: "#eab308" },
  php: { icon: FileCode, color: "#818cf8" },
  py: { icon: FileCode, color: "#3b82f6" },
  java: { icon: FileCode, color: "#ef4444" },
  cpp: { icon: FileCode, color: "#3b82f6" },
  c: { icon: FileCode, color: "#3b82f6" },
  ts: { icon: FileCode, color: "#3b82f6" },
  jsx: { icon: FileCode, color: "#61dafb" },
  tsx: { icon: FileCode, color: "#61dafb" },
  json: { icon: FileCode, color: "#f59e0b" },
  xml: { icon: FileCode, color: "#f59e0b" },
  sql: { icon: FileCode, color: "#3b82f6" },
  csv: { icon: FileSpreadsheet, color: "#10b981" },
  md: { icon: FileText, color: "#fff" },
  svg: { icon: FileCode, color: "#f59e0b" },
};

// Global cache to store generated elements keyed by size.
// This ensures we genuinely only ever instantiate 34 React elements globally per unique size.
const globalIconCache = new Map<number | undefined, Record<string, ReactElement>>();

export const useFileIcons = (size?: number): Record<string, ReactElement> => {
  // Rather than useMemo (which creates a cache per-component instance), use a global cache.
  // This drastically reduces garbage collection churn and improves render performance when many files are mounted.
  if (!globalIconCache.has(size)) {
    const icons: Record<string, ReactElement> = {};
    for (const [key, config] of Object.entries(ICON_CONFIG)) {
      icons[key] = (
        <AnimatedIcon
          key={`${key}-${size}`}
          icon={config.icon}
          size={size}
          color={config.color}
        />
      );
    }
    globalIconCache.set(size, icons);
  }

  return globalIconCache.get(size)!;
};
