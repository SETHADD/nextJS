import React from "react";
export default function PetLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p>I am a layout wrapping everything under the /pets route.</p>
      {children}
    </div>
  );
}
