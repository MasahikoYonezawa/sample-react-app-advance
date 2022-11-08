import './styles.css';
import { Router } from './Router/Router';
import { UserProvider } from './providers/UserProvider';
import { RecoilRoot } from 'recoil';

export const App = () => {
    return (
        <RecoilRoot>
            <UserProvider>
                <Router />
            </UserProvider>
        </RecoilRoot>
    );
};
