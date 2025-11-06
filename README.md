# FreelanceDash

An all-in-one workspace designed for freelancers to efficiently manage their business operations. Track invoices, manage clients, and never miss a deadline again.

**Created by:** Michael Semera

## 🌟 Features

- **Invoice Management**: Create, track, and manage invoices with status updates (Draft, Sent, Paid, Overdue)
- **Client Management**: Maintain a comprehensive database of clients with contact information
- **Project Tracking**: Monitor project deadlines and deliverables in real-time
- **Dashboard Analytics**: Visual overview of earnings, pending invoices, and upcoming deadlines
- **PDF Generation**: Export professional invoices as PDF documents
- **Secure Authentication**: JWT-based user authentication and authorization
- **Responsive Design**: Fully responsive interface that works on desktop, tablet, and mobile devices

## 🛠️ Technology Stack

### Frontend
- **React 18**: Modern UI library with hooks
- **React Router**: Client-side routing
- **Axios**: HTTP client for API requests
- **Chart.js**: Data visualization
- **jsPDF**: PDF generation
- **CSS3**: Custom styling with modern layouts

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **JWT**: JSON Web Tokens for authentication
- **bcrypt**: Password hashing
- **CORS**: Cross-origin resource sharing

## 📁 Project Structure

```
freelancedash/
├── client/                 # Frontend React application
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API service layer
│   │   ├── context/       # React context providers
│   │   ├── utils/         # Utility functions
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
│
├── server/                # Backend Node.js application
│   ├── config/           # Configuration files
│   │   └── db.js
│   ├── models/           # Mongoose models
│   │   ├── User.js
│   │   ├── Client.js
│   │   ├── Invoice.js
│   │   └── Project.js
│   ├── routes/           # API routes
│   │   ├── auth.js
│   │   ├── clients.js
│   │   ├── invoices.js
│   │   └── projects.js
│   ├── middleware/       # Custom middleware
│   │   └── auth.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the server directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/freelancedash
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
NODE_ENV=development
```

4. Start the backend server:
```bash
npm start
```

The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the client directory:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

4. Start the React development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## 📊 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Clients
- `GET /api/clients` - Get all clients
- `GET /api/clients/:id` - Get single client
- `POST /api/clients` - Create new client
- `PUT /api/clients/:id` - Update client
- `DELETE /api/clients/:id` - Delete client

### Invoices
- `GET /api/invoices` - Get all invoices
- `GET /api/invoices/:id` - Get single invoice
- `POST /api/invoices` - Create new invoice
- `PUT /api/invoices/:id` - Update invoice
- `DELETE /api/invoices/:id` - Delete invoice

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

## 💡 Usage

### Getting Started
1. Register a new account or login with existing credentials
2. Add your clients through the Clients page
3. Create projects and set deadlines
4. Generate invoices for completed work
5. Track your earnings and upcoming deadlines on the dashboard

### Creating an Invoice
1. Navigate to the Invoices page
2. Click "Create Invoice"
3. Select a client
4. Add line items with descriptions and amounts
5. Set payment terms and due date
6. Save and send to client
7. Export as PDF when needed

### Managing Projects
1. Go to the Projects page
2. Create a new project with client details
3. Set deadlines and deliverables
4. Update status as work progresses
5. Mark as complete when finished

## 🔒 Security Features

- Password hashing with bcrypt (10 salt rounds)
- JWT authentication with HTTP-only cookies
- Protected API routes with middleware
- Input validation and sanitization
- CORS configuration for cross-origin requests
- MongoDB injection prevention through Mongoose

## 🎨 Design Highlights

- Clean, modern interface with intuitive navigation
- Consistent color scheme and typography
- Responsive grid layouts
- Interactive data visualizations
- Smooth transitions and hover effects
- Accessibility considerations (ARIA labels, semantic HTML)

## 📈 Future Enhancements

- Email notifications for upcoming deadlines
- Recurring invoice templates
- Time tracking integration
- Expense tracking
- Multi-currency support
- Client portal for invoice viewing
- Payment gateway integration (Stripe/PayPal)
- Advanced reporting and analytics
- Dark mode theme

## 🐛 Known Issues

None currently reported. Please open an issue on GitHub if you encounter any problems.

## 📝 License

This project is created for portfolio purposes by Michael Semera. Feel free to use as a reference for your own projects.

## 👤 Author

**Michael Semera**

- 💼 LinkedIn: [Michael Semera](https://www.linkedin.com/in/michael-semera-586737295/)
- 🐙 GitHub: [@MichaelKS123](https://github.com/MichaelKS123)
- 📧 Email: michaelsemera15@gmail.com

This project showcases full-stack development skills including:
- Frontend development with React
- Backend API development with Node.js and Express
- Database design and management with MongoDB
- Authentication and authorization implementation
- RESTful API design principles
- Responsive web design
- PDF generation and document handling

## 🙏 Acknowledgments

- Built as a portfolio project demonstrating MERN stack proficiency
- Inspired by the need for simple, effective freelancer management tools
- Designed with user experience and code quality as top priorities

---

**Note**: This is a portfolio project. For production use, additional security measures, testing, and optimization would be recommended.