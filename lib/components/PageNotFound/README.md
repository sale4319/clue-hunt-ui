# PageNotFound

A styled 404 error page component for handling missing pages or routes.

## Features

- 🚫 Professional 404 error display
- 🎨 Styled error message layout
- 💬 Customizable error messages
- 📱 Responsive design

## Props

This component currently has no props and uses predefined messages.

## Usage

### Basic 404 Page

```tsx
import { PageNotFound } from "clue-hunt-ui";

<PageNotFound />;
```

### In React Router

```tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageNotFound } from "clue-hunt-ui";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Catch all unmatched routes */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
```

### With Container and Navigation

```tsx
import { Container, PageNotFound, Button } from "clue-hunt-ui";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Container theme="dark">
      <PageNotFound />

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Button label="Go Home" mode="pulse" onClick={() => navigate("/")} />

        <Button label="Go Back" mode="fill" onClick={() => navigate(-1)} />
      </div>
    </Container>
  );
}
```

### In Game Context

```tsx
import { PageNotFound, Title, SpacerElement } from "clue-hunt-ui";

function GameNotFound() {
  return (
    <div className="game-error-page">
      <Title
        label="Lost in Space?"
        titleSize="xl"
        gradient={true}
        align="center"
      />

      <SpacerElement size="medium" />

      <PageNotFound />

      <SpacerElement size="medium" />

      <div style={{ textAlign: "center" }}>
        <p>The page you're looking for has drifted into the void.</p>
        <Button
          label="Return to Base"
          mode="raise"
          onClick={() => (window.location.href = "/")}
        />
      </div>
    </div>
  );
}
```

### With Error Boundary

```tsx
import { PageNotFound } from "clue-hunt-ui";
import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <PageNotFound />;
    }

    return this.props.children;
  }
}
```

### Custom 404 Layout

```tsx
import { PageNotFound, Container, AppMenu } from "clue-hunt-ui";

function Custom404() {
  return (
    <Container theme="dark">
      <AppMenu>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </AppMenu>

      <main style={{ textAlign: "center", padding: "2rem" }}>
        <PageNotFound />

        <div style={{ marginTop: "2rem" }}>
          <p>Don't worry, even space explorers get lost sometimes!</p>
        </div>
      </main>
    </Container>
  );
}
```

## Styling Notes

- Displays large "404" error number
- Shows "Page Not Found" message below
- Uses semantic `<section>` element
- Styled with space/galaxy theme in mind
- Error messages are defined in `messages.json`

## Customization

Error messages can be customized by modifying the `messages.json` file:

- `FOUR_O_FOUR`: The main error code display
- `PAGE_NOT_FOUND`: The descriptive error message
