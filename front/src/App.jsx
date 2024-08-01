import { Tasks } from './components/Tasks.jsx'
import { Form } from './components/Form.jsx'
import { TasksProvider } from './context/tasks.jsx';

function App() {

  return (
    <TasksProvider>
      <Form />
      <Tasks />
    </TasksProvider>
  )
}

export default App
