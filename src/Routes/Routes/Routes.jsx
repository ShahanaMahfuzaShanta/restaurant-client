import { createBrowserRouter } from 'react-router-dom';
import Home from '../../Home/Home';
import ContactUs from '../../Pages/ContactUs/ContactUs';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Menu from '../../Pages/Menu/Menu';
import Shop from '../../Pages/Shop/Shop';
import Main from '../../LayOut/Main';

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main />,
            children: 
            [
                {
                    path: "/",
                    element: <Home />,
                  },
                  {
                    path: "contact-us",
                    element: <ContactUs />,
                  },
                  {
                    path: "dashboard",
                    element: <Dashboard />,
                  },
                  {
                    path: "our-menu",
                    element: <Menu />,
                  },
                  {
                    path: "our-shop",
                    element: <Shop />,
                  },
            ]
        }
      ]);


export default router;