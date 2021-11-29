module.exports.config = {
  name: "iss",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "BerVer",
  description: "Xem toạ độ mà tàu vũ trụ đang lưu lạc",
  commandCategory: "space",
  usages: "iss",
  cooldowns: 5,
  dependencies: {"request":""}
};

module.exports.run = function({
  api,
  event,
  args
}) {
  const request = global.nodemodule['request'];
  return request(`http://api.open-notify.org/iss-now.json`, (err, response, body) => {
    if (err) throw err;
    var jsonData = JSON.parse(body);
    api.sendMessage(`Vị trí hiện tại của International Space Station 🌌🌠🌃\n- Vĩ độ: ${jsonData.iss_position.latitude}\n- Kinh độ: ${jsonData.iss_position.longitude}`, event.threadID, event.messageID);
  });
}