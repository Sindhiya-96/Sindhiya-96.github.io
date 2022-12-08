import { Route } from 'react-router-dom';
import Home from './components/Home';
import Philosophy from './components/Philosophy';
import Admin from './components/Admin';
import PgCourses from './components/PgCourses';
import UGCourses from './components/Ugcourses';
import Supervision from './components/Supervision';
import Interest from './components/Interest';
import InterestSub from './components/InterestSub';
import Blog from './components/Blog';
import Awards from './components/Awards';
import Others from './components/Others';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      
      <Route path='/home'>
        <Home/>
      </Route>
{/*---------------------------------------Teaching part---------------------------------------*/}
      <Route path='/philosophy'>
        <Philosophy />
      </Route>

      <Route path="/pgcourses">
        <PgCourses/>
      </Route>

      <Route path='/ugcourses'>
        <UGCourses/>
      </Route>

      <Route path='/supervision'>
        <Supervision/>
      </Route>

      {/*---------------------------------------Research part---------------------------------------*/}
      <Route path='/interest'>
        <Interest/>
      </Route>
      <Route path='/interestsub'>
        <InterestSub/>
      </Route>
      <Route path='/blog'>
        <Blog/>
      </Route>
    {/*---------------------------------------Admin part---------------------------------------*/}  

      <Route path='/admin'>
          <Admin/>
      </Route>
      {/*---------------------------------------Awards part---------------------------------------*/}  

      <Route path='/awards'>
        <Awards/>
      </Route>

      {/*---------------------------------------Others part---------------------------------------*/}  

      <Route path='/others'>
        <Others/>
      </Route>



      {/*---------------------------------------Contact us part---------------------------------------*/}  

      <Route path='/contact'>
        <Contact/>
      </Route>
    </div>
  );
}

export default App;
