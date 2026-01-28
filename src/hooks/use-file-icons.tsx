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
} from "lucide-react";
import { ReactElement } from "react";
import { AnimatedIcon } from "../components/ui/animated-icon";

export const useFileIcons = (size?: number): Record<string, ReactElement> => {
  const renderIcon = (Icon: any, color?: string) => (
    <AnimatedIcon icon={Icon} size={size} color={color} />
  );

  const fileIcons: Record<string, ReactElement> = {
    pdf: renderIcon(FileText, "#ef4444"), // Red for PDF
    jpg: renderIcon(FileImage, "#3b82f6"),
    jpeg: renderIcon(FileImage, "#3b82f6"),
    png: renderIcon(FileImage, "#3b82f6"),
    txt: renderIcon(FileText, "#9ca3af"),
    doc: renderIcon(FileText, "#2563eb"),
    docx: renderIcon(FileText, "#2563eb"),
    mp4: renderIcon(FileVideo, "#a855f7"),
    webm: renderIcon(FileVideo, "#a855f7"),
    mp3: renderIcon(FileAudio, "#ec4899"),
    m4a: renderIcon(FileAudio, "#ec4899"),
    zip: renderIcon(FileArchive, "#f59e0b"),
    ppt: renderIcon(FilePieChart, "#f97316"),
    pptx: renderIcon(FilePieChart, "#f97316"),
    xls: renderIcon(FileSpreadsheet, "#10b981"),
    xlsx: renderIcon(FileSpreadsheet, "#10b981"),
    exe: renderIcon(File, "#6b7280"),
    html: renderIcon(FileCode, "#f97316"),
    css: renderIcon(FileCode, "#3b82f6"),
    js: renderIcon(FileCode, "#eab308"),
    php: renderIcon(FileCode, "#818cf8"),
    py: renderIcon(FileCode, "#3b82f6"),
    java: renderIcon(FileCode, "#ef4444"),
    cpp: renderIcon(FileCode, "#3b82f6"),
    c: renderIcon(FileCode, "#3b82f6"),
    ts: renderIcon(FileCode, "#3b82f6"),
    jsx: renderIcon(FileCode, "#61dafb"),
    tsx: renderIcon(FileCode, "#61dafb"),
    json: renderIcon(FileCode, "#f59e0b"),
    xml: renderIcon(FileCode, "#f59e0b"),
    sql: renderIcon(FileCode, "#3b82f6"),
    csv: renderIcon(FileSpreadsheet, "#10b981"),
    md: renderIcon(FileText, "#fff"),
    svg: renderIcon(FileCode, "#f59e0b"),
  };

  return fileIcons;
};

