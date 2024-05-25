import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";
import ErrorModal from "./components/ErrorModal";

import { useState } from "react";

function App() {
    const [users, setUsers] = useState([]);
    const [errorMsg, setErrorMsg] = useState();

    function addUsersHandler(user) {
        setUsers((prevUsers) => {
            // the below situated if-else block set the user.id if not already set
            // or it increments the id, based on the id of the last user.
            // at() method allows you to access elements from the end of the array directly
            user.id = prevUsers.length ? prevUsers.at(-1).id + 1 : 1;
            return [...prevUsers, user];
        });
    }

    return (
        <>
            <AddUser
                onAddUserClick={addUsersHandler}
                onErrorModal={(errorObject) => setErrorMsg(errorObject)}
            />
            <UsersList users={users} />
            {errorMsg && (
                <ErrorModal
                    title={errorMsg.title}
                    content={errorMsg.message}
                    onClickOkay={() => setErrorMsg(null)}
                />
            )}
        </>
    );
}

export default App;
