/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as FaqImport } from './routes/faq'
import { Route as AuthenticatedImport } from './routes/_authenticated'
import { Route as AuthLayoutImport } from './routes/_authLayout'
import { Route as IndexImport } from './routes/index'
import { Route as AuthenticatedDashboardLayoutImport } from './routes/_authenticated/_dashboardLayout'
import { Route as AuthLayoutRegistrationImport } from './routes/_authLayout/registration'
import { Route as AuthLayoutPasswordResetImport } from './routes/_authLayout/passwordReset'
import { Route as AuthLayoutLoginImport } from './routes/_authLayout/login'
import { Route as AuthLayoutForgotPasswordImport } from './routes/_authLayout/forgotPassword'
import { Route as AuthLayoutRegistrationIndexImport } from './routes/_authLayout/registration/index'
import { Route as AuthenticatedDashboardLayoutNotificationsImport } from './routes/_authenticated/_dashboardLayout/notifications'
import { Route as AuthenticatedDashboardLayoutInvoicesImport } from './routes/_authenticated/_dashboardLayout/invoices'
import { Route as AuthenticatedDashboardLayoutFaqImport } from './routes/_authenticated/_dashboardLayout/faq'
import { Route as AuthenticatedDashboardLayoutAccountTypeImport } from './routes/_authenticated/_dashboardLayout/_accountType'
import { Route as AuthLayoutRegistrationValidateImport } from './routes/_authLayout/registration/validate'
import { Route as AuthLayoutRegistrationUserImport } from './routes/_authLayout/registration/user'
import { Route as AuthLayoutRegistrationCompanyImport } from './routes/_authLayout/registration/company'
import { Route as AuthenticatedDashboardLayoutBuyOrderIndexImport } from './routes/_authenticated/_dashboardLayout/buyOrder/index'
import { Route as AuthenticatedDashboardLayoutBuyOrderOrderIdImport } from './routes/_authenticated/_dashboardLayout/buyOrder/$orderId'
import { Route as AuthenticatedDashboardLayoutAccountTypeProviderSellsImport } from './routes/_authenticated/_dashboardLayout/_accountType/provider/sells'
import { Route as AuthenticatedDashboardLayoutAccountTypeProviderSellDetailImport } from './routes/_authenticated/_dashboardLayout/_accountType/provider/sellDetail'
import { Route as AuthenticatedDashboardLayoutAccountTypeClientOrdersImport } from './routes/_authenticated/_dashboardLayout/_accountType/client/orders'
import { Route as AuthenticatedDashboardLayoutAccountTypeProviderProductsIndexImport } from './routes/_authenticated/_dashboardLayout/_accountType/provider/products/index'
import { Route as AuthenticatedDashboardLayoutAccountTypeProviderProOrdersIndexImport } from './routes/_authenticated/_dashboardLayout/_accountType/provider/proOrders/index'
import { Route as AuthenticatedDashboardLayoutAccountTypeProviderConfigurationIndexImport } from './routes/_authenticated/_dashboardLayout/_accountType/provider/configuration/index'
import { Route as AuthenticatedDashboardLayoutAccountTypeClientProOrdersIndexImport } from './routes/_authenticated/_dashboardLayout/_accountType/client/proOrders/index'
import { Route as AuthenticatedDashboardLayoutAccountTypeClientListsIndexImport } from './routes/_authenticated/_dashboardLayout/_accountType/client/lists/index'
import { Route as AuthenticatedDashboardLayoutAccountTypeClientConfigurationIndexImport } from './routes/_authenticated/_dashboardLayout/_accountType/client/configuration/index'
import { Route as AuthenticatedDashboardLayoutAccountTypeProviderProductsNewProductsImport } from './routes/_authenticated/_dashboardLayout/_accountType/provider/products/newProducts'
import { Route as AuthenticatedDashboardLayoutAccountTypeProviderProductsProductIdImport } from './routes/_authenticated/_dashboardLayout/_accountType/provider/products/$productId'
import { Route as AuthenticatedDashboardLayoutAccountTypeProviderProOrdersPreOrderIdImport } from './routes/_authenticated/_dashboardLayout/_accountType/provider/proOrders/$preOrderId'
import { Route as AuthenticatedDashboardLayoutAccountTypeClientProOrdersPreOrderIdImport } from './routes/_authenticated/_dashboardLayout/_accountType/client/proOrders/$preOrderId'
import { Route as AuthenticatedDashboardLayoutAccountTypeClientListsFavoritesImport } from './routes/_authenticated/_dashboardLayout/_accountType/client/lists/favorites'
import { Route as AuthenticatedDashboardLayoutAccountTypeClientListsBlackListImport } from './routes/_authenticated/_dashboardLayout/_accountType/client/lists/blackList'

// Create Virtual Routes

const AuthenticatedDashboardLayoutAboutLazyImport = createFileRoute(
  '/_authenticated/_dashboardLayout/about',
)()
const AuthenticatedDashboardLayoutAccountTypeProviderDashboardLazyImport =
  createFileRoute(
    '/_authenticated/_dashboardLayout/_accountType/provider/dashboard',
  )()
const AuthenticatedDashboardLayoutAccountTypeClientDashboardLazyImport =
  createFileRoute(
    '/_authenticated/_dashboardLayout/_accountType/client/dashboard',
  )()

// Create/Update Routes

const FaqRoute = FaqImport.update({
  path: '/faq',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const AuthLayoutRoute = AuthLayoutImport.update({
  id: '/_authLayout',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedDashboardLayoutRoute =
  AuthenticatedDashboardLayoutImport.update({
    id: '/_dashboardLayout',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthLayoutRegistrationRoute = AuthLayoutRegistrationImport.update({
  path: '/registration',
  getParentRoute: () => AuthLayoutRoute,
} as any)

const AuthLayoutPasswordResetRoute = AuthLayoutPasswordResetImport.update({
  path: '/passwordReset',
  getParentRoute: () => AuthLayoutRoute,
} as any)

const AuthLayoutLoginRoute = AuthLayoutLoginImport.update({
  path: '/login',
  getParentRoute: () => AuthLayoutRoute,
} as any)

const AuthLayoutForgotPasswordRoute = AuthLayoutForgotPasswordImport.update({
  path: '/forgotPassword',
  getParentRoute: () => AuthLayoutRoute,
} as any)

const AuthLayoutRegistrationIndexRoute =
  AuthLayoutRegistrationIndexImport.update({
    path: '/',
    getParentRoute: () => AuthLayoutRegistrationRoute,
  } as any)

const AuthenticatedDashboardLayoutAboutLazyRoute =
  AuthenticatedDashboardLayoutAboutLazyImport.update({
    path: '/about',
    getParentRoute: () => AuthenticatedDashboardLayoutRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/_dashboardLayout/about.lazy').then(
      (d) => d.Route,
    ),
  )

const AuthenticatedDashboardLayoutNotificationsRoute =
  AuthenticatedDashboardLayoutNotificationsImport.update({
    path: '/notifications',
    getParentRoute: () => AuthenticatedDashboardLayoutRoute,
  } as any)

const AuthenticatedDashboardLayoutInvoicesRoute =
  AuthenticatedDashboardLayoutInvoicesImport.update({
    path: '/invoices',
    getParentRoute: () => AuthenticatedDashboardLayoutRoute,
  } as any)

const AuthenticatedDashboardLayoutFaqRoute =
  AuthenticatedDashboardLayoutFaqImport.update({
    path: '/faq',
    getParentRoute: () => AuthenticatedDashboardLayoutRoute,
  } as any)

const AuthenticatedDashboardLayoutAccountTypeRoute =
  AuthenticatedDashboardLayoutAccountTypeImport.update({
    id: '/_accountType',
    getParentRoute: () => AuthenticatedDashboardLayoutRoute,
  } as any)

const AuthLayoutRegistrationValidateRoute =
  AuthLayoutRegistrationValidateImport.update({
    path: '/validate',
    getParentRoute: () => AuthLayoutRegistrationRoute,
  } as any)

const AuthLayoutRegistrationUserRoute = AuthLayoutRegistrationUserImport.update(
  {
    path: '/user',
    getParentRoute: () => AuthLayoutRegistrationRoute,
  } as any,
)

const AuthLayoutRegistrationCompanyRoute =
  AuthLayoutRegistrationCompanyImport.update({
    path: '/company',
    getParentRoute: () => AuthLayoutRegistrationRoute,
  } as any)

const AuthenticatedDashboardLayoutBuyOrderIndexRoute =
  AuthenticatedDashboardLayoutBuyOrderIndexImport.update({
    path: '/buyOrder/',
    getParentRoute: () => AuthenticatedDashboardLayoutRoute,
  } as any)

const AuthenticatedDashboardLayoutBuyOrderOrderIdRoute =
  AuthenticatedDashboardLayoutBuyOrderOrderIdImport.update({
    path: '/buyOrder/$orderId',
    getParentRoute: () => AuthenticatedDashboardLayoutRoute,
  } as any)

const AuthenticatedDashboardLayoutAccountTypeProviderDashboardLazyRoute =
  AuthenticatedDashboardLayoutAccountTypeProviderDashboardLazyImport.update({
    path: '/provider/dashboard',
    getParentRoute: () => AuthenticatedDashboardLayoutAccountTypeRoute,
  } as any).lazy(() =>
    import(
      './routes/_authenticated/_dashboardLayout/_accountType/provider/dashboard.lazy'
    ).then((d) => d.Route),
  )

const AuthenticatedDashboardLayoutAccountTypeClientDashboardLazyRoute =
  AuthenticatedDashboardLayoutAccountTypeClientDashboardLazyImport.update({
    path: '/client/dashboard',
    getParentRoute: () => AuthenticatedDashboardLayoutAccountTypeRoute,
  } as any).lazy(() =>
    import(
      './routes/_authenticated/_dashboardLayout/_accountType/client/dashboard.lazy'
    ).then((d) => d.Route),
  )

const AuthenticatedDashboardLayoutAccountTypeProviderSellsRoute =
  AuthenticatedDashboardLayoutAccountTypeProviderSellsImport.update({
    path: '/provider/sells',
    getParentRoute: () => AuthenticatedDashboardLayoutAccountTypeRoute,
  } as any)

const AuthenticatedDashboardLayoutAccountTypeProviderSellDetailRoute =
  AuthenticatedDashboardLayoutAccountTypeProviderSellDetailImport.update({
    path: '/provider/sellDetail',
    getParentRoute: () => AuthenticatedDashboardLayoutAccountTypeRoute,
  } as any)

const AuthenticatedDashboardLayoutAccountTypeClientOrdersRoute =
  AuthenticatedDashboardLayoutAccountTypeClientOrdersImport.update({
    path: '/client/orders',
    getParentRoute: () => AuthenticatedDashboardLayoutAccountTypeRoute,
  } as any)

const AuthenticatedDashboardLayoutAccountTypeProviderProductsIndexRoute =
  AuthenticatedDashboardLayoutAccountTypeProviderProductsIndexImport.update({
    path: '/provider/products/',
    getParentRoute: () => AuthenticatedDashboardLayoutAccountTypeRoute,
  } as any)

const AuthenticatedDashboardLayoutAccountTypeProviderProOrdersIndexRoute =
  AuthenticatedDashboardLayoutAccountTypeProviderProOrdersIndexImport.update({
    path: '/provider/proOrders/',
    getParentRoute: () => AuthenticatedDashboardLayoutAccountTypeRoute,
  } as any)

const AuthenticatedDashboardLayoutAccountTypeProviderConfigurationIndexRoute =
  AuthenticatedDashboardLayoutAccountTypeProviderConfigurationIndexImport.update(
    {
      path: '/provider/configuration/',
      getParentRoute: () => AuthenticatedDashboardLayoutAccountTypeRoute,
    } as any,
  )

const AuthenticatedDashboardLayoutAccountTypeClientProOrdersIndexRoute =
  AuthenticatedDashboardLayoutAccountTypeClientProOrdersIndexImport.update({
    path: '/client/proOrders/',
    getParentRoute: () => AuthenticatedDashboardLayoutAccountTypeRoute,
  } as any)

const AuthenticatedDashboardLayoutAccountTypeClientListsIndexRoute =
  AuthenticatedDashboardLayoutAccountTypeClientListsIndexImport.update({
    path: '/client/lists/',
    getParentRoute: () => AuthenticatedDashboardLayoutAccountTypeRoute,
  } as any)

const AuthenticatedDashboardLayoutAccountTypeClientConfigurationIndexRoute =
  AuthenticatedDashboardLayoutAccountTypeClientConfigurationIndexImport.update({
    path: '/client/configuration/',
    getParentRoute: () => AuthenticatedDashboardLayoutAccountTypeRoute,
  } as any)

const AuthenticatedDashboardLayoutAccountTypeProviderProductsNewProductsRoute =
  AuthenticatedDashboardLayoutAccountTypeProviderProductsNewProductsImport.update(
    {
      path: '/provider/products/newProducts',
      getParentRoute: () => AuthenticatedDashboardLayoutAccountTypeRoute,
    } as any,
  )

const AuthenticatedDashboardLayoutAccountTypeProviderProductsProductIdRoute =
  AuthenticatedDashboardLayoutAccountTypeProviderProductsProductIdImport.update(
    {
      path: '/provider/products/$productId',
      getParentRoute: () => AuthenticatedDashboardLayoutAccountTypeRoute,
    } as any,
  )

const AuthenticatedDashboardLayoutAccountTypeProviderProOrdersPreOrderIdRoute =
  AuthenticatedDashboardLayoutAccountTypeProviderProOrdersPreOrderIdImport.update(
    {
      path: '/provider/proOrders/$preOrderId',
      getParentRoute: () => AuthenticatedDashboardLayoutAccountTypeRoute,
    } as any,
  )

const AuthenticatedDashboardLayoutAccountTypeClientProOrdersPreOrderIdRoute =
  AuthenticatedDashboardLayoutAccountTypeClientProOrdersPreOrderIdImport.update(
    {
      path: '/client/proOrders/$preOrderId',
      getParentRoute: () => AuthenticatedDashboardLayoutAccountTypeRoute,
    } as any,
  )

const AuthenticatedDashboardLayoutAccountTypeClientListsFavoritesRoute =
  AuthenticatedDashboardLayoutAccountTypeClientListsFavoritesImport.update({
    path: '/client/lists/favorites',
    getParentRoute: () => AuthenticatedDashboardLayoutAccountTypeRoute,
  } as any)

const AuthenticatedDashboardLayoutAccountTypeClientListsBlackListRoute =
  AuthenticatedDashboardLayoutAccountTypeClientListsBlackListImport.update({
    path: '/client/lists/blackList',
    getParentRoute: () => AuthenticatedDashboardLayoutAccountTypeRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_authLayout': {
      id: '/_authLayout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthLayoutImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/faq': {
      id: '/faq'
      path: '/faq'
      fullPath: '/faq'
      preLoaderRoute: typeof FaqImport
      parentRoute: typeof rootRoute
    }
    '/_authLayout/forgotPassword': {
      id: '/_authLayout/forgotPassword'
      path: '/forgotPassword'
      fullPath: '/forgotPassword'
      preLoaderRoute: typeof AuthLayoutForgotPasswordImport
      parentRoute: typeof AuthLayoutImport
    }
    '/_authLayout/login': {
      id: '/_authLayout/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof AuthLayoutLoginImport
      parentRoute: typeof AuthLayoutImport
    }
    '/_authLayout/passwordReset': {
      id: '/_authLayout/passwordReset'
      path: '/passwordReset'
      fullPath: '/passwordReset'
      preLoaderRoute: typeof AuthLayoutPasswordResetImport
      parentRoute: typeof AuthLayoutImport
    }
    '/_authLayout/registration': {
      id: '/_authLayout/registration'
      path: '/registration'
      fullPath: '/registration'
      preLoaderRoute: typeof AuthLayoutRegistrationImport
      parentRoute: typeof AuthLayoutImport
    }
    '/_authenticated/_dashboardLayout': {
      id: '/_authenticated/_dashboardLayout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedDashboardLayoutImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authLayout/registration/company': {
      id: '/_authLayout/registration/company'
      path: '/company'
      fullPath: '/registration/company'
      preLoaderRoute: typeof AuthLayoutRegistrationCompanyImport
      parentRoute: typeof AuthLayoutRegistrationImport
    }
    '/_authLayout/registration/user': {
      id: '/_authLayout/registration/user'
      path: '/user'
      fullPath: '/registration/user'
      preLoaderRoute: typeof AuthLayoutRegistrationUserImport
      parentRoute: typeof AuthLayoutRegistrationImport
    }
    '/_authLayout/registration/validate': {
      id: '/_authLayout/registration/validate'
      path: '/validate'
      fullPath: '/registration/validate'
      preLoaderRoute: typeof AuthLayoutRegistrationValidateImport
      parentRoute: typeof AuthLayoutRegistrationImport
    }
    '/_authenticated/_dashboardLayout/_accountType': {
      id: '/_authenticated/_dashboardLayout/_accountType'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedDashboardLayoutAccountTypeImport
      parentRoute: typeof AuthenticatedDashboardLayoutImport
    }
    '/_authenticated/_dashboardLayout/faq': {
      id: '/_authenticated/_dashboardLayout/faq'
      path: '/faq'
      fullPath: '/faq'
      preLoaderRoute: typeof AuthenticatedDashboardLayoutFaqImport
      parentRoute: typeof AuthenticatedDashboardLayoutImport
    }
    '/_authenticated/_dashboardLayout/invoices': {
      id: '/_authenticated/_dashboardLayout/invoices'
      path: '/invoices'
      fullPath: '/invoices'
      preLoaderRoute: typeof AuthenticatedDashboardLayoutInvoicesImport
      parentRoute: typeof AuthenticatedDashboardLayoutImport
    }
    '/_authenticated/_dashboardLayout/notifications': {
      id: '/_authenticated/_dashboardLayout/notifications'
      path: '/notifications'
      fullPath: '/notifications'
      preLoaderRoute: typeof AuthenticatedDashboardLayoutNotificationsImport
      parentRoute: typeof AuthenticatedDashboardLayoutImport
    }
    '/_authenticated/_dashboardLayout/about': {
      id: '/_authenticated/_dashboardLayout/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AuthenticatedDashboardLayoutAboutLazyImport
      parentRoute: typeof AuthenticatedDashboardLayoutImport
    }
    '/_authLayout/registration/': {
      id: '/_authLayout/registration/'
      path: '/'
      fullPath: '/registration/'
      preLoaderRoute: typeof AuthLayoutRegistrationIndexImport
      parentRoute: typeof AuthLayoutRegistrationImport
    }
    '/_authenticated/_dashboardLayout/buyOrder/$orderId': {
      id: '/_authenticated/_dashboardLayout/buyOrder/$orderId'
      path: '/buyOrder/$orderId'
      fullPath: '/buyOrder/$orderId'
      preLoaderRoute: typeof AuthenticatedDashboardLayoutBuyOrderOrderIdImport
      parentRoute: typeof AuthenticatedDashboardLayoutImport
    }
    '/_authenticated/_dashboardLayout/buyOrder/': {
      id: '/_authenticated/_dashboardLayout/buyOrder/'
      path: '/buyOrder'
      fullPath: '/buyOrder'
      preLoaderRoute: typeof AuthenticatedDashboardLayoutBuyOrderIndexImport
      parentRoute: typeof AuthenticatedDashboardLayoutImport
    }
    '/_authenticated/_dashboardLayout/_accountType/client/orders': {
      id: '/_authenticated/_dashboardLayout/_accountType/client/orders'
      path: '/client/orders'
      fullPath: '/client/orders'
      preLoaderRoute: typeof AuthenticatedDashboardLayoutAccountTypeClientOrdersImport
      parentRoute: typeof AuthenticatedDashboardLayoutAccountTypeImport
    }
    '/_authenticated/_dashboardLayout/_accountType/provider/sellDetail': {
      id: '/_authenticated/_dashboardLayout/_accountType/provider/sellDetail'
      path: '/provider/sellDetail'
      fullPath: '/provider/sellDetail'
      preLoaderRoute: typeof AuthenticatedDashboardLayoutAccountTypeProviderSellDetailImport
      parentRoute: typeof AuthenticatedDashboardLayoutAccountTypeImport
    }
    '/_authenticated/_dashboardLayout/_accountType/provider/sells': {
      id: '/_authenticated/_dashboardLayout/_accountType/provider/sells'
      path: '/provider/sells'
      fullPath: '/provider/sells'
      preLoaderRoute: typeof AuthenticatedDashboardLayoutAccountTypeProviderSellsImport
      parentRoute: typeof AuthenticatedDashboardLayoutAccountTypeImport
    }
    '/_authenticated/_dashboardLayout/_accountType/client/dashboard': {
      id: '/_authenticated/_dashboardLayout/_accountType/client/dashboard'
      path: '/client/dashboard'
      fullPath: '/client/dashboard'
      preLoaderRoute: typeof AuthenticatedDashboardLayoutAccountTypeClientDashboardLazyImport
      parentRoute: typeof AuthenticatedDashboardLayoutAccountTypeImport
    }
    '/_authenticated/_dashboardLayout/_accountType/provider/dashboard': {
      id: '/_authenticated/_dashboardLayout/_accountType/provider/dashboard'
      path: '/provider/dashboard'
      fullPath: '/provider/dashboard'
      preLoaderRoute: typeof AuthenticatedDashboardLayoutAccountTypeProviderDashboardLazyImport
      parentRoute: typeof AuthenticatedDashboardLayoutAccountTypeImport
    }
    '/_authenticated/_dashboardLayout/_accountType/client/lists/blackList': {
      id: '/_authenticated/_dashboardLayout/_accountType/client/lists/blackList'
      path: '/client/lists/blackList'
      fullPath: '/client/lists/blackList'
      preLoaderRoute: typeof AuthenticatedDashboardLayoutAccountTypeClientListsBlackListImport
      parentRoute: typeof AuthenticatedDashboardLayoutAccountTypeImport
    }
    '/_authenticated/_dashboardLayout/_accountType/client/lists/favorites': {
      id: '/_authenticated/_dashboardLayout/_accountType/client/lists/favorites'
      path: '/client/lists/favorites'
      fullPath: '/client/lists/favorites'
      preLoaderRoute: typeof AuthenticatedDashboardLayoutAccountTypeClientListsFavoritesImport
      parentRoute: typeof AuthenticatedDashboardLayoutAccountTypeImport
    }
    '/_authenticated/_dashboardLayout/_accountType/client/proOrders/$preOrderId': {
      id: '/_authenticated/_dashboardLayout/_accountType/client/proOrders/$preOrderId'
      path: '/client/proOrders/$preOrderId'
      fullPath: '/client/proOrders/$preOrderId'
      preLoaderRoute: typeof AuthenticatedDashboardLayoutAccountTypeClientProOrdersPreOrderIdImport
      parentRoute: typeof AuthenticatedDashboardLayoutAccountTypeImport
    }
    '/_authenticated/_dashboardLayout/_accountType/provider/proOrders/$preOrderId': {
      id: '/_authenticated/_dashboardLayout/_accountType/provider/proOrders/$preOrderId'
      path: '/provider/proOrders/$preOrderId'
      fullPath: '/provider/proOrders/$preOrderId'
      preLoaderRoute: typeof AuthenticatedDashboardLayoutAccountTypeProviderProOrdersPreOrderIdImport
      parentRoute: typeof AuthenticatedDashboardLayoutAccountTypeImport
    }
    '/_authenticated/_dashboardLayout/_accountType/provider/products/$productId': {
      id: '/_authenticated/_dashboardLayout/_accountType/provider/products/$productId'
      path: '/provider/products/$productId'
      fullPath: '/provider/products/$productId'
      preLoaderRoute: typeof AuthenticatedDashboardLayoutAccountTypeProviderProductsProductIdImport
      parentRoute: typeof AuthenticatedDashboardLayoutAccountTypeImport
    }
    '/_authenticated/_dashboardLayout/_accountType/provider/products/newProducts': {
      id: '/_authenticated/_dashboardLayout/_accountType/provider/products/newProducts'
      path: '/provider/products/newProducts'
      fullPath: '/provider/products/newProducts'
      preLoaderRoute: typeof AuthenticatedDashboardLayoutAccountTypeProviderProductsNewProductsImport
      parentRoute: typeof AuthenticatedDashboardLayoutAccountTypeImport
    }
    '/_authenticated/_dashboardLayout/_accountType/client/configuration/': {
      id: '/_authenticated/_dashboardLayout/_accountType/client/configuration/'
      path: '/client/configuration'
      fullPath: '/client/configuration'
      preLoaderRoute: typeof AuthenticatedDashboardLayoutAccountTypeClientConfigurationIndexImport
      parentRoute: typeof AuthenticatedDashboardLayoutAccountTypeImport
    }
    '/_authenticated/_dashboardLayout/_accountType/client/lists/': {
      id: '/_authenticated/_dashboardLayout/_accountType/client/lists/'
      path: '/client/lists'
      fullPath: '/client/lists'
      preLoaderRoute: typeof AuthenticatedDashboardLayoutAccountTypeClientListsIndexImport
      parentRoute: typeof AuthenticatedDashboardLayoutAccountTypeImport
    }
    '/_authenticated/_dashboardLayout/_accountType/client/proOrders/': {
      id: '/_authenticated/_dashboardLayout/_accountType/client/proOrders/'
      path: '/client/proOrders'
      fullPath: '/client/proOrders'
      preLoaderRoute: typeof AuthenticatedDashboardLayoutAccountTypeClientProOrdersIndexImport
      parentRoute: typeof AuthenticatedDashboardLayoutAccountTypeImport
    }
    '/_authenticated/_dashboardLayout/_accountType/provider/configuration/': {
      id: '/_authenticated/_dashboardLayout/_accountType/provider/configuration/'
      path: '/provider/configuration'
      fullPath: '/provider/configuration'
      preLoaderRoute: typeof AuthenticatedDashboardLayoutAccountTypeProviderConfigurationIndexImport
      parentRoute: typeof AuthenticatedDashboardLayoutAccountTypeImport
    }
    '/_authenticated/_dashboardLayout/_accountType/provider/proOrders/': {
      id: '/_authenticated/_dashboardLayout/_accountType/provider/proOrders/'
      path: '/provider/proOrders'
      fullPath: '/provider/proOrders'
      preLoaderRoute: typeof AuthenticatedDashboardLayoutAccountTypeProviderProOrdersIndexImport
      parentRoute: typeof AuthenticatedDashboardLayoutAccountTypeImport
    }
    '/_authenticated/_dashboardLayout/_accountType/provider/products/': {
      id: '/_authenticated/_dashboardLayout/_accountType/provider/products/'
      path: '/provider/products'
      fullPath: '/provider/products'
      preLoaderRoute: typeof AuthenticatedDashboardLayoutAccountTypeProviderProductsIndexImport
      parentRoute: typeof AuthenticatedDashboardLayoutAccountTypeImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AuthLayoutRoute: AuthLayoutRoute.addChildren({
    AuthLayoutForgotPasswordRoute,
    AuthLayoutLoginRoute,
    AuthLayoutPasswordResetRoute,
    AuthLayoutRegistrationRoute: AuthLayoutRegistrationRoute.addChildren({
      AuthLayoutRegistrationCompanyRoute,
      AuthLayoutRegistrationUserRoute,
      AuthLayoutRegistrationValidateRoute,
      AuthLayoutRegistrationIndexRoute,
    }),
  }),
  AuthenticatedRoute: AuthenticatedRoute.addChildren({
    AuthenticatedDashboardLayoutRoute:
      AuthenticatedDashboardLayoutRoute.addChildren({
        AuthenticatedDashboardLayoutAccountTypeRoute:
          AuthenticatedDashboardLayoutAccountTypeRoute.addChildren({
            AuthenticatedDashboardLayoutAccountTypeClientOrdersRoute,
            AuthenticatedDashboardLayoutAccountTypeProviderSellDetailRoute,
            AuthenticatedDashboardLayoutAccountTypeProviderSellsRoute,
            AuthenticatedDashboardLayoutAccountTypeClientDashboardLazyRoute,
            AuthenticatedDashboardLayoutAccountTypeProviderDashboardLazyRoute,
            AuthenticatedDashboardLayoutAccountTypeClientListsBlackListRoute,
            AuthenticatedDashboardLayoutAccountTypeClientListsFavoritesRoute,
            AuthenticatedDashboardLayoutAccountTypeClientProOrdersPreOrderIdRoute,
            AuthenticatedDashboardLayoutAccountTypeProviderProOrdersPreOrderIdRoute,
            AuthenticatedDashboardLayoutAccountTypeProviderProductsProductIdRoute,
            AuthenticatedDashboardLayoutAccountTypeProviderProductsNewProductsRoute,
            AuthenticatedDashboardLayoutAccountTypeClientConfigurationIndexRoute,
            AuthenticatedDashboardLayoutAccountTypeClientListsIndexRoute,
            AuthenticatedDashboardLayoutAccountTypeClientProOrdersIndexRoute,
            AuthenticatedDashboardLayoutAccountTypeProviderConfigurationIndexRoute,
            AuthenticatedDashboardLayoutAccountTypeProviderProOrdersIndexRoute,
            AuthenticatedDashboardLayoutAccountTypeProviderProductsIndexRoute,
          }),
        AuthenticatedDashboardLayoutFaqRoute,
        AuthenticatedDashboardLayoutInvoicesRoute,
        AuthenticatedDashboardLayoutNotificationsRoute,
        AuthenticatedDashboardLayoutAboutLazyRoute,
        AuthenticatedDashboardLayoutBuyOrderOrderIdRoute,
        AuthenticatedDashboardLayoutBuyOrderIndexRoute,
      }),
  }),
  FaqRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_authLayout",
        "/_authenticated",
        "/faq"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_authLayout": {
      "filePath": "_authLayout.tsx",
      "children": [
        "/_authLayout/forgotPassword",
        "/_authLayout/login",
        "/_authLayout/passwordReset",
        "/_authLayout/registration"
      ]
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/_dashboardLayout"
      ]
    },
    "/faq": {
      "filePath": "faq.tsx"
    },
    "/_authLayout/forgotPassword": {
      "filePath": "_authLayout/forgotPassword.tsx",
      "parent": "/_authLayout"
    },
    "/_authLayout/login": {
      "filePath": "_authLayout/login.tsx",
      "parent": "/_authLayout"
    },
    "/_authLayout/passwordReset": {
      "filePath": "_authLayout/passwordReset.tsx",
      "parent": "/_authLayout"
    },
    "/_authLayout/registration": {
      "filePath": "_authLayout/registration.tsx",
      "parent": "/_authLayout",
      "children": [
        "/_authLayout/registration/company",
        "/_authLayout/registration/user",
        "/_authLayout/registration/validate",
        "/_authLayout/registration/"
      ]
    },
    "/_authenticated/_dashboardLayout": {
      "filePath": "_authenticated/_dashboardLayout.tsx",
      "parent": "/_authenticated",
      "children": [
        "/_authenticated/_dashboardLayout/_accountType",
        "/_authenticated/_dashboardLayout/faq",
        "/_authenticated/_dashboardLayout/invoices",
        "/_authenticated/_dashboardLayout/notifications",
        "/_authenticated/_dashboardLayout/about",
        "/_authenticated/_dashboardLayout/buyOrder/$orderId",
        "/_authenticated/_dashboardLayout/buyOrder/"
      ]
    },
    "/_authLayout/registration/company": {
      "filePath": "_authLayout/registration/company.tsx",
      "parent": "/_authLayout/registration"
    },
    "/_authLayout/registration/user": {
      "filePath": "_authLayout/registration/user.tsx",
      "parent": "/_authLayout/registration"
    },
    "/_authLayout/registration/validate": {
      "filePath": "_authLayout/registration/validate.tsx",
      "parent": "/_authLayout/registration"
    },
    "/_authenticated/_dashboardLayout/_accountType": {
      "filePath": "_authenticated/_dashboardLayout/_accountType.tsx",
      "parent": "/_authenticated/_dashboardLayout",
      "children": [
        "/_authenticated/_dashboardLayout/_accountType/client/orders",
        "/_authenticated/_dashboardLayout/_accountType/provider/sellDetail",
        "/_authenticated/_dashboardLayout/_accountType/provider/sells",
        "/_authenticated/_dashboardLayout/_accountType/client/dashboard",
        "/_authenticated/_dashboardLayout/_accountType/provider/dashboard",
        "/_authenticated/_dashboardLayout/_accountType/client/lists/blackList",
        "/_authenticated/_dashboardLayout/_accountType/client/lists/favorites",
        "/_authenticated/_dashboardLayout/_accountType/client/proOrders/$preOrderId",
        "/_authenticated/_dashboardLayout/_accountType/provider/proOrders/$preOrderId",
        "/_authenticated/_dashboardLayout/_accountType/provider/products/$productId",
        "/_authenticated/_dashboardLayout/_accountType/provider/products/newProducts",
        "/_authenticated/_dashboardLayout/_accountType/client/configuration/",
        "/_authenticated/_dashboardLayout/_accountType/client/lists/",
        "/_authenticated/_dashboardLayout/_accountType/client/proOrders/",
        "/_authenticated/_dashboardLayout/_accountType/provider/configuration/",
        "/_authenticated/_dashboardLayout/_accountType/provider/proOrders/",
        "/_authenticated/_dashboardLayout/_accountType/provider/products/"
      ]
    },
    "/_authenticated/_dashboardLayout/faq": {
      "filePath": "_authenticated/_dashboardLayout/faq.tsx",
      "parent": "/_authenticated/_dashboardLayout"
    },
    "/_authenticated/_dashboardLayout/invoices": {
      "filePath": "_authenticated/_dashboardLayout/invoices.tsx",
      "parent": "/_authenticated/_dashboardLayout"
    },
    "/_authenticated/_dashboardLayout/notifications": {
      "filePath": "_authenticated/_dashboardLayout/notifications.tsx",
      "parent": "/_authenticated/_dashboardLayout"
    },
    "/_authenticated/_dashboardLayout/about": {
      "filePath": "_authenticated/_dashboardLayout/about.lazy.tsx",
      "parent": "/_authenticated/_dashboardLayout"
    },
    "/_authLayout/registration/": {
      "filePath": "_authLayout/registration/index.tsx",
      "parent": "/_authLayout/registration"
    },
    "/_authenticated/_dashboardLayout/buyOrder/$orderId": {
      "filePath": "_authenticated/_dashboardLayout/buyOrder/$orderId.tsx",
      "parent": "/_authenticated/_dashboardLayout"
    },
    "/_authenticated/_dashboardLayout/buyOrder/": {
      "filePath": "_authenticated/_dashboardLayout/buyOrder/index.tsx",
      "parent": "/_authenticated/_dashboardLayout"
    },
    "/_authenticated/_dashboardLayout/_accountType/client/orders": {
      "filePath": "_authenticated/_dashboardLayout/_accountType/client/orders.tsx",
      "parent": "/_authenticated/_dashboardLayout/_accountType"
    },
    "/_authenticated/_dashboardLayout/_accountType/provider/sellDetail": {
      "filePath": "_authenticated/_dashboardLayout/_accountType/provider/sellDetail.tsx",
      "parent": "/_authenticated/_dashboardLayout/_accountType"
    },
    "/_authenticated/_dashboardLayout/_accountType/provider/sells": {
      "filePath": "_authenticated/_dashboardLayout/_accountType/provider/sells.tsx",
      "parent": "/_authenticated/_dashboardLayout/_accountType"
    },
    "/_authenticated/_dashboardLayout/_accountType/client/dashboard": {
      "filePath": "_authenticated/_dashboardLayout/_accountType/client/dashboard.lazy.tsx",
      "parent": "/_authenticated/_dashboardLayout/_accountType"
    },
    "/_authenticated/_dashboardLayout/_accountType/provider/dashboard": {
      "filePath": "_authenticated/_dashboardLayout/_accountType/provider/dashboard.lazy.tsx",
      "parent": "/_authenticated/_dashboardLayout/_accountType"
    },
    "/_authenticated/_dashboardLayout/_accountType/client/lists/blackList": {
      "filePath": "_authenticated/_dashboardLayout/_accountType/client/lists/blackList.tsx",
      "parent": "/_authenticated/_dashboardLayout/_accountType"
    },
    "/_authenticated/_dashboardLayout/_accountType/client/lists/favorites": {
      "filePath": "_authenticated/_dashboardLayout/_accountType/client/lists/favorites.tsx",
      "parent": "/_authenticated/_dashboardLayout/_accountType"
    },
    "/_authenticated/_dashboardLayout/_accountType/client/proOrders/$preOrderId": {
      "filePath": "_authenticated/_dashboardLayout/_accountType/client/proOrders/$preOrderId.tsx",
      "parent": "/_authenticated/_dashboardLayout/_accountType"
    },
    "/_authenticated/_dashboardLayout/_accountType/provider/proOrders/$preOrderId": {
      "filePath": "_authenticated/_dashboardLayout/_accountType/provider/proOrders/$preOrderId.tsx",
      "parent": "/_authenticated/_dashboardLayout/_accountType"
    },
    "/_authenticated/_dashboardLayout/_accountType/provider/products/$productId": {
      "filePath": "_authenticated/_dashboardLayout/_accountType/provider/products/$productId.tsx",
      "parent": "/_authenticated/_dashboardLayout/_accountType"
    },
    "/_authenticated/_dashboardLayout/_accountType/provider/products/newProducts": {
      "filePath": "_authenticated/_dashboardLayout/_accountType/provider/products/newProducts.tsx",
      "parent": "/_authenticated/_dashboardLayout/_accountType"
    },
    "/_authenticated/_dashboardLayout/_accountType/client/configuration/": {
      "filePath": "_authenticated/_dashboardLayout/_accountType/client/configuration/index.tsx",
      "parent": "/_authenticated/_dashboardLayout/_accountType"
    },
    "/_authenticated/_dashboardLayout/_accountType/client/lists/": {
      "filePath": "_authenticated/_dashboardLayout/_accountType/client/lists/index.tsx",
      "parent": "/_authenticated/_dashboardLayout/_accountType"
    },
    "/_authenticated/_dashboardLayout/_accountType/client/proOrders/": {
      "filePath": "_authenticated/_dashboardLayout/_accountType/client/proOrders/index.tsx",
      "parent": "/_authenticated/_dashboardLayout/_accountType"
    },
    "/_authenticated/_dashboardLayout/_accountType/provider/configuration/": {
      "filePath": "_authenticated/_dashboardLayout/_accountType/provider/configuration/index.tsx",
      "parent": "/_authenticated/_dashboardLayout/_accountType"
    },
    "/_authenticated/_dashboardLayout/_accountType/provider/proOrders/": {
      "filePath": "_authenticated/_dashboardLayout/_accountType/provider/proOrders/index.tsx",
      "parent": "/_authenticated/_dashboardLayout/_accountType"
    },
    "/_authenticated/_dashboardLayout/_accountType/provider/products/": {
      "filePath": "_authenticated/_dashboardLayout/_accountType/provider/products/index.tsx",
      "parent": "/_authenticated/_dashboardLayout/_accountType"
    }
  }
}
ROUTE_MANIFEST_END */
