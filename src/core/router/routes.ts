export const routePrefixes = {
    accountList: '/account-list',
    transfer: '/transfer',
    movements: '/movements'
}

export const appRoutes = {
    root: '/',
    accountList: routePrefixes.accountList,
    editAccount: '/edit-account/:id',
    movements: '/movements/:id',
    movementsNoId: '/movements',
    transfer: routePrefixes.transfer,
    transferFromAccount: `${routePrefixes.transfer}/:id`,
    createAccount: '/create-account'
}