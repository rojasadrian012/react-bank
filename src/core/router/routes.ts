export const routePrefixes = {
    accountList: '/account-list',
    transfer: '/transfer'
}

export const appRoutes = {
    root: '/',
    accountList: routePrefixes.accountList,
    editAccount: '/edit-account/:id',
    movements: '/movements/:id',
    transfer: routePrefixes.transfer,
    transferFromAccount: `${routePrefixes.transfer}/:id`
}