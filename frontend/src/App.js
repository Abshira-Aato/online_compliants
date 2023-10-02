import { Routes,Route } from "react-router-dom";
import ManageUsers from "./pages/manageUsers"
import Header from "./component/header";
import Dashboard from "./component/dashboard"
import SignIn from "./pages/signIN";
import User from "./pages/user";
import AddNoteform from "./pages/createcom";
import Notes from "./pages/complaints"
import UpdateForm from "./pages/update";
import NoteDetail from "./pages/noteDetails";
import Log from "./pages/logout";
import Screen from "./pages/screen";
import Thanks from "./pages/thank";
function App(){
    return<div>
        <Routes>
<Route path="/" element={<Header/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/signIN" element={<SignIn/>}/>
<Route path="/user" element={<User/>}/>
<Route path="/complaints" element={<Notes/>}/>
<Route path="/manageUsers" element={<ManageUsers/>}/>
<Route path="/createcom" element={<AddNoteform/>}/>
<Route path="/update/:id" element={<UpdateForm/>}/>
<Route path="/noteDetails/:id" element={<NoteDetail/>}/>
<Route path="/logout" element={<Log/>}/>
<Route path="/screen" element={<Screen/>}/>
<Route path="/thank" element={<Thanks/>}/>






        </Routes>
    </div>
};
export default App;