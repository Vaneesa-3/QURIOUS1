import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import TestAttempted from './components/TestAttempted'
import TestAvailable from './components/TestAvailable'
import Landing from './components/Landing'
import CreateTest1 from './components/CreateTest1'
import CreateTest2 from './components/CreateTest2'
import StartTest from './components/StartTest'
import TestResult1 from './components/TestResult1'
import TestResult2 from './components/TestResult2'


function App() {
  

  return (
    <>
      {/* <Layout/> */}
      {/* <Navbar/> */}
      
      <Routes>
        <Route path='/' element={<Login/>}/> 
        {/* remove the previous line later */}

        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>

        <Route
          path="/testatt"
          element={
            <Layout>
              <TestAttempted />
            </Layout>
          }
        />
        <Route
          path="/testavail"
          element={
            <Layout>
              <TestAvailable />
            </Layout>
          }
        />
        <Route
          path="/landing"
          element={
            <Layout>
              <Landing />
            </Layout>
          }
        />
        <Route
          path="/createtest1"
          element={
            <Layout>
              <CreateTest1/>
            </Layout>
          }
        />

        <Route
          path="/createtest2"
          element={
            <Layout>
              <CreateTest2/>
            </Layout>
          }
        />

        <Route
          path="/starttest"
          element={
            <Layout>
              <StartTest/>
            </Layout>
          }
        />
        <Route
          path="/testresult1"
          element={
            <Layout>
              <TestResult1/>
            </Layout>
          }
        />
        <Route
          path="/testresult2"
          element={
            <Layout>
              <TestResult2/>
            </Layout>
          }
        />
      </Routes>
      
    </>
  )
}

export default App
