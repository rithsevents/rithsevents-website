import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/enquiry", async (req, res) => {
    const { name, email, phone, service, message } = req.body;
    
    // Log the enquiry (In a real app, you'd save to DB or send email)
    console.log("New Enquiry Received:", { name, email, phone, service, message });

    // Simulate email notification logic
    // In production, use a service like Resend or SendGrid here
    // Example: await resend.emails.send({ ... })

    res.status(200).json({ 
      success: true, 
      message: "Enquiry received successfully! We will contact you shortly." 
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
