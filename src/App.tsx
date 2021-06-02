import { Header } from './components/Header';
import { RepositoryList } from './components/RepositoryList';
import { TaskList } from './components/TaskList';
import './styles/global.scss';

export function App() {
  return (
    // <RepositoryList />
    <>
      <Header />
      <TaskList />
    </>
  )
}