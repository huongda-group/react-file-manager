import { useState, useCallback, useRef, useEffect } from 'react';

export type ColumnId = 'name' | 'modified' | 'size' | 'permissions';

export interface ColumnWidths {
    name: number;
    modified: number;
    size: number;
    permissions: number;
}

const MIN_WIDTH = 50; // pixels

export const useTableResize = (initialWidths: ColumnWidths) => {
    const [columnWidths, setColumnWidths] = useState<ColumnWidths>(initialWidths);
    const [isResizing, setIsResizing] = useState(false);
    const resizingColRef = useRef<ColumnId | null>(null);
    const startXRef = useRef<number>(0);
    const startWidthRef = useRef<number>(0);

    const handleMouseDown = useCallback((e: React.MouseEvent, colId: ColumnId) => {
        e.preventDefault();
        e.stopPropagation();
        setIsResizing(true);
        resizingColRef.current = colId;
        startXRef.current = e.clientX;
        startWidthRef.current = columnWidths[colId];

        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
    }, [columnWidths]);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!isResizing || !resizingColRef.current) return;

        const deltaX = e.clientX - startXRef.current;
        const newWidth = Math.max(MIN_WIDTH, startWidthRef.current + deltaX);

        setColumnWidths(prev => ({
            ...prev,
            [resizingColRef.current!]: newWidth
        }));
    }, [isResizing]);

    const handleMouseUp = useCallback(() => {
        setIsResizing(false);
        resizingColRef.current = null;
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
    }, []);

    useEffect(() => {
        if (isResizing) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isResizing, handleMouseMove, handleMouseUp]);

    return {
        columnWidths,
        handleMouseDown,
        isResizing
    };
};
