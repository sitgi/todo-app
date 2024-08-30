// src/app/layout.tsx
import './globals.css';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>To-Do App</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
