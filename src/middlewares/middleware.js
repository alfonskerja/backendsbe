// // pages/api/cors.js
// export default async function handler(req, res) {
//     const allowedOrigins = [
//       'http://localhost:3000',
//       'https://example-1.com',
//       'https://example-2.com',
//       // Add more allowed origins as needed
//     ];
  
//     const origin = req.headers.origin;
//     if (allowedOrigins.includes(origin)) {
//       res.setHeader('Access-Control-Allow-Origin', origin);
//     } else {
//       res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
//       // You might consider handling other unauthorized origins differently
//     }
  
//     // Handle preflight requests (OPTIONS)
//     if (req.method === 'OPTIONS') {
//       res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//       res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//       res.status(200).end();
//       return;
//     }
  
//     // Pass the request to the actual API route
//     // You can add more logic here if needed
  
//     // For demonstration purposes, just returning a sample response
//     res.status(200).json({ message: 'CORS headers set successfully' });
//   }