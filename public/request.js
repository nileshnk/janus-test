const reqBtn = document.getElementById("request");
const sessionForm = document.getElementById("session-form");
const reqMsg = {
  request: "create",
  room: 23456,
  permanent: true,
  description: "geek room",
  is_private: false,
  spatial_audio: false,
  audiolevel_ext: true,
  audiolevel_event: true,
  audio_active_packets: 100,
  audio_level_average: 25,
  default_expectedloss: 0,
  default_bitrate: 0,
  record: false,
  record_file: "23456.wav",
  record_dir: "/home/azureuser/recordings",
  mjrs: false,
  allow_rtp_participants: false,
};
reqBtn.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(sessionForm);
  const sessionid = formData.get("sessionid");
  const eventid = formData.get("eventid");
  console.log(sessionid);
  const res = await fetch("https://nileshk.tech/myjanus", {
    method: POST,
    body: JSON.stringify(reqMsg),
  });

  console.log(res);
});

const myreq = {
  janus: "event",
  sender: 1815153248,
  transaction: "sBJNyUhH6Vc6",
  plugindata: {
    plugin: "janus.plugin.echotest",
    data: {
      echotest: "event",
      result: "ok",
    },
  },
};
