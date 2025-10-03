import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import dotenv from "dotenv";

import healthRoutes from "./routes/health.js";
import itemRoutes from "./routes/items.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { notFound } from "./middleware/notFound.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Trust proxy (useful for deployment)
app.set("trust proxy", 1);

// Security middleware
app.use(helmet());

// CORS configuration
const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(",").map((origin) => origin.trim())
  : ["http://localhost:5173"];

console.log("🔒 CORS allowed origins:", allowedOrigins);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// Block requests without origin header
app.use((req, res, next) => {
  if (!req.get("origin") && req.path !== "/api/health" && req.path !== "/") {
    return res.status(403).json({ error: "Forbidden" });
  }
  next();
});

// Compression middleware
app.use(compression());

// Logging middleware
if (process.env.NODE_ENV !== "test") {
  app.use(morgan("combined"));
}

// Body parsing middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// API Routes
app.use("/api/health", healthRoutes);
app.use("/api/items", itemRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Cars4Films API",
    version: "1.0.0",
    endpoints: {
      health: "/api/health",
      items: "/api/items",
    },
  });
});

// 404 handler
app.use(notFound);

// Error handling middleware
app.use(errorHandler);

// Start server
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`🚗 Cars4Films API running on port ${PORT}`);
    console.log(`📖 Environment: ${process.env.NODE_ENV || "development"}`);
    console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
  });
}

export default app;
