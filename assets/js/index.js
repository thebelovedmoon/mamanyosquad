function showMIT() {
  alert(
    "MIT License\n\n" +
    "Copyright (c) 2020 #MamaNyoSquad\n\n" +
    "Permission is hereby granted, free of charge, to any person obtaining a copy " +
    "of this software and associated documentation files (the \"Software\"), to deal " +
    "in the Software without restriction, including without limitation the rights " +
    "to use, copy, modify, merge, publish, distribute, sublicense, and/or sel l" +
    "copies of the Software, and to permit persons to whom the Software is " +
    "furnished to do so, subject to the following conditions:\n\n" +
    "The above copyright notice and this permission notice shall be included in all " +
    "copies or substantial portions of the Software.\n\n" +
    "THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR " +
    "IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, " +
    "FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE " +
    "AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER " +
    "LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, " +
    "OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE " +
    "SOFTWARE."
  );
}

function mobilePanelOpen() {
  var navPanel = document.getElementById("mobile-navPanel").style;
  navPanel.transform = "unset";
}
function mobilePanelClose() {
  var navPanel = document.getElementById("mobile-navPanel").style;
  navPanel.transform = "translateY(-19rem)";
}

function transcriptShow(file) { // anniversary transcript

  document.body.innerHTML += `
    <dialog id="xvvEvt">
      <span class="material-symbols-rounded" title="Close" onclick="closeModal('xvvEvtClose')">close</span>
      <iframe src="/assets/pdf/` + file + `_transcript.pdf"></iframe>
    </dialog>
  `;

  // execute Modal
  document.getElementById("xvvEvt").showModal();

}