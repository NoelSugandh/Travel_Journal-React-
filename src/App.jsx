import {createRoot} from "react-dom/client"
import Index from './index'


function App() {
  
const root = createRoot(document.getElementById("root"))
root.render(<Index />)

}

export default App
