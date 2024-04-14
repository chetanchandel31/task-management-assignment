import TodosProvider from "./TodosProvider";

type Props = { children: React.ReactNode };

export default function AllProviders({ children }: Props) {
  return <TodosProvider>{children}</TodosProvider>;
}
