const { default: axios } = require("axios");

const botToken = "6680557007:AAGmHtzlEVGXJxKxxF62tUPFx9kmYeqk5QQ";
const chatId = "6465082908";
const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

async function sendMessage(subject, message, times) {
  try {
    for (let i = 0; i < times; i++) {
      const response = await axios.post(apiUrl, {
        chat_id: chatId,
        text: `*${subject}*\n${message}`,
        parse_mode: "markdown"
      });
      if (response.status === 200) {
        console.log("SPAM TERKIRIM:", response.data);
      }
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second between each request
    }
  } catch (error) {
    console.error("BOT KENA LIMIT");
  }
}

// Contoh penggunaan untuk mengirim pesan 20000000 kali
sendMessage("ANJING", "ANJINGGGGGGGGGGG.", 20000000);
