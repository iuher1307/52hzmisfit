// 🐧 Hiệu ứng fade khi load và rời trang
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

document.querySelectorAll("a").forEach(link => {
  if (link.getAttribute("href") && !link.getAttribute("href").startsWith("#")) {
    link.addEventListener("click", e => {
      e.preventDefault();
      const url = link.href;
      document.body.style.opacity = 0;
      setTimeout(() => {
        window.location.href = url;
      }, 300); // chờ hiệu ứng xong mới chuyển trang
    });
  }
});