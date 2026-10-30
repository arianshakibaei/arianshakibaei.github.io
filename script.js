// Footer dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("updated").textContent =
  new Date(document.lastModified).toLocaleDateString("en-US", { month: "long", year: "numeric" });

// Highlight the nav link for the section currently in view
const links = document.querySelectorAll(".sidebar nav a");
const map = new Map([...links].map(a => [a.getAttribute("href").slice(1), a]));

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(l => l.classList.remove("active"));
      map.get(e.target.id)?.classList.add("active");
    }
  });
}, { rootMargin: "-20% 0px -70% 0px" });

document.querySelectorAll("main section[id]").forEach(s => observer.observe(s));
