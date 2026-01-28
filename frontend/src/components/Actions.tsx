import type { ReactNode } from "react";

export default function Actions({ children }: { children: ReactNode }) {
  return <div className="actions">{children}</div>;
}
