document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("cookiesConsent")) return;

  const style = document.createElement("style");
  style.textContent = `
    .cookie-banner {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: aquamarine;
      color: black;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: 'Original Surfer', sans-serif;
      padding: 15px 30px;
      z-index: 9999;
      box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
      flex-wrap: wrap;
      gap: 10px;
    }

    .cookie-banner p {
      margin: 0;
      flex: 1;
      min-width: 200px;
    }

    .cookie-banner a {
      color: black;
      text-decoration: underline;
    }

    .cookie-buttons {
      display: flex;
      gap: 10px;
    }

    .cookie-buttons button {
      background-color: #2b2d30;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 8px;
      font-family: 'Original Surfer', sans-serif;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .cookie-buttons button:hover {
      background-color: #1e1f21;
    }
  `;
  document.head.appendChild(style);

  const banner = document.createElement("div");
  banner.className = "cookie-banner";
  banner.innerHTML = `
    <p>
      Ce site utilise des cookies pour améliorer votre expérience. 
      <a href="/html/politique.html">En savoir plus</a>
    </p>
    <div class="cookie-buttons">
      <button id="accept-cookies">J'accepte</button>
      <button id="reject-cookies">Je refuse</button>
    </div>
  `;
  document.body.appendChild(banner);

  document
    .getElementById("accept-cookies")
    .addEventListener("click", function () {
      localStorage.setItem("cookiesConsent", "accepted");
      banner.remove();
    });

  document
    .getElementById("reject-cookies")
    .addEventListener("click", function () {
      localStorage.setItem("cookiesConsent", "rejected");
      banner.remove();
    });
});
