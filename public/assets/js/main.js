document.addEventListener("DOMContentLoaded", () => {
  // Placeholder for simple interactions (e.g., active nav highlight)
  const path = location.pathname.replace(/\/+$/, "");
  document.querySelectorAll("nav a").forEach((anchor) => {
    if (anchor.getAttribute("href") === path) {
      anchor.style.textDecoration = "underline";
    }
  });
});
