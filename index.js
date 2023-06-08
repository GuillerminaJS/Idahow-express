import http from "http";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import usersRoutes from "./routes/usersRoutes.js";
import commentsRoutes from "./routes/commentsRoutes.js"
import newsRoutes from "./routes/newsRoutes.js"
import { Client, GatewayIntentBits, Events, REST, EmbedBuilder, PermissionsBitField, Routes} from 'discord.js';

dotenv.config();

// Connecting to the database
mongoose.Promise = global.Promise;
mongoose
  .connect( process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
  })
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch((error) => {
    console.log("database connection failed. exiting now...");
    console.error(error);
    process.exit(1);
  });

// Create server
const app = express();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

app.use(express.json({ limit: "50mb" }));

client.login(process.env.BOT_TOKEN);
client.on('ready', () => {
  const serverCount = client.guilds.cache.size;
  console.log(`Server count : ${serverCount} `);
});

// Habilitar bodyparser (de esta manera podemos leer "form-data" como "x-www-form-ulrencoded")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Habilitar cors
app.use(cors());

// Rutas del backend
app.use("/api", usersRoutes);
app.use("/api", commentsRoutes);
app.use("/api", newsRoutes);
app.use('/api/images', express.static('uploads'));

const port = process.env.API_PORT || 3977;

app.get("/api/server-count", (req, res) => {
  const serverCount = client.guilds.cache.size;
  res.json({ serverCount});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


