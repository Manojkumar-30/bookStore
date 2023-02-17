const mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://manojk:Velan2891@cluster0.wyvfgaf.mongodb.net/?retryWrites=true&w=majority"
).then(()=>console.log("Connected"));