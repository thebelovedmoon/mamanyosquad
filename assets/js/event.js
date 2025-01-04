function xvvNotify() {

  document.body.innerHTML += `
    <dialog id="xvvNtf">
      <span class="material-symbols-rounded" title="Close" onclick="closeModal('xvvNtfClose')">close</span>
      <p>
        This dialog contains all of the urgent information that is required to be
        displayed to the end-users. It will be populated once there are enough info.
      </p>
    </dialog>
  `;

  // execute Modal
  document.getElementById("xvvNtf").showModal();

}

function xvvEvent() {

  document.body.innerHTML += `
    <dialog id="xvvEvt">
      <span class="material-symbols-rounded" title="Close" onclick="closeModal('xvvEvtClose')">close</span>
      <iframe src="` + ifEmbed("xvv") + `" allowfullscreen></iframe>
    </dialog>
  `;

  function ifEmbed(e) {
    if (e == "xvv") {
      let xvvId = "maint_gl_0612_240627_1_0_0e7c7bdc282ba0ae8f1c5beffd454adde0ad08e7e17ff7bb893ebf052f07eaba_en",
        xvv = "https://game.doaxvv.com/production/html/information/" + xvvId + ".html";
      return xvv;
    } else if (e == "yt") {
      let ytId = "iif5ng2p3dE"
        yt = "https://www.youtube-nocookie.com/embed/" + ytId + "?rel=0";
      return yt;
    }
  }

  // execute Modal
  document.getElementById("xvvEvt").showModal();

}

function closeModal(x) {

  if (x == "xvvNtfClose") {
    document.getElementById("xvvNtf").close();
    document.getElementById("xvvNtf").remove();
  } if (x == "xvvEvtClose") {
    document.getElementById("xvvEvt").close();
    document.getElementById("xvvEvt").remove();
  }

}