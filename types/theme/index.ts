import { ReactNode } from "react";

export default interface spacerProps {
    width : number;
    height: number;
    style?: object;
    children: ReactNode | undefined;
}

export default interface themeTextProps {
    style?: object;
    title?: boolean; 
    children: ReactNode;
}