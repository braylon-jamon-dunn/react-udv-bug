# Next.js/React useDeferredValue bug repro

Type "hello world".

In dev (`npm run dev`), the second text area catches up.

In prod (`npm run build + npm start`), the second text area often gets stuck and never catches up.
