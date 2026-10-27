"use client";

import { useEffect } from "react";

// Smooth-scrolls to the section named in the URL hash when arriving from another page.
export default function ScrollToHash() {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const timer = setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 50);
    return () => clearTimeout(timer);
  }, []);

  return null;
}
