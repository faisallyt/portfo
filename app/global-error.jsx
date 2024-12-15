"use client";

import Error from "next/error";

export default function GlobalError({ error }) {
  return (
    <html>
      <body>
        <Error statusCode={500} title="An unexpected error occurred" />
      </body>
    </html>
  );
}
