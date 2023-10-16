import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './redux/store';
// import { Provider } from 'react-redux';
import 'index.css';
import { theme } from './constants/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* <Provider>
        <PersistGate loading={null}> */}
          <BrowserRouter basename="/slimmom-project">
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </BrowserRouter>
        {/* </PersistGate>
      </Provider> */}
  </React.StrictMode>
);