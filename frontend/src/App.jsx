import React from 'react'
import AppRoutes from './routes/AppRoutes'
import AuthProvider from './context/AuthProvider'
const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App

// import React from "react";
// import ContactPage from "./components/ContactPage";

// const App = () => {
//   return (
//     <div>
//       <ContactPage />
//     </div>
//   );
// };

// export default App;
