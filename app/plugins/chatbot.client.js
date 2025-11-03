// Critical River Bot: http://localhost:3000

export default defineNuxtPlugin(() => {
  if (process.client) {
    (function (w, d, s, u, i, t) {
      w["YourBotObject"] = i;
      w[i] =
        w[i] ||
        function () {
          (w[i].q = w[i].q || []).push(arguments);
        };
      t = d.createElement(s);
      t.async = 1;
      t.src = u;
      t.dataset.installId = "5963ffd5-1d28-4d15-b4a1-eca5675531c1";
      d.head.appendChild(t);
    })(
      window,
      document,
      "script",
      "https://chat-api.pixeldust.app/embed.js?install_id=5963ffd5-1d28-4d15-b4a1-eca5675531c1",
      "yourbot"
    );

    // Optional runtime configuration
    window.yourbot &&
      window.yourbot("config", {
        theme: { primary: "#000000" },
        position: "right",
      });
  }
});
