/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "porn",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "CYBER-SUJON",
  description: "VEDIO",
  commandCategory: "Hình ảnh",
  usages: "video",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["Porn 𝐯𝐢𝐝𝐞𝐨"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [

  "https://drive.google.com/uc?export=download&id=1gDLoRtoy08ww5KtsLqtJERHT_ce1NeR4","https://drive.google.com/uc?export=download&id=1JcAPkMC2weJ7TkVz1l_l7VQszj_34qWm","https://drive.google.com/uc?export=download&id=1M7iaYsJgZtEDX5ZCZW4c-WvSsCyF9vmW","https://drive.google.com/uc?export=download&id=1sV2A6WkheWGud4a6PyUez9oC2Mb1s2A0","https://drive.google.com/uc?export=download&id=1hsEOLoV19UPP2Y46JoHVbVaE_LoQ2czA","https://drive.google.com/uc?export=download&id=1Rny-i1AMmOXBTFB70OzYxjlti-_kdz1M","https://drive.google.com/uc?export=download&id=1eUHPAiNtqAHLLo9FaaWtfrKqtsRIlPki","https://drive.google.com/uc?export=download&id=1vsM6srcqG4K9zXDrOe27Mag2RzFzj3cI","https://drive.google.com/uc?export=download&id=1gN6Amvi0XSOQJu_YQhcK-Y34aFC1umMk","https://drive.google.com/uc?export=download&id=1k2obOSapcQi3wFdVAfbwlRYzWdkjEaaC","https://drive.google.com/uc?export=download&id=1mYfA4IVvHn36CxlJVqzm8zsfs0iP7kA0","https://drive.google.com/uc?export=download&id=1PNR10AgvLOZRRwJgV7RAr1QreTYMMeFl","https://drive.google.com/uc?export=download&id=1AVI6LnI-D3oCon2NUI-Hz2OcXBAXoSYU","","","","","","",];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
