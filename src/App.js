import {Fragment} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { PublicRouters } from './router';
import DefaultLayout from './components/Layout/DefaultLayout';

function App() {
  return (
      <Router>
            <Routes>
                  {PublicRouters.map( (route,index) =>{
                    const Pages = route.component;
                    let Layout = DefaultLayout;
                    if(route.layout ) {
                      Layout = route.layout;

                    } else if(route.layout=== null) {
                      Layout = Fragment;
                    }
                      return (
                          <Route key = {index} path={route.path} 
                          element = 
                            <Layout>
                                <Pages/>
                            </Layout>
                           />
                      )
                  })}
            </Routes>
      </Router>
  );
}

export default App;
