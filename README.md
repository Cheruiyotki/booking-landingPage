# Travel Concierge
LuxeScapesKE - Travel Concierge Landing Page
A high-conversion, modern landing page built for a Kenyan Travel Concierge / Middleman business model.

Current Status: MVP (Minimum Viable Product) Live Demo: [Insert your Vercel/Netlify link here]

📖 Project Overview
This project is a React-based frontend application designed to market "Staycation Packages" and "Travel Experiences" rather than just accommodation listings.

Unlike standard booking sites (Airbnb/Booking.com), this site is designed without a search bar. The Goal: Funnel traffic directly to WhatsApp/DM to allow the agent (Middleman) to curate the experience, verify the property, and add a service markup.

⚡ Tech Stack
Frontend Library: React (Vite recommended)

Styling: Tailwind CSS (Utility-first styling)

Icons: Lucide-react (Lightweight, clean icons)

Language: JavaScript (ES6+) / JSX

🚀 Getting Started
Prerequisites
Ensure you have Node.js installed on your machine.

Installation
Clone the repository

Bash

git clone https://github.com/yourusername/luxescapes-ke.git
cd luxescapes-ke
Install dependencies

Bash

npm install
# or
yarn install
Install Tailwind CSS (if setting up from scratch)

Bash

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Install Icons

Bash

npm install lucide-react
Run the development server

Bash

npm run dev
📂 Project Structure
/src
  ├── components/
  │   └── LandingPage.jsx    # Main Landing Page Component
  ├── assets/                # Images (Add your Kenyan location photos here)
  ├── App.jsx                # Root Component
  └── main.jsx               # Entry Point
🛠️ Customization Guide
1. Changing the Content (Packages)
Go to LandingPage.jsx and locate the packages array. Update the JSON data to reflect your real inventory:

JavaScript

const packages = [
  {
    id: 1,
    title: "Nanyuki Container House",  // Change Title
    price: "KES 12,000",               // Change Price
    image: "/path/to/image.jpg",       // Local or URL image
    features: ["Mt Kenya View", "BBQ Kit"]
  },
  // ...
];
2. Configuring WhatsApp Integration
Locate the "Chat on WhatsApp" button in the Footer section and update the href with your number and a pre-filled message:

JavaScript

<a href="https://wa.me/254712345678?text=Hi,%20I%20am%20interested%20in%20a%20package">
  Chat on WhatsApp
</a>
3. Images
For the best visual appeal, use high-resolution images (1920x1080 for Hero, 400x300 for Cards).

Hero Image: Located in the style={{ backgroundImage: ... }} inline style in the Hero Section.

Card Images: Defined in the packages array.

🧠 Strategic Design Decisions
No Search Bar: Prevents users from "shopping around" and bypassing the agent. It forces them to interact with the brand for recommendations.

"Packages" vs "Listings": We list features like "Rose Petals" and "Private Chef" to justify the markup/commission fee, distinguishing the service from a standard Airbnb host.

Mobile First: The navigation and card layout are optimized for mobile screens, where 90% of Kenyan social media traffic (TikTok/IG) originates.

🚢 Deployment
This project is optimized for deployment on Vercel or Netlify.

Push code to GitHub.

Import project into Vercel.

Vercel will auto-detect Vite/React settings.

Click Deploy.

📄 License
Distributed under the MIT License. See LICENSE for more information.

Built by TechTrek