(function () {
  // Eventos vão para o dataLayer (GTM) e, se existirem na página, para gtag, Meta Pixel e TikTok Pixel.
  window.dataLayer = window.dataLayer || [];
  function track(name, params) {
    params = params || {};
    window.dataLayer.push(Object.assign({ event: name }, params));
    if (typeof window.gtag === 'function') window.gtag('event', name, params);
    if (typeof window.fbq === 'function') window.fbq('trackCustom', name, params);
    if (window.ttq && typeof window.ttq.track === 'function') window.ttq.track(name, params);
  }
  window.trackEvent = track;

  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-track]');
    if (!el) return;
    if (el.hasAttribute('data-instagram') && el.getAttribute('href') === '#') e.preventDefault();
    track(el.getAttribute('data-track'), { location: el.getAttribute('data-location') || '' });
  });

  // Vídeo leve: só carrega o player do YouTube no clique (sem autoplay com áudio ao abrir a página).
  document.querySelectorAll('[data-video-id]').forEach(function (box) {
    var btn = box.querySelector('.video-poster');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var id = box.getAttribute('data-video-id');
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&playsinline=1&rel=0';
      iframe.title = btn.getAttribute('aria-label') || 'Vídeo';
      iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      iframe.allowFullscreen = true;
      box.innerHTML = '';
      box.appendChild(iframe);
      track(box.getAttribute('data-track-play'), { video_id: id });
    }, { once: true });
  });

  // Visualização do QR Code (ele só aparece no desktop; no celular fica oculto e não dispara).
  var qr = document.querySelector('[data-track-view]');
  if (qr && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && qr.offsetParent !== null) {
          track(qr.getAttribute('data-track-view'));
          io.disconnect();
        }
      });
    }, { threshold: 0.5 });
    io.observe(qr);
  }
})();
