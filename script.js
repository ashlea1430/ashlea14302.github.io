const tabs = document.querySelectorAll(".tab");
const content = document.getElementById("contentText");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const type = tab.getAttribute("data-tab");

    if (type === "design") {
      content.innerHTML = `
        Transparent Black or Silver<br>
        See the advanced cooling in action.<br>
        Looks As Good As It Runs<br>
        Full-screen AMOLED with 2688 × 1216 high-resolution.
      `;
    }

    if (type === "performance") {
      content.innerHTML = `
        Snapdragon processor for gaming<br>
        Advanced cooling system<br>
        High refresh rate display<br>
        Long battery life
      `;
    }
  });
});