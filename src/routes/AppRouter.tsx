
import {FC, Suspense} from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom'
import { routes } from './routes'
import {PrivateRoute} from './PrivateRoutes'
import Loader from "../components/Loader";

interface AppProps {}

const routeComponents = 

routes.map((route) => 

     route.protected === true ?
    
    <Route exact path={route.path} component={route.component} />
    :
    <Route exact path={route.path} component={route.component} />
);


export const AppRouter: FC<AppProps> = (props) => {
    return (
        <HashRouter>
            <Suspense fallback={<Loader/>}>
                <Switch>
                    {routeComponents}
                </Switch>
            </Suspense>
        </HashRouter>
    )
}
