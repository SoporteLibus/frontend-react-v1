import './App.css';
import React from "react";
import Home from './components/machines/Home'
import { Navigate, Route, Routes } from 'react-router-dom';
import Milacron from './components/machines/Milacron';
import Arburg from './components/machines/Arburg';
import Bmb from './components/machines/Bmb';
import Login from './components/Login';
import Search from './components/machines/Search';
import ListPage from './components/machines/ListPage';
import LoadFile from './components/machines/LoadFile';
import GeneratorList from './components/generators/GeneratorList';
import GeneratorList2 from './components/generators/GeneratorList2';
import GeneratorListExtra from './components/generators/GeneratorListExtra';
import Footer from './components/Footer';
import Error from './components/404';
import Register from './components/register';
import { ProtectedRoute } from './components/protectedRoute';
import Welcome from './components/confirm'
import HomeGenerator from './components/generators/HomeGenerator';
import Dashboard from './config/admin/scenes/dashboard'
import Team from './config/admin/scenes/team'
import Invoices from './config/admin/scenes/form'
import Form from './config/admin/scenes/new-form'
import Bar from './config/admin/scenes/bar'
import Pie from './config/admin/scenes/pie'
import Line from './config/admin/scenes/line'
import Calendar from './config/admin/scenes/calendar'
import Sidebar from './config/admin/scenes/global/Sidebar';

function App() {
    const [isSidebar, setIsSidebar] = React.useState(true);
    const auth=localStorage.getItem('token')
    return (
        <>
            <Sidebar isSidebar={isSidebar} />
            <Routes >
                {!auth ?  
                <Route path='/' element={<Navigate to='/app/v1/login/' replace />}/> 
                    :
                <Route path='/' element={<Navigate to='/app/v1/' replace />}/>}
                <Route path='app/v1/login/' element={<Login/>} />
               
                <Route path='app/v1/register/' element={<Register/>} />
                
                <Route path="app/v1/welcome/" element={<Welcome />} />
                <Route path='app/v1/' element={
                <ProtectedRoute>
                    <Home/>
                </ProtectedRoute>}/>
                <Route path='app/v1/milacron/' element={
                <ProtectedRoute>
                    <Milacron />
                </ProtectedRoute>} />
                <Route path='app/v1/arburg/' element={
                <ProtectedRoute>
                    <Arburg />
                </ProtectedRoute>} />
                <Route path='app/v1/bmb/' element={
                <ProtectedRoute>
                    <Bmb />
                </ProtectedRoute>} />
                <Route path='app/v1/search' element={
                <ProtectedRoute>
                    <Search />
                </ProtectedRoute>} />
                <Route path='app/v1/loadfile' element={
                <ProtectedRoute>
                    <LoadFile />
                </ProtectedRoute>} />
                <Route path='app/v1/listpage' element={
                <ProtectedRoute>
                    <ListPage />
                </ProtectedRoute>} />
                <Route path='app/v1/generadores' element={
                <ProtectedRoute>
                    <HomeGenerator />
                </ProtectedRoute>} />
                <Route path='app/v1/generadores/generador1' element={
                <ProtectedRoute>
                    <GeneratorList />
                </ProtectedRoute>} />
                <Route path='app/v1/generadores/generador2' element={
                <ProtectedRoute>
                    <GeneratorList2 />
                </ProtectedRoute>} />
                <Route path='app/v1/generadores/datosextras' element={
                <ProtectedRoute>
                    <GeneratorListExtra />
                </ProtectedRoute>} />
                <Route path='*' element={<Error />} />
                <Route path="app/v1/config/" element={
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>} />
                <Route path="app/v1/config/team/" element={
                <ProtectedRoute>
                    <Team />
                </ProtectedRoute>} />
                <Route path="app/v1/config/form/" element={
                <ProtectedRoute>
                    <Invoices />
                </ProtectedRoute>} />
                <Route path="app/v1/config/newform/" element={
                <ProtectedRoute>
                    <Form />
                </ProtectedRoute>} />
                <Route path="app/v1/config/Bar/" element={
                <ProtectedRoute>
                    <Bar />
                </ProtectedRoute>} />
                <Route path="app/v1/config/pie/" element={
                <ProtectedRoute>
                    <Pie />
                </ProtectedRoute>} />
                <Route path="app/v1/config/line/" element={
                <ProtectedRoute>
                    <Line />
                </ProtectedRoute>} />
                <Route path="app/v1/config/calendar/" element={
                <ProtectedRoute>
                    <Calendar />
                    </ProtectedRoute>} />
         </Routes>
           
            <Footer />
        </>
    );
}

export default App;


