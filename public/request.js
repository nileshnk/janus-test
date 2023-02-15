const reqBtn = document.getElementById("request");

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
reqBtn.addEventListener("click", async (e) => {
  const res = await fetch("https://nileshk.tech/myjanus", {
    body: reqMsg,
  });
  console.log(res);
});
