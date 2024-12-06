// all maintenance routines are displayed here

// Japanese: https://doax-venusvacation.jp/news_list.html 
// Global: https://game.doaxvv.com/en/news_list_lp/index.html 

function showMaintenance() {
  
  docModified(); // note: html data needs to be changed in order to update the metadata here

}

// maintenance tracking (ja)
function jpMaint(sMt, sDy, sHh, sMm, eMt, eDy, eHh, eMm, tzz) {

  let st = new Date(new Date(`"` + sMt + ` ` + sDy + `, 2024 ` + sHh + `:` + sMm + `:00 GMT+` + tzz + `:00"`).getTime() + diffOffs(11));
  let ed = new Date(new Date(`"` + eMt + ` ` + eDy + `, 2024 ` + eHh + `:` + eMm + `:00 GMT+` + tzz + `:00"`).getTime() + diffOffs(11));
  
  document.getElementById("maintDate-ja_jp").innerHTML = "2024年" + (st.getMonth() + 1) + "月" + st.getDate() + "日";
  document.getElementById("maintDate-en_jp").innerHTML = st.getDate() + " " + monthDef(st.getMonth()) + " 2024";

  document.getElementById("stTime-ja_jp").innerHTML = st.getHours() + "時" + addZero(st.getMinutes()) + "分";
  document.getElementById("edTime-ja_jp").innerHTML = ed.getHours() + "時" + addZero(ed.getMinutes()) + "分";
  document.getElementById("stTime-en_jp").innerHTML = hr12(st.getHours()) + ":" + addZero(st.getMinutes()) + ampm(st.getHours());
  document.getElementById("edTime-en_jp").innerHTML = hr12(ed.getHours()) + ":" + addZero(ed.getMinutes()) + ampm(ed.getHours());

  // below code are contained in <li important>, toggle the view with #impt-[locale]
  let toggle = ["none", "list-item"];

  // has to be synchronized in order to display on both languages
  // as there's no vanillajs-equivalent of general selector yet
  // and vanillajs doesn't permit outputting data to duplicate
  // ids in its associated html.
  document.getElementById("impt-ja_jp").style.display = toggle[0];
  document.getElementById("impt-en_jp").style.display = toggle[0];

  document.getElementById("impt-ja_jp").innerHTML = "TODO：";
  document.getElementById("impt-en_jp").innerHTML = "TODO:";

}

// maintenance tracking (gl)
function glMaint (sMt, sDy, sHh, sMm, eMt, eDy, eHh, eMm, tzz) {

  let st = new Date(new Date(`"` + sMt + ` ` + sDy + `, 2024 ` + sHh + `:` + sMm + `:00 GMT+` + tzz + `:00"`).getTime() + diffOffs(11));
  let ed = new Date(new Date(`"` + eMt + ` ` + eDy + `, 2024 ` + eHh + `:` + eMm + `:00 GMT+` + tzz + `:00"`).getTime() + diffOffs(11));
  
  document.getElementById("maintDate-en_gl").innerHTML = st.getDate() + " " + monthDef(st.getMonth()) + " 2024";

  document.getElementById("stTime-en_gl").innerHTML = hr12(st.getHours()) + ":" + addZero(st.getMinutes()) + ampm(st.getHours());
  document.getElementById("edTime-en_gl").innerHTML = hr12(ed.getHours()) + ":" + addZero(ed.getMinutes()) + ampm(ed.getHours());

  // below code are contained in <li important>, toggle the view with #impt-[locale]
  let toggle = ["none", "list-item"];

  document.getElementById("impt-en_gl").style.display = toggle[0];

  document.getElementById("impt-en_gl").innerHTML = "TODO:";

}

// simplified _main.js clock but for time/date document tracking
function docModified() {
  const tD = new Date(new Date(document.lastModified).getTime() + diffOffs(11));
  document.getElementById("modifiedDate").innerHTML =
    hr12(tD.getHours()) +
    ":" +
    addZero(tD.getMinutes()) +
    ampm(tD.getHours()) +
    "&ensp;&#8226;&ensp;" +
    tD.getDate() +
    " " +
    monthDef(tD.getMonth()) +
    " " +
    tD.getFullYear() +
    " VIT";
  setTimeout(docModified, 0);
}
function monthDef(m) {
  const mo = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return m = mo[m];
}

function viewMaintenance(id, edition) {
  if (edition == "ja") {
    window.open("https://doax-venusvacation.jp/" + id + ".html", "_blank");
  } else if (edition == "gl") {
    window.open("https://game.doaxvv.com/production/html/information/" + id + ".html", "_blank");
  }
}