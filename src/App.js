import { Routes, Route, Navigate } from "react-router-dom"
import Calendar from './page/calendar'
import moment from 'moment';
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {

  return (
   <>
<View className="App">
<Card>
     <Routes>
      <Route path="/year/:year/month/:month" element={ <Calendar /> } />
       <Route path="/" element={ <Calendar /> } />
      </Routes>
      <Button onClick={signOut}>Sign Out</Button>
      </Card>
    </View>
   </>
  );
 }

 export default withAuthenticator(App);