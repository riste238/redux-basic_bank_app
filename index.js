let tbody = document.querySelector('tbody');
let btnAccounts = document.querySelector('#accounts');
let btnAddAccounts = document.querySelector('#add-accounts');
let accountsView = document.querySelector('#accountsView');
let addAccountsView = document.querySelector('#addAccountsView');
let saveAccountBtn = document.querySelector('#saveAccountBtn');


window.addEventListener('load',function(){
    store.dispatch(start);
});

store.subscribe(function(){
    displayAccounts();
    changeView();

})

function displayAccounts(){
    let accounts = store.getState().accounts;
    let text = '';
    for (let i = 0; i < accounts.length; i++) {
       let account = accounts[i];
       text += `
        <tr>
        <td>${account.id}</td>
        <td>${account.name}</td>
        <td>${account.phone}</td>
        <td>${account.email}</td>
        </tr>
       `
        
    }
    tbody.innerHTML = text;
}

btnAddAccounts.addEventListener('click',function(){
    store.dispatch(newAccount); 
})

btnAccounts.addEventListener('click',function(){
 store.dispatch(displayAccountsAction);
})

saveAccountBtn.addEventListener('click',function(){
    store.dispatch(saveAccount({
        id: document.querySelector('[placeholder="id"]').value, 
        name: document.querySelector('[placeholder="name"]').value, 
        phone: document.querySelector('[placeholder="phone"]').value, 
        email: document.querySelector('[placeholder="email"]').value
    }));
    store.dispatch(displayAccountsAction);
})

function changeView(){
   let view = store.getState().display;
    if(view == 1){
        accountsView.style.display = 'block';
        addAccountsView.style.display = 'none';
    }
    else {
        accountsView.style.display = 'none';
        addAccountsView.style.display = 'block';
    }
}