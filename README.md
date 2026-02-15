# Inventory Manager Web UI

A modern, React-based web interface for the [Inventory Manager](https://www.github.com/Arkiralor/InventoryManager) backend system.

## Features

- Modern UI built with React 19 and Material-UI
- User authentication and authorization
- Dashboard for inventory management
- Theming support
- Responsive design
- Fast development with Vite

## Tech Stack

- **React 19** - UI library
- **Material-UI (MUI)** - Component library
- **React Router** - Navigation and routing
- **Vite** - Build tool and development server
- **ESLint** - Code linting

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Arkiralor/InventoryManager-Front.git
   cd InventoryManager-Front
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   ```bash
   cp example.env .env
   ```

   Then edit `.env` with your company's actual information.

## Environment Configuration

The application uses environment variables for configuration. Copy `example.env` to `.env` and update the following variables:

- `COMPANY_NAME` - Your company or organization name
- `COMPANY_ADDRESS` - Physical address of your company
- `COMPANY_EMAIL` - Contact email address
- `COMPANY_PHONE` - Contact phone number with country code

See `example.env` for detailed descriptions and format.

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

## Building for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Code Quality

Run ESLint to check for code issues:

```bash
npm run lint
```

## Project Structure

```
src/
├── assets/          # Static assets (images, fonts, etc.)
├── components/      # Reusable React components
├── hooks/           # Custom React hooks
├── pages/           # Page components
│   ├── Dashboard/   # Dashboard page
│   ├── Home/        # Home page
│   ├── Login/       # Login page
│   └── Registration/# Registration page
├── themes/          # Theme configuration
├── utils/           # Utility functions
├── App.jsx          # Main app component
└── main.jsx         # Application entry point
```

## Scripts

The `.scripts/` directory contains utility scripts:

- `generate_example_env.py` - Generates `example.env` from `.env` for version control

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Arkiralor**

- GitHub: [@Arkiralor](https://github.com/Arkiralor)
- Backend Repository: [InventoryManager](https://github.com/Arkiralor/InventoryManager)

## Acknowledgments

- Built with [React](https://react.dev/)
- UI components from [Material-UI](https://mui.com/)
- Powered by [Vite](https://vitejs.dev/)
