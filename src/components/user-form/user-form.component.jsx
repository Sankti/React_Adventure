import React from 'react';

const UserForm = () => (
    <form className='user-form'>
        Dodatkowe tagi: <input type="text"></input><br />
        Wybierz, jakie wyszukiwarki uwzględnić w zapytaniu:<br />
        <input type="checkbox" onClick={console.log("Test successful")} /> Gumtree<br />
        <input type="checkbox" /> OLX<br />
        <input type="checkbox" /> Otodom
    </form>
);

export default UserForm;