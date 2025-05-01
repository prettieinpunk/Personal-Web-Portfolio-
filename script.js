document.addEventListener("mousemove", function (e) {
    const heart = document.createElement("div");
    heart.className = "soft-heart";
    heart.style.left = `${e.pageX}px`;
    heart.style.top = `${e.pageY}px`;
    document.body.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 800);
});
  
document.addEventListener("DOMContentLoaded", () => {
    const nameEl = document.getElementById("fade-name");
    nameEl.style.animation = 'fadeInFromTop 2s ease-out forwards'; 
});
