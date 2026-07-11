// markito.io — theme toggle (persisted; syncs the button label)
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  var label = document.getElementById('theme-label');

  function sync() {
    // Button offers the OTHER theme.
    var current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    if (label) label.textContent = current === 'light' ? 'dark' : 'light';
  }

  sync();

  if (btn) {
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('markito-theme', next); } catch (e) {}
      sync();
    });
  }
})();
