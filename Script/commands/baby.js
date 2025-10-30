const axios = require("axios");
require("dotenv").config(); // .env থেকে API key পড়বে

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

module.exports.config = {
  name: "baby",
  version: "9.0.1",
  credits: "dipto + OpenAI",
  cooldowns: 0,
  hasPermssion: 0,
  description: "AI-powered chat with teach/react/edit/remove",
  commandCategory: "chat",
  category: "chat",
  usePrefix: true,
  prefix: true,
  usages: `[anyMessage] OR
teach [YourMessage] - [Reply1], [Reply2]...
teach react [YourMessage] - [react1], [react2]...
remove [YourMessage]
rm [YourMessage] - [indexNumber]
msg [YourMessage]
list OR list all
edit [YourMessage] - [NewMessage]`,
};

// Helper: OpenAI API call
async function openAIChat(prompt) {
  try {
    const res = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-5",
        messages: [
          { role: "system", content: "You are a helpful AI assistant." },
          { role: "user", content: prompt },
        ],
        max_tokens: 500,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );
    return res?.data?.choices?.[0]?.message?.content?.trim() || "Sorry, I couldn't generate a reply.";
  } catch (err) {
    console.error("OpenAI API error:", err.response?.data ?? err.message ?? err);
    return "⚠️ Error: Could not reach AI service.";
  }
}

// In-memory teaching DB (temporary, can replace with JSON/DB)
let teachingDB = {};

module.exports.run = async function ({ api, event, args, Users }) {
  try {
    const uid = event.senderID;
    const message = args.join(" ").trim().toLowerCase();

    if (!message) {
      const randomReplies = ["Bolo baby", "Hum", "Type help baby", "Type !baby hi"];
      return api.sendMessage(randomReplies[Math.floor(Math.random() * randomReplies.length)], event.threadID, event.messageID);
    }

    // REMOVE
    if (args[0] === "remove") {
      const key = message.replace("remove ", "");
      delete teachingDB[key];
      return api.sendMessage(`✅ Removed "${key}" from teaching database`, event.threadID, event.messageID);
    }

    // REMOVE by index
    if (args[0] === "rm" && message.includes("-")) {
      const [key, index] = message.replace("rm ", "").split(" - ");
      if (teachingDB[key]) {
        teachingDB[key].splice(index, 1);
        return api.sendMessage(`✅ Removed reply #${index} from "${key}"`, event.threadID, event.messageID);
      } else {
        return api.sendMessage(`❌ No entry found for "${key}"`, event.threadID, event.messageID);
      }
    }

    // LIST
    if (args[0] === "list") {
      if (args[1] === "all") {
        const list = Object.keys(teachingDB).map(k => `${k}: ${teachingDB[k].join(", ")}`).join("\n");
        return api.sendMessage(`📜 Teaching List:\n${list || "Empty"}`, event.threadID, event.messageID);
      } else {
        return api.sendMessage(`Total taught phrases: ${Object.keys(teachingDB).length}`, event.threadID, event.messageID);
      }
    }

    // MESSAGE
    if (args[0] === "msg" || args[0] === "message") {
      const key = message.replace(/^(msg|message) /, "");
      const reply = teachingDB[key] ? teachingDB[key].join(", ") : "No reply taught for this message.";
      return api.sendMessage(`Message "${key}" = ${reply}`, event.threadID, event.messageID);
    }

    // EDIT
    if (args[0] === "edit") {
      const [oldMsg, newMsg] = message.replace("edit ", "").split(" - ");
      if (!oldMsg || !newMsg) return api.sendMessage('❌ Invalid format! Use edit [YourMessage] - [NewReply]', event.threadID, event.messageID);
      if (teachingDB[oldMsg]) {
        teachingDB[oldMsg] = [newMsg];
        return api.sendMessage(`✅ Changed "${oldMsg}" to "${newMsg}"`, event.threadID, event.messageID);
      } else {
        return api.sendMessage(`❌ No entry found for "${oldMsg}"`, event.threadID, event.messageID);
      }
    }

    // TEACH normal
    if (args[0] === "teach" && args[1] !== "react" && args[1] !== "amar") {
      const [_, rest] = message.split("teach ");
      const [key, replyStr] = rest.split(" - ");
      if (!key || !replyStr) return api.sendMessage("❌ Invalid teach format", event.threadID, event.messageID);
      teachingDB[key] = replyStr.split(",").map(r => r.trim());
      return api.sendMessage(`✅ Taught "${key}" => ${replyStr}`, event.threadID, event.messageID);
    }

    // TEACH react
    if (args[0] === "teach" && args[1] === "react") {
      const [_, rest] = message.split("teach react ");
      const [key, reactStr] = rest.split(" - ");
      if (!key || !reactStr) return api.sendMessage("❌ Invalid react format", event.threadID, event.messageID);
      teachingDB[key] = reactStr.split(",").map(r => r.trim());
      return api.sendMessage(`✅ Reacts taught for "${key}" => ${reactStr}`, event.threadID, event.messageID);
    }

    // TEACH intro (amar)
    if (args[0] === "teach" && args[1] === "amar") {
      const [_, rest] = message.split("teach amar ");
      const [key, replyStr] = rest.split(" - ");
      if (!key || !replyStr) return api.sendMessage("❌ Invalid teach amar format", event.threadID, event.messageID);
      teachingDB[key] = [replyStr.trim()];
      return api.sendMessage(`✅ Intro taught "${key}" => ${replyStr}`, event.threadID, event.messageID);
    }

    // Special keyword
    if (["amar name ki", "amr nam ki", "amar nam ki", "amr name ki"].some(p => message.includes(p))) {
      return api.sendMessage("আমার নাম Baby 🤖", event.threadID, event.messageID);
    }

    // Default: OpenAI response
    const aiReply = teachingDB[message] ? teachingDB[message].join(", ") : await openAIChat(message);
    return api.sendMessage(aiReply, event.threadID, event.messageID);

  } catch (err) {
    console.error("Error in baby module:", err);
    return api.sendMessage(`Error: ${err.message}`, event.threadID, event.messageID);
  }
};

// Handle replies
module.exports.handleReply = async function ({ api, event }) {
  try {
    const reply = event.body.toLowerCase();
    if (!reply) return;
    const response = teachingDB[reply] ? teachingDB[reply].join(", ") : await openAIChat(reply);
    return api.sendMessage(response, event.threadID, event.messageID);
  } catch (err) {
    return api.sendMessage(`Error: ${err.message}`, event.threadID, event.messageID);
  }
};

// Handle events (mentions / triggers)
module.exports.handleEvent = async function ({ api, event }) {
  try {
    const body = event.body ? event.body.toLowerCase() : "";
    if (body.startsWith("baby") || body.startsWith("bby") || body.startsWith("janu")) {
      const text = body.replace(/^\S+\s*/, "");
      const reply = text ? (teachingDB[text] ? teachingDB[text].join(", ") : await openAIChat(text)) : "Yes😀, I am here";
      return api.sendMessage(reply, event.threadID, event.messageID);
    }
  } catch (err) {
    return api.sendMessage(`Error: ${err.message}`, event.threadID, event.messageID);
  }
};
