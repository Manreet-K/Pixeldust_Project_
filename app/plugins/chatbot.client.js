// Critical River Bot: http://localhost:3000

export default defineNuxtPlugin(() => {
    if (process.client) {
        (function(w,d,s,u,i,t){
            w['YourBotObject']=i;w[i]=w[i]||function(){(w[i].q=w[i].q||[]).push(arguments)};
            t=d.createElement(s);t.async=1;t.src=u;
            t.dataset.installId='aa103257-c13c-4ab4-9187-d721bd3a5d1b';
            d.head.appendChild(t);
        })(window,document,'script','https://chatbot-api.criticalriver.ai/embed.js?install_id=aa103257-c13c-4ab4-9187-d721bd3a5d1b','yourbot');
        // optional runtime config example
        yourbot('config', { theme: { primary: '#F97316' }, position: 'right' });
    }
  });


