// global Variables

const success = document.querySelector(".success");
const warning = document.querySelector(".warning");
const info = document.querySelector(".info");

let toastContainer;

function toastGenerator({
  message,
  background = "#00214d",
  color = "#fffffe",
  length = "3000ms",
}) {
  toastContainer.insertAdjacentHTML(
    "beforeend",
    `<p class="toast"
    style=
    "background-color: ${background};
    color: ${color};
    animation-duration=${length}">
    ${message}    
    </p>`
  );
  const toast = toastContainer.lastElementChild;
  toast.addEventListener("animationend", () => toast.remove());
}

(function initToast() {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<div class="toast-container"></div>
    
    <style>
  
    .toast-container {
      position: fixed;
      top: 1rem;
      right: 1.5rem;
      display: grid;
      justify-items: end;
      gap: 1.5rem;
    }
    
    .toast {
      font-size: 1.5rem;
      font-weight: bold;
      line-height: 1;
      padding: 0.5em 1em;
      background-color: lightblue;
      animation: Toasted 3000ms cubic-bezier(0.785, 0.135, 0.15, 0.86) forwards;
    }
    
    @keyframes Toasted {
      0%,
      100% {
        transform: translateY(-150%);
        opacity: 0;
      }
      10%,
      90% {
        transform: translateY(0);
        opacity: 1;
      }
    }
      </style>`
  );
  toastContainer = document.querySelector(".toast-container");
})();

success.addEventListener("click", () => {
  toastGenerator({
    message: "👊 You got this, kid! 👊",
    background: "hsl(171 100% 46.1%)",
    color: "hsl(171 100% 13.1%)",
    length: "5000ms",
  });
});

warning.addEventListener("click", () => {
  toastGenerator({
    message: "⚠️ Ya sure about that? ⚠️",
    background: "hsl(350 100% 66.5%)",
    color: "hsl(350 100% 13.5%)",
  });
});

info.addEventListener("click", () => {
  toastGenerator({
    message: "✍️ Write this down… ✍️",
    background: "hsl(51 97.8% 65.1%)",
    color: "hsl(51 97.8% 12.1%)",
    length: "8000ms",
  });
});
