// Renders the talks defined in talks.js. You shouldn't need to edit this file.

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// "2026-11-04" -> local Date at midnight (avoids the UTC off-by-one of new Date("2026-11-04"))
function parseDate(str) {
  const [y, m, d] = str.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderTalk(talk, isNext) {
  const date = parseDate(talk.date);
  const e = (s) => escapeHtml(s);

  const meta = [talk.time, talk.location].filter(Boolean).map(e).join(" · ");

  const abstract = talk.abstract
    ? `<details class="abstract">
         <summary>Abstract</summary>
         ${talk.abstract.split(/\n\s*\n/).map((p) => `<p>${e(p.trim())}</p>`).join("")}
       </details>`
    : "";

  const links = [
    talk.link && `<a href="${e(talk.link)}">Join / details</a>`,
    talk.slides && `<a href="${e(talk.slides)}">Slides</a>`,
    talk.recording && `<a href="${e(talk.recording)}">Recording</a>`,
  ].filter(Boolean);

  return `
    <article class="talk${isNext ? " talk--next" : ""}">
      <time class="date" datetime="${e(talk.date)}">
        <span class="date__weekday">${WEEKDAYS[date.getDay()]}</span>
        <span class="date__day">${date.getDate()}</span>
        <span class="date__month">${MONTHS[date.getMonth()]} ${date.getFullYear()}</span>
      </time>
      <div class="talk__body">
        ${isNext ? `<p class="badge">Next talk</p>` : ""}
        <h3 class="talk__title">${e(talk.title)}</h3>
        <p class="talk__speaker">
          <strong>${e(talk.speaker)}</strong>${talk.affiliation ? `<span class="affiliation">, ${e(talk.affiliation)}</span>` : ""}
        </p>
        ${meta ? `<p class="talk__meta">${meta}</p>` : ""}
        ${abstract}
        ${links.length ? `<p class="talk__links">${links.join("")}</p>` : ""}
      </div>
    </article>`;
}

function render() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const byDate = (a, b) => parseDate(a.date) - parseDate(b.date);
  const upcoming = TALKS.filter((t) => parseDate(t.date) >= today).sort(byDate);
  const past = TALKS.filter((t) => parseDate(t.date) < today).sort(byDate).reverse();

  document.getElementById("upcoming-list").innerHTML = upcoming.length
    ? upcoming.map((t, i) => renderTalk(t, i === 0)).join("")
    : `<p class="empty">No upcoming talks scheduled yet. Check back soon.</p>`;

  document.getElementById("past-list").innerHTML = past.map((t) => renderTalk(t, false)).join("");
  document.getElementById("past").hidden = past.length === 0;
}

render();
