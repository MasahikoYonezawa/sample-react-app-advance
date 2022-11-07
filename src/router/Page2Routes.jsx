import { UrlParameter } from '../UrlParameter';
import { Page2 } from '../Page2';

export const page2Routes = [
    {
        path: '/',
        exact: true,
        children: <Page2></Page2>,
    },
    {
        path: '/:id',
        exact: false,
        children: <UrlParameter></UrlParameter>,
    },
];
