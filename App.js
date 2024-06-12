import AppNavigatior from "./navigation/AppNavigatior";
import { TaskProvider } from "./context/taskContext";

export default function App() {
  return (
    <TaskProvider>
      <AppNavigatior />
    </TaskProvider>
  );
}
