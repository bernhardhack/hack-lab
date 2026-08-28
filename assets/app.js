/* HACK-LAB.SPACE — shared client script.
   Language, read-aloud, text size and easy-read. No dependencies, no build. */

var I18N = {
en:{
  langLabel:"Language", sizeLabel:"Text size", readAloud:"\u25B6 Read this page", readingOn:"\u25A0 Stop", prefs:"Language and reading", readingLabel:"Reading",
  readStop:"\u25A0 Stop", readSlow:"Slower", easyRead:"Easy read",
  speakLabel:"Read this section aloud", stopLabel:"Stop reading",
  tagline:"One lab. Two rooms. Same build.",
  taglineSub:"Everything we make gets made twice \u2014 once in Nairobi, once in Vienna \u2014 so the same thing ends up on both shelves.",
  stVienna:"Vienna \u00b7 ground support", stNairobi:"Nairobi \u00b7 base",
  nowHead:"What we are building now",
  m0Eyebrow:"Mission 00 \u00b7 in progress", m0Title:"Build the plotter",
  m0Why:"A machine that holds a pen and draws what it is told. Design one quest card, and it draws the whole deck while you do something else.",
  m0Open:"Open the mission \u2192", soon:"Not started",
  nextHead:"Next move",
  nextNote:"Three things, one each. Nobody is waiting on a schedule \u2014 each move unlocks the next one.",
  nJacobRole:"Jacob \u00b7 Chief Engineer", nJacobTitle:"Measure the pen",
  nJacobBody:"Pick the gel pen the plotter will use and measure the barrel with the calipers. That number decides the size of the holder, so it has to come from the pen you actually chose.",
  nEmmaRole:"Emma \u00b7 Chief Mission Designer", nEmmaTitle:"Set the test drawing",
  nEmmaBody:"Decide what the machine draws first, on a card about 64\u00d764\u202fmm. Then decide what makes a print good enough to keep. That standard is yours, not the machine's.",
  nBenRole:"Ben \u00b7 Ground Support", nBenTitle:"Turn the measurement into parts",
  nBenBody:"Once Jacob's number arrives, prepare printable holder files to match it. Nothing to prepare before that \u2014 a holder designed for a guessed pen fits nothing.",
  laterHead:"Later missions",
  laterNote:"Not started. Here so they are not forgotten, not to be worked on yet.",
  m1Title:"Hybrid game controller",
  m1Body:"A printed housing holding SPIKE sensors, used to steer Emma's game.",
  m2Title:"Teach the machine, then break it",
  m2Body:"Train an image classifier on an iPad, then find every way to fool it.",
  trainingHead:"Training", courseBadge:"AI course", courseOpen:"Open \u2197",
  courseBody:"The AI course. Runs in a browser on any iPad, installs to the home screen, and comes in three languages.",
  kitHead:"In the lab",
  kitRobotics:"Robotics", kitFab:"Fabrication", kitAI:"AI and vision",
  kitSoftware:"Software", kitDrawing:"Drawing",
  kitSoftwareVal:"Python and games",
  footer:"hack-lab.space \u2014 one lab, two rooms"
},
de:{
  langLabel:"Sprache", sizeLabel:"Textgr\u00f6\u00dfe", readAloud:"\u25B6 Diese Seite vorlesen", readingOn:"\u25A0 Stopp", prefs:"Sprache und Lesen", readingLabel:"Lesen",
  readStop:"\u25A0 Stopp", readSlow:"Langsamer", easyRead:"Leichter lesen",
  speakLabel:"Diesen Abschnitt vorlesen", stopLabel:"Vorlesen stoppen",
  tagline:"Ein Labor. Zwei Zimmer. Derselbe Bau.",
  taglineSub:"Alles, was wir machen, wird zweimal gebaut \u2014 einmal in Nairobi, einmal in Wien \u2014 damit dasselbe Ding in beiden Regalen steht.",
  stVienna:"Wien \u00b7 Ground Support", stNairobi:"Nairobi \u00b7 Basis",
  nowHead:"Woran wir gerade bauen",
  m0Eyebrow:"Mission 00 \u00b7 l\u00e4uft", m0Title:"Den Plotter bauen",
  m0Why:"Eine Maschine, die einen Stift h\u00e4lt und zeichnet, was man ihr sagt. Eine Questkarte entwerfen \u2014 und sie zeichnet das ganze Deck, w\u00e4hrend ihr etwas anderes macht.",
  m0Open:"Zur Mission \u2192", soon:"Noch nicht begonnen",
  nextHead:"N\u00e4chster Zug",
  nextNote:"Drei Sachen, f\u00fcr jeden eine. Kein Zeitplan \u2014 jeder Zug macht den n\u00e4chsten m\u00f6glich.",
  nJacobRole:"Jacob \u00b7 Chief Engineer", nJacobTitle:"Den Stift messen",
  nJacobBody:"Such den Gelstift aus, den der Plotter benutzen soll, und miss den Schaft mit dem Messschieber. Diese Zahl bestimmt die Gr\u00f6\u00dfe der Halterung \u2014 sie muss also von dem Stift kommen, den du wirklich gew\u00e4hlt hast.",
  nEmmaRole:"Emma \u00b7 Chief Mission Designer", nEmmaTitle:"Die Testzeichnung festlegen",
  nEmmaBody:"Entscheide, was die Maschine zuerst zeichnet, auf etwa 64\u00d764\u202fmm. Und dann, wann ein Ausdruck gut genug ist, um ihn zu behalten. Dieser Ma\u00dfstab geh\u00f6rt dir, nicht der Maschine.",
  nBenRole:"Ben \u00b7 Ground Support", nBenTitle:"Aus der Messung Teile machen",
  nBenBody:"Sobald Jacobs Zahl da ist, druckbare Halterungen dazu vorbereiten. Vorher gibt es nichts vorzubereiten \u2014 eine Halterung f\u00fcr einen geratenen Stift passt auf nichts.",
  laterHead:"Sp\u00e4tere Missionen",
  laterNote:"Noch nicht begonnen. Stehen hier, damit sie nicht vergessen werden \u2014 nicht, um jetzt daran zu arbeiten.",
  m1Title:"Hybrider Game-Controller",
  m1Body:"Ein gedrucktes Geh\u00e4use mit SPIKE-Sensoren, mit dem man Emmas Spiel steuert.",
  m2Title:"Bring der Maschine etwas bei \u2014 und brich es",
  m2Body:"Auf dem iPad einen Bildklassifikator trainieren und dann jeden Weg finden, ihn zu t\u00e4uschen.",
  trainingHead:"Training", courseBadge:"KI-Kurs", courseOpen:"\u00d6ffnen \u2197",
  courseBody:"Der KI-Kurs. L\u00e4uft im Browser auf jedem iPad, l\u00e4sst sich auf den Homescreen legen und gibt es in drei Sprachen.",
  kitHead:"Im Labor",
  kitRobotics:"Robotik", kitFab:"Fertigung", kitAI:"KI und Vision",
  kitSoftware:"Software", kitDrawing:"Zeichnen",
  kitSoftwareVal:"Python und Spiele",
  footer:"hack-lab.space \u2014 ein Labor, zwei Zimmer"
},
it:{
  langLabel:"Lingua", sizeLabel:"Dimensione del testo", readAloud:"\u25B6 Leggi questa pagina", readingOn:"\u25A0 Stop", prefs:"Lingua e lettura", readingLabel:"Lettura",
  readStop:"\u25A0 Stop", readSlow:"Pi\u00f9 lento", easyRead:"Lettura facile",
  speakLabel:"Leggi questa sezione ad alta voce", stopLabel:"Ferma la lettura",
  tagline:"Un laboratorio. Due stanze. La stessa costruzione.",
  taglineSub:"Tutto quello che facciamo viene costruito due volte \u2014 una a Nairobi e una a Vienna \u2014 cos\u00ec la stessa cosa finisce su tutti e due gli scaffali.",
  stVienna:"Vienna \u00b7 ground support", stNairobi:"Nairobi \u00b7 base",
  nowHead:"Cosa stiamo costruendo adesso",
  m0Eyebrow:"Missione 00 \u00b7 in corso", m0Title:"Costruire il plotter",
  m0Why:"Una macchina che tiene una penna e disegna quello che le dici. Progetti una carta missione, e lei disegna tutto il mazzo mentre voi fate altro.",
  m0Open:"Vai alla missione \u2192", soon:"Non iniziata",
  nextHead:"Prossima mossa",
  nextNote:"Tre cose, una per ciascuno. Nessun calendario \u2014 ogni mossa rende possibile la successiva.",
  nJacobRole:"Jacob \u00b7 Chief Engineer", nJacobTitle:"Misurare la penna",
  nJacobBody:"Scegli la penna gel che user\u00e0 il plotter e misura il corpo con il calibro. Quel numero decide la misura del supporto, quindi deve venire dalla penna che hai scelto davvero.",
  nEmmaRole:"Emma \u00b7 Chief Mission Designer", nEmmaTitle:"Scegliere il disegno di prova",
  nEmmaBody:"Decidi cosa disegna per prima la macchina, su circa 64\u00d764\u202fmm. E poi quando una stampa \u00e8 abbastanza buona da tenere. Quel criterio \u00e8 tuo, non della macchina.",
  nBenRole:"Ben \u00b7 Ground Support", nBenTitle:"Trasformare la misura in pezzi",
  nBenBody:"Quando arriva il numero di Jacob, preparare i file del supporto che gli corrispondono. Prima non c'\u00e8 niente da preparare \u2014 un supporto fatto per una penna indovinata non entra da nessuna parte.",
  laterHead:"Missioni successive",
  laterNote:"Non iniziate. Sono qui per non dimenticarle, non per lavorarci adesso.",
  m1Title:"Controller di gioco ibrido",
  m1Body:"Una scocca stampata con sensori SPIKE, per guidare il gioco di Emma.",
  m2Title:"Insegna alla macchina, poi rompila",
  m2Body:"Allenare un classificatore di immagini sull'iPad e poi trovare ogni modo di ingannarlo.",
  trainingHead:"Formazione", courseBadge:"Corso IA", courseOpen:"Apri \u2197",
  courseBody:"Il corso di IA. Gira nel browser su qualsiasi iPad, si installa nella schermata home ed \u00e8 in tre lingue.",
  kitHead:"Nel laboratorio",
  kitRobotics:"Robotica", kitFab:"Fabbricazione", kitAI:"IA e visione",
  kitSoftware:"Software", kitDrawing:"Disegno",
  kitSoftwareVal:"Python e giochi",
  footer:"hack-lab.space \u2014 un laboratorio, due stanze"
}
};

/* Pages may extend I18N with their own keys before this runs. */
window.HL = (function () {
  var cur = "en";

  function dict() { return I18N[cur] || I18N.en; }

  function applyLang(lang) {
    cur = I18N[lang] ? lang : "en";
    var d = dict();
    document.documentElement.lang = cur;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = d[el.getAttribute("data-i18n")];
      if (v) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-label]").forEach(function (el) {
      var v = d[el.getAttribute("data-i18n-label")];
      if (v) el.setAttribute("aria-label", v);
    });
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === cur ? "true" : "false");
    });
    document.querySelectorAll(".speak-btn").forEach(function (b) {
      b.setAttribute("aria-label", d.speakLabel || "Read aloud");
    });
    try { localStorage.setItem("hl-lang", cur); } catch (e) {}
  }

  function applySize(s) {
    document.documentElement.setAttribute("data-size", s);
    document.querySelectorAll(".size-btn").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-size") === s ? "true" : "false");
    });
    try { localStorage.setItem("hl-size", s); } catch (e) {}
  }

  function applyRead(on) {
    document.documentElement.setAttribute("data-read", on ? "easy" : "normal");
    var b = document.getElementById("easyRead");
    if (b) b.setAttribute("aria-pressed", on ? "true" : "false");
    try { localStorage.setItem("hl-read", on ? "easy" : "normal"); } catch (e) {}
  }

  /* ---- read aloud -----------------------------------------------------
     Word highlighting needs the SpeechSynthesis `boundary` event, which
     iOS Safari does not fire. There we highlight the whole block instead,
     so the audio still works on the iPads the children actually use.    */
  function initTTS() {
    var synth = window.speechSynthesis;
    var bar = document.getElementById("ttsBar");
    if (!synth) { if (bar) bar.hidden = true; return; }

    var MAP = { en: "en-GB", de: "de-DE", it: "it-IT" };
    var queue = [], qi = 0, active = null, spans = [];
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function voice(tag) {
      var vs = synth.getVoices() || [], two = tag.slice(0, 2);
      return vs.filter(function (v) { return v.lang && v.lang.toLowerCase().indexOf(two) === 0; })[0] || null;
    }
    function leaves(el) {
      return Array.prototype.filter.call(
        el.querySelectorAll("h1,h2,h3,p,li,figcaption,time,span,div"),
        function (n) { return !n.children.length && n.textContent && n.textContent.trim(); });
    }
    function unwrap(el) {
      el.querySelectorAll("[data-src]").forEach(function (n) {
        n.textContent = n.getAttribute("data-src"); n.removeAttribute("data-src");
      });
    }
    function wrap(el) {
      var out = [], off = 0;
      leaves(el).forEach(function (n) {
        var t = n.textContent;
        n.setAttribute("data-src", t);
        var html = "", re = /\S+\s*/g, m;
        while ((m = re.exec(t)) !== null) {
          html += '<span class="tts-word" data-s="' + (off + m.index) + '">' +
                  m[0].replace(/&/g, "&amp;").replace(/</g, "&lt;") + "</span>";
        }
        n.innerHTML = html; off += t.length + 1;
        Array.prototype.push.apply(out, n.querySelectorAll(".tts-word"));
      });
      return out;
    }
    function reset() {
      document.querySelectorAll(".speak-btn.playing").forEach(function (b) {
        b.classList.remove("playing"); b.textContent = "\u25B6";
        b.setAttribute("aria-label", dict().speakLabel || "Read aloud");
      });
    }
    function speak(el, btn, done) {
      var tag = MAP[cur] || "en-GB";
      var text = leaves(el).map(function (n) { return n.textContent.trim(); }).join(". ");
      if (!text) { done && done(); return; }
      active = el; el.classList.add("tts-active"); spans = wrap(el);
      var u = new SpeechSynthesisUtterance(text);
      u.lang = tag; var v = voice(tag); if (v) u.voice = v;
      u.rate = document.getElementById("readSlow").checked ? 0.72 : 0.95;
      u.onboundary = function (e) {
        if (e.name && e.name !== "word") return;
        var i = e.charIndex || 0, best = null;
        for (var k = 0; k < spans.length; k++) {
          if (+spans[k].getAttribute("data-s") <= i) best = spans[k]; else break;
        }
        spans.forEach(function (s) { s.classList.remove("on"); });
        if (best) best.classList.add("on");
      };
      u.onend = function () {
        unwrap(el); el.classList.remove("tts-active");
        if (btn) { btn.classList.remove("playing"); btn.textContent = "\u25B6";
                   btn.setAttribute("aria-label", dict().speakLabel || "Read aloud"); }
        done && done();
      };
      u.onerror = u.onend;
      if (btn) { btn.classList.add("playing"); btn.textContent = "\u25A0";
                 btn.setAttribute("aria-label", dict().stopLabel || "Stop"); }
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
      synth.speak(u);
    }
    function stop() {
      queue = []; qi = 0; synth.cancel();
      if (active) { unwrap(active); active.classList.remove("tts-active"); }
      reset(); active = null;
    }
    function run() { if (qi >= queue.length) { active = null; if (window.HL_paint) window.HL_paint(false); return; } speak(queue[qi++], null, run); }

    document.querySelectorAll(".readable").forEach(function (card) {
      var b = document.createElement("button");
      b.className = "speak-btn"; b.type = "button"; b.textContent = "\u25B6";
      b.setAttribute("aria-label", dict().speakLabel || "Read aloud");
      b.addEventListener("click", function (ev) {
        ev.preventDefault(); ev.stopPropagation();
        var was = b.classList.contains("playing");
        stop(); if (!was) speak(card, b, null);
      });
      card.appendChild(b);
    });
    var main = document.getElementById("readAll");
    function paint(on) {
      main.textContent = on ? (dict().readingOn || "Stop") : (dict().readAloud || "Read");
      main.setAttribute("aria-pressed", on ? "true" : "false");
      main.removeAttribute("data-i18n");
    }
    main.addEventListener("click", function () {
      var running = main.getAttribute("aria-pressed") === "true";
      stop(); paint(false);
      if (!running) {
        queue = Array.prototype.slice.call(document.querySelectorAll(".readable-part, .readable"));
        qi = 0; paint(true); run();
      }
    });
    var stopBtn = document.getElementById("readStopBtn");
    if (stopBtn) stopBtn.addEventListener("click", function () { stop(); paint(false); });
    window.HL_paint = paint;
    document.querySelectorAll(".lang-btn").forEach(function (b) { b.addEventListener("click", function(){ stop(); if (window.HL_paint) window.HL_paint(false); }); });
    window.addEventListener("pagehide", stop);
    if (synth.onvoiceschanged !== undefined) synth.onvoiceschanged = function () { synth.getVoices(); };
  }

  function init() {
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang")); });
    });
    document.querySelectorAll(".size-btn").forEach(function (b) {
      b.addEventListener("click", function () { applySize(b.getAttribute("data-size")); });
    });
    var er = document.getElementById("easyRead");
    if (er) er.addEventListener("click", function () {
      applyRead(document.documentElement.getAttribute("data-read") !== "easy");
    });

    var L = null, S = null, R = null;
    try { L = localStorage.getItem("hl-lang"); S = localStorage.getItem("hl-size"); R = localStorage.getItem("hl-read"); } catch (e) {}
    var nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    applyLang(L || (I18N[nav] ? nav : "en"));
    applySize(S || "m");
    applyRead(R === "easy");
    initTTS();
  }

  return { init: init, applyLang: applyLang };
})();
