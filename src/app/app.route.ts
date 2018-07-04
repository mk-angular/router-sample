import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { IntroComponent } from './components/intro/intro.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SellerInfoComponent } from './components/product/seller-info/seller-info.component';
import { DescriptionComponent } from './components/product/description/description.component';

const ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'product/:id',
        component: ProductComponent,
        data: [
            {
                isProd: true
            }
        ],
        children: [
            {
                path: '',
                component: DescriptionComponent
            },
            {
                path: 'seller/:id',
                component: SellerInfoComponent
            }
        ]
    },
    {
        path: 'intro',
        component: IntroComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

const ROUTING = RouterModule.forRoot(ROUTES);

export default ROUTING;