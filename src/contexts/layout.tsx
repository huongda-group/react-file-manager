import { createContext, useContext, useState, PropsWithChildren } from "react";

export type LayoutType = "grid" | "list";

interface ILayoutContext {
  activeLayout: LayoutType;
  setActiveLayout: React.Dispatch<React.SetStateAction<LayoutType>>;
}

const LayoutContext = createContext<ILayoutContext | undefined>(undefined);

interface LayoutProviderProps extends PropsWithChildren {
  layout: string;
}

export const LayoutProvider = ({ children, layout }: LayoutProviderProps) => {
  const [activeLayout, setActiveLayout] = useState<LayoutType>(() =>
    validateLayout(layout)
  );

  function validateLayout(layout: string): LayoutType {
    const acceptedValue: LayoutType[] = ["list", "grid"];
    return acceptedValue.includes(layout as LayoutType)
      ? (layout as LayoutType)
      : "grid";
  }

  return (
    <LayoutContext.Provider value={{ activeLayout, setActiveLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = (): ILayoutContext => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
};
