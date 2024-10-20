import { useState } from "react";
import Sample from "../../../components/Sample";
import Dropdown from "../../../../components/Dropdown";
import useUsersRequest from "../hooks/useUsersRequest";

const CODE_SAMPLE = `
const UsersDropdownSample = () => {
  const { result, loading} = useUsersRequest();

  const [user, setUser] = useState();

  const users = result.map(user => ({
    id: user.id,
    value: \`\${ user.name } - \${ user.username } (\${ user.email })\`
  }))

  return (
    <div>
      <section>
        {loading && <p>Loading users...</p> }
        <Dropdown
          placeholder="Select a user..."
          values={users}
          valueChange={setUser}
        />
      </section>
      <section>
        The selected user is: <strong>{user || 'No selected user'}</strong>
      </section>
    </div>
  );
}
`

const UsersDropdownSample = () => {
  const { result, loading } = useUsersRequest();

  const [user, setUser] = useState();

  const users = result.map(user => ({
    id: user.id,
    value: `${user.name} - ${user.username} (${user.email})`
  }))

  return (
    <Sample
      code={CODE_SAMPLE}
      description={
        <>
          <p>The <code>Dropdown</code> component expects an array of objects in <code>values</code> prop.</p>
          <p>By default, each object has to contain an <code>id</code> property to identify the selection and the <code>value</code> property to be shown.</p>
        </>
      }
    >
      <section>
        {loading && <p>Loading users...</p>}
        <Dropdown
          placeholder="Select a user..."
          values={users}
          valueChange={setUser}
        />
      </section>
      <section>
        The selected user is: <strong>{user || 'No selected user'}</strong>
      </section>
    </Sample>
  );
}

export default UsersDropdownSample;