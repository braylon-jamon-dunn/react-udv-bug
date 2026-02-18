"use client";

import {
  useState,
  useDeferredValue,
  use,
  Suspense,
  type ReactNode,
} from "react";
import { renderAction } from "./actions";

export function ClientWrapper({ children }: { children: ReactNode }) {
  const t = performance.now();
  while (performance.now() - t < 2) {
    // do nothing
  }
  return <>{children}</>;
}

function Resolved({ promise }: { promise: Promise<ReactNode> }) {
  return <>{use(promise)}</>;
}

const initialPromise = Promise.resolve(<div>ready</div>);

export function TestPreviewClient() {
  const [promise, setPromise] = useState<Promise<ReactNode>>(initialPromise);
  const deferred = useDeferredValue(promise);

  function handleChange(value: string) {
    setPromise(renderAction(value));
  }

  return (
    <div style={{ padding: 16, fontFamily: "monospace" }}>
      <textarea
        placeholder="type here"
        onChange={(e) => handleChange(e.target.value)}
        rows={3}
        style={{ width: "100%", fontFamily: "monospace" }}
      />
      <div
        data-testid="deferred"
        style={{ border: "1px solid #ccc", padding: 8, minHeight: 40 }}
      >
        <Suspense fallback={<div>loading...</div>}>
          <Resolved promise={deferred} />
        </Suspense>
      </div>
    </div>
  );
}
