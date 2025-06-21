module.exports.config = {
  'name': "hot",
  'version': "1.0.0",
  'hasPermssion': 0x0,
  'credits': "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  'description': "RANDOM islamic video",
  'commandCategory': "Random video",
  'usages': "Statusvideo",
  'cooldowns': 0x2,
  'dependencies': {
    'request': '',
    'fs-extra': '',
    'axios': ''
  }
};
module.exports.run = async ({
  api: _0xaa4f68,
  event: _0x3ec0df,
  args: _0x22794f,
  Users: _0x131c44,
  Threads: _0x38b004,
  Currencies: _0x36b5ec
}) => {
  const _0x3d77bf = global.nodemodule.request;
  const _0x23750b = global.nodemodule["fs-extra"];
  var _0x2e067a = ["https://drive.google.com/uc?export=download&id=1DqbSNvTB2tJ5ury_kj-xAmIb-Xsx8uOa", "https://drive.google.com/uc?export=download&id=1SiuRKuLRDNQkKwfE3nfBMVoutJmrIheo","https://drive.google.com/uc?export=download&id=11SeY9TsVHROn9vpKhRQUhV-_I_b_owzj","https://drive.google.com/uc?export=download&id=1IF0Z020o4JhgPLTzrhE-2_orTDzWXeNt","https://drive.google.com/uc?export=download&id=1oQrifLE9me91V1gSOyvQmHExeAr1E-ca","https://drive.google.com/uc?export=download&id=1ceB4f0tTmSN1ntv9I_m_upmVCbxOnce8","https://drive.google.com/uc?export=download&id=14Ik25RYu7xDf3CITtvvyStry8QDKB8vT","https://drive.google.com/uc?export=download&id=1Qt55sQyNQH86usLNkcgnOL5slmV_vOvL","https://drive.google.com/uc?export=download&id=1pj5nOqdJbdQeM7sMKSYuWPm3F_Imyxfl","https://drive.google.com/uc?export=download&id=1b0TxcClh-Iv38r1A6yjVS33v3cwzYNYH","https://drive.google.com/uc?export=download&id=1IX3oaE3O8A-7BUPrVuCQVFVvGy5uMv2k","https://drive.google.com/uc?export=download&id=1l7gSfcm6_PwEWzbWLPTUV1Bbp0z8rfhk","https://drive.google.com/uc?export=download&id=12RSEIBiD-XcwexUXbk43dJdJeZAWD3-Y","https://drive.google.com/uc?export=download&id=1PGnMzvJyOD4j6aDmicX-ukAHscQPdBag","https://drive.google.com/uc?export=download&id=1g6LgMEMZK0gQFkVrNzBd06B4GoZXjcCj","https://drive.google.com/uc?export=download&id=1YMK1525tYEF7PnDYepU8p2XyH-8voY-j","https://drive.google.com/uc?export=download&id=1g6BsViTUyCr-4cMtVY1OC6SCT_xxCcvL","https://drive.google.com/uc?export=download&id=1bmhv66QkhkqDk9HNKzpRQSBnNn6Ds_DH","https://drive.google.com/uc?export=download&id=1v1eu7UHrjj08Zq2_UplAZmMgm2vqClP_","https://drive.google.com/uc?export=download&id=1wkuEzEzPENXbKPv1mF1ou5tT1_eSj7Hk","https://drive.google.com/uc?export=download&id=1RjOAGBp61vnPj_WWpuso_G4WLLQ6MeaE","https://drive.google.com/uc?export=download&id=1pO2n15vN9XWfICST093tuo3Q6fLB4X1e","","",];
  var _0x5bcfcc = () => _0xaa4f68.sendMessage({
    'body': "╭──────•◈•───────╮\n\nEi lo🤌🥵💦\n \n\n\n\n𝗠𝗔𝗗𝗘 𝗕𝗬: YesDaddy \n╰──────•◈•───────╯",
    'attachment': _0x23750b.createReadStream(__dirname + "/cache/1.mp4")
  }, _0x3ec0df.threadID, () => _0x23750b.unlinkSync(__dirname + "/cache/1.mp4"));
  return _0x3d77bf(encodeURI(_0x2e067a[Math.floor(Math.random() * _0x2e067a.length)])).pipe(_0x23750b.createWriteStream(__dirname + "/cache/1.mp4")).on("close", () => _0x5bcfcc());
};
