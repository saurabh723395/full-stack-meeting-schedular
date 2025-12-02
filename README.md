# 📅 Full-Stack Meeting Scheduler

A dynamic, feature-rich meeting scheduling application built with modern web technologies. Schedule meetings efficiently with a calendar interface, real-time data synchronization, and secure authentication.

## ✨ Features

### Core Functionality
- **Dynamic Meeting Scheduling**: Schedule meetings directly through an interactive calendar interface
- **Date-wise Calendar**: Easy date selection with visual calendar widget
- **Meeting Selection**: Choose from available meeting options and time slots
- **Real-time Updates**: Firebase Firestore powers live data synchronization
- **Secure Authentication**: Kinde authentication for user security and management

### Technical Highlights
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Full-Stack Architecture**: Next.js for both frontend and backend
- **Firebase Integration**: Firestore database with real-time listeners
- **Server-Side Auth**: Kinde integration with Next.js middleware
- **Optimized Performance**: SWC minification and React strict mode

## 🛠 Tech Stack

### Frontend
- **Next.js 14**: React framework for production
- **React 18**: UI component library
- **Tailwind CSS**: Utility-first CSS framework
- **React Calendar**: Calendar widget component
- **Date-fns**: Modern date utility library

### Backend & Services
- **Next.js API Routes**: Serverless backend functions
- **Firebase Firestore**: Real-time NoSQL database
- **Firebase Auth**: Authentication service
- **Kinde Authentication**: OAuth/OIDC provider

### DevTools
- **ESLint**: Code quality linting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixes

## 📁 Project Structure

```
full-stack-meeting-scheduler/
├── src/
│   ├── app/
│   │   ├── layout.js              # Root layout with providers
│   │   ├── page.js                # Home page
│   │   ├── globals.css            # Global styles
│   │   ├── api/                   # API routes
│   │   ├── schedule/              # Scheduling pages
│   │   └── dashboard/             # User dashboard
│   ├── components/
│   │   ├── Navbar.jsx             # Navigation component
│   │   ├── MeetingScheduler.jsx    # Main scheduler
│   │   ├── Calendar.jsx            # Calendar widget
│   │   ├── MeetingSlots.jsx        # Available slots
│   │   └── Booking.jsx             # Booking form
│   ├── utils/
│   │   ├── meetingService.js      # Meeting operations
│   │   └── dateUtils.js           # Date utilities
│   └── hooks/
│       ├── useMeetings.js         # Meeting hook
│       └── useCalendar.js         # Calendar hook
├── config/
│   └── firebase.js                # Firebase config
├── public/
│   └── images/                    # Static assets
├── .env.local                     # Environment variables
├── package.json                   # Dependencies
├── next.config.js                 # Next.js config
├── tailwind.config.js             # Tailwind config
├── postcss.config.js              # PostCSS config
└── README.md                      # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Firebase project credentials
- Kinde application credentials
- Git for version control

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/saurabh723395/full-stack-meeting-schedular.git
cd full-stack-meeting-schedular
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
Create `.env.local` file:
```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
FIREBASE_PRIVATE_KEY=your_private_key
FIREBASE_CLIENT_EMAIL=your_client_email

# Kinde Configuration
KINDE_DOMAIN=your_domain.kinde.com
KINDE_CLIENT_ID=your_client_id
KINDE_CLIENT_SECRET=your_client_secret
KINDE_REDIRECT_URL=http://localhost:3000/api/auth/kinde/callback
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. **Run development server**
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Usage

### Scheduling a Meeting
1. Navigate to the home page
2. Login with Kinde authentication
3. Select a date from the calendar
4. Choose an available time slot
5. Select meeting type and duration
6. Confirm booking
7. View confirmation details

### Managing Meetings
- View all scheduled meetings in dashboard
- Edit meeting details
- Cancel meetings
- Download calendar exports

## 🔌 API Routes

### Meetings
- `GET /api/meetings` - Fetch all meetings
- `POST /api/meetings` - Create new meeting
- `GET /api/meetings/:id` - Get meeting details
- `PUT /api/meetings/:id` - Update meeting
- `DELETE /api/meetings/:id` - Delete meeting

### Availability
- `GET /api/availability` - Fetch available slots
- `POST /api/availability` - Create availability

## 🔒 Security

- **Kinde OAuth**: Secure user authentication
- **JWT Tokens**: Secure API communication
- **Environment Variables**: Sensitive data protection
- **Firebase Security Rules**: Data access control
- **CORS Protection**: Cross-origin request handling

## 📊 Database Schema

### Firestore Collections

**users**
- uid (string): User ID
- email (string): User email
- name (string): User name
- createdAt (timestamp): Account creation date

**meetings**
- id (string): Meeting ID
- userId (string): Owner user ID
- title (string): Meeting title
- date (date): Meeting date
- time (time): Meeting time
- duration (number): Duration in minutes
- attendees (array): Participant emails
- status (string): pending/confirmed/completed
- createdAt (timestamp): Creation date

**availability**
- id (string): Availability ID
- userId (string): Owner user ID
- dayOfWeek (number): 0-6 (Sunday-Saturday)
- startTime (time): Available start time
- endTime (time): Available end time
- createdAt (timestamp): Creation date

## 🎨 Customization

### Theme Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',    // Blue
      secondary: '#10B981',  // Green
      accent: '#F59E0B',     // Amber
    },
  },
}
```

### Meeting Types
Modify `src/utils/meetingTypes.js` to add custom meeting categories.

## 🚢 Deployment

### Deploy to Vercel

1. **Push to GitHub**
```bash
git push origin main
```

2. **Connect to Vercel**
- Visit [vercel.com](https://vercel.com)
- Import your GitHub repository
- Set environment variables
- Deploy

### Environment Variables on Vercel
Add all variables from `.env.local` in Vercel dashboard settings.

## 📚 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Firebase Docs](https://firebase.google.com/docs)
- [Kinde Docs](https://kinde.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 👥 Author

**Saurabh Sharma**
- GitHub: [@saurabh723395](https://github.com/saurabh723395)
- Email: [your-email@example.com](mailto:your-email@example.com)

## 🙏 Acknowledgments

- Next.js team for amazing framework
- Firebase for reliable backend services
- Kinde for authentication solution
- Tailwind CSS for utility-first styling
- React community for awesome libraries

## 📞 Support

For support, email saurabh@example.com or open an issue on GitHub.

## 🎯 Future Enhancements

- [ ] Email notifications
- [ ] Calendar integration (Google Calendar, Outlook)
- [ ] Meeting reminders
- [ ] Video conferencing (Zoom integration)
- [ ] Analytics dashboard
- [ ] Payment integration
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Mobile app (React Native)
- [ ] Advanced scheduling AI

---

**Built with ❤️ by the development team**
