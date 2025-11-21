import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components";
import { HookForm, ReduxExample, ReactQueryExample } from "./ExampleComponents";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-background">
      {/* <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to React + TypeScript</CardTitle>
          <CardDescription>
            This is a React app with TypeScript, Tailwind CSS, and shadcn/ui
            Card component
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Your setup is complete! You can now use the Card component and other
            shadcn/ui components in your application.
          </p>
        </CardContent>
        <CardFooter>
          <p className="text-xs text-muted-foreground">
            Start editing{" "}
            <code className="px-1 py-0.5 bg-muted rounded">src/App.tsx</code> to
            see changes
          </p>
        </CardFooter>
      </Card> */}
      {/* <HookForm /> */}
      <ReduxExample />
      {/* <ReactQueryExample /> */}
    </div>
  );
}

export default App;
