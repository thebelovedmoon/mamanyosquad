function fetchDate(mt, dd, yy, hh, mm, tz) {

  let upd = new Date(new Date(`"` + mt + ` ` + dd + `, ` + yy + ` ` + hh + `:` + mm + `:00 GMT+` + tz + `:00"`).getTime() + diffOffs(11));

  document.getElementById("policyDate-ja").innerHTML =
    upd.getFullYear() +
    "年" +
    (upd.getMonth() + 1) +
    "月" +
    upd.getDate() +
    "日" +
    upd.getHours() +
    "時" +
    addZero(upd.getMinutes()) +
    "分VIT"

  document.getElementById("policyDate-en").innerHTML =
    upd.getDate() +
    " " +
    monthDef(upd.getMonth()) +
    " " +
    upd.getFullYear() +
    "&ensp;&#8226;&ensp;" +
    hr12(upd.getHours()) +
    ":" + addZero(upd.getMinutes()) +
    ampm(upd.getHours()) +
    " VIT";

}

function monthDef(m) {
  const mo = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return m = mo[m];
}