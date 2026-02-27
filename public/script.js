document.addEventListener("DOMContentLoaded", () => {
  const copyBtn = document.getElementById("copyBtn");
  const caText = document.getElementById("caAddress").innerText;
  const toast = document.getElementById("copyToast");

  copyBtn.addEventListener("click", () => {
    navigator.clipboard
      .writeText(caText)
      .then(() => {
        // Show toast
        toast.classList.add("show");

        // Add a fun bounce effect to the button
        copyBtn.style.transform = "scale(0.9)";
        setTimeout(() => {
          copyBtn.style.transform = "scale(1.1)";
          setTimeout(() => {
            copyBtn.style.transform = "";
          }, 150);
        }, 100);

        // Hide toast after 2 seconds
        setTimeout(() => {
          toast.classList.remove("show");
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
        copyBtn.innerText = "Failed";
      });
  });

  // Add scroll animation observer for the chart section
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    },
  );

  document.querySelectorAll(".chart-section *").forEach((el) => {
    if (el.style.animation) {
      el.style.animationPlayState = "paused";
      observer.observe(el);
    }
  });
});
