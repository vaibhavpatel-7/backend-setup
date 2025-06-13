# Ticket Booking Backend

A modern, type-safe Node.js backend application setup with Express.js and TypeScript.

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **PNPM** (v10.11.0 or higher) - Package manager

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit the `.env` file with your configuration:
   ```env
   PORT=3000
   ```

## 🚀 Getting Started

### Development Mode

Start the development server with hot reload:

```bash
pnpm dev
```

The server will start at `http://localhost:3000`

### Production Build

Build the TypeScript code:

```bash
pnpm build
```

### Start Production Server

```bash
node dist/index.js
```

## 📜 Available Scripts

| Script                | Description                              |
| --------------------- | ---------------------------------------- |
| `pnpm dev`            | Start development server with hot reload |
| `pnpm build`          | Build TypeScript to JavaScript           |
| `pnpm lint`           | Run ESLint to check code quality         |
| `pnpm lint:fix`       | Fix ESLint issues automatically          |
| `pnpm prettier`       | Format code with Prettier                |
| `pnpm prettier:check` | Check code formatting                    |
| `pnpm format`         | Run Prettier and check formatting        |
| `pnpm format:check`   | Check code formatting only               |

## 📁 Project Structure

```
backend/
├── src/
│   ├── health/
│   │   ├── health.controller.ts    # Health check controller
│   │   └── health.route.ts         # Health check routes
│   ├── middleware/
│   │   └── logger.middleware.ts    # HTTP request logging
│   ├── utils/
│   │   └── logger.ts              # Pino logger configuration
│   └── index.ts                   # Application entry point
├── dist/                          # Compiled JavaScript output
├── eslint.config.mjs             # ESLint configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies and scripts
├── pnpm-lock.yaml               # Lock file for dependencies
├── .env.example                 # Environment variables template
└── readme.md                    # Project documentation
```

## 🔌 API Endpoints

### Health Check

- **GET** `/health` - Check server status
  ```json
  {
    "status": "ok",
    "message": "server is up",
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
  ```

## 🛠️ Development

### Code Quality

This project uses ESLint and Prettier to maintain code quality:

- **ESLint**: Configured with TypeScript rules and import sorting
- **Prettier**: Enforces consistent code formatting
- **TypeScript**: Strict type checking enabled

### Logging

The application uses Pino for structured logging:

- Pretty formatting in development
- JSON format recommended for production
- HTTP request logging middleware included

### Environment Configuration

Create a `.env` file based on `.env.example`:

```env
PORT=3000
```

## 🧪 Testing

_Testing setup is not yet configured. Consider adding:_

- Jest for unit testing
- Supertest for API testing
- Test scripts in package.json

## 🚀 Deployment

1. **Build the application**

   ```bash
   pnpm build
   ```

2. **Set production environment variables**

3. **Start the server**
   ```bash
   node dist/index.js
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use meaningful commit messages
- Run linting and formatting before committing
- Add appropriate logging for new features
- Update documentation for API changes

## 📝 License

This project is licensed under the ISC License.

## 🔧 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Logging**: Pino
- **Code Quality**: ESLint + Prettier
- **Package Manager**: PNPM
- **Build Tool**: TypeScript Compiler (tsc)
