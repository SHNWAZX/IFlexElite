import { useEffect } from "react";

export default function CopyGuard() {
  useEffect(() => {
    const block = (e: Event) => {
      e.preventDefault();
      return false;
    };
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      // F12
      if (e.key === "F12") return block(e);
      // Ctrl/Cmd + U (view source), S (save), P (print)
      if ((e.ctrlKey || e.metaKey) && ["u", "s", "p"].includes(k)) return block(e);
      // Ctrl/Cmd + Shift + I/J/C (devtools)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && ["i", "j", "c"].includes(k))
        return block(e);
      // Ctrl/Cmd + C/X/A (copy/cut/select all) — allow inside inputs
      const t = e.target as HTMLElement | null;
      const editable =
        t &&
        (t.tagName === "INPUT" ||
          t.tagName === "TEXTAREA" ||
          t.isContentEditable);
      if (
        !editable &&
        (e.ctrlKey || e.metaKey) &&
        ["c", "x", "a"].includes(k)
      )
        return block(e);
    };

    document.addEventListener("contextmenu", block);
    document.addEventListener("copy", block);
    document.addEventListener("cut", block);
    document.addEventListener("dragstart", block);
    document.addEventListener("selectstart", block);
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("contextmenu", block);
      document.removeEventListener("copy", block);
      document.removeEventListener("cut", block);
      document.removeEventListener("dragstart", block);
      document.removeEventListener("selectstart", block);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return null;
}