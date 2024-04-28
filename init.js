const mongoose = require("mongoose");

const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection is successful!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

let allChats = [
  {
    from: "Tapas",
    to: "Sanjay",
    msg: "Send me your exam sheets",
    created_at: new Date(),
  },
  {
    from: "Rohit",
    to: "Hari",
    msg: "Can you give me your pen ?",
    created_at: new Date(),
  },
  {
    from: "Tapu",
    to: "jacky",
    msg: "How is your study going on ?",
    created_at: new Date(),
  },
  {
    from: "Manas",
    to: "John",
    msg: "I thik all people are getting focused for their carriers!",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
