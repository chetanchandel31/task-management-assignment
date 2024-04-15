import { ThemeProvider } from "./ThemeProvider";
import TodosProvider from "./TodosProvider";

type Props = { children: React.ReactNode };

export default function AllProviders({ children }: Props) {
  return (
    <ThemeProvider>
      <TodosProvider>{children}</TodosProvider>
    </ThemeProvider>
  );
}
