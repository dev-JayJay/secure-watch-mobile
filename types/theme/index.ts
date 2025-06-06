import { ReactNode } from "react";

export interface spacerProps {
    width : number;
    height: number;
    style?: object;
    children: ReactNode | undefined;
}

export interface themeTextProps {
    style?: object;
    title?: boolean; 
    children: ReactNode;
}
export interface ThemeViewProps {
    safe?: boolean;
    className?: string | undefined;
    children?: ReactNode;
}