const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const axios = require("axios");

app.get("/", (req, res) => {
  res.status(200).json({ text: "Hallo" });
});

app.listen(port, () => {
  keepServerAlive();
  console.log("Server is Running");
});

const keepServerAlive = () => {
  const urls = ["https://google38828.com", "https://ywjjwahoo.com"];
  setInterval(async () => {
    const axiosPromises = urls.map((url) => axios.get(url));
    try {
      const responses = await Promise.allSettled(axiosPromises);
      responses.forEach((response, index) => {
        if (response.status === "fulfilled") {
          console.log(`Berhasil fetching dari ${urls[index]}`);
        } else {
          console.log(`Gagal fetching dari ${urls[index]}`);
        }
      });
    } catch (error) {
      console.log("Gagal fetching:", error.message);
    }
  }, 10000);
};
