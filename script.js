// No JS needed for the "Start now" link — it navigates directly via href.

// Cycle habit cell state: empty -> green check -> red cross -> empty
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".habit-cell").forEach((cell) => {
    cell.addEventListener("click", () => {
      const state = cell.getAttribute("data-state");
      const next = state === "0" ? "1" : state === "1" ? "2" : "0";
      cell.setAttribute("data-state", next);
    });
  });
});

// Strike through goal text when its checkbox is checked
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".goal-check").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const input = checkbox.previousElementSibling;
      if (input && input.classList.contains("goal-input")) {
        input.classList.toggle("goal-input--done", checkbox.checked);
      }
    });
  });
});
