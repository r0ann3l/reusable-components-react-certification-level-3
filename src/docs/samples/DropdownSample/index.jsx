import ComponentSamples from "../../components/ComponentSamples";
import PostsDropdownSample from "./samples/PostsDropdownSample";
import UsersDropdownSample from "./samples/UsersDropdownSample";

const DropdownSample = () => {
  return (
    <ComponentSamples
      title='Generic auto-filter dropdown'
      description={"Component that helps users quickly find items from a list by typing a few characters. It's useful for things like searching for products, countries or selecting from a dropdown."}
    >
      <UsersDropdownSample />
      <PostsDropdownSample />
    </ComponentSamples>
  );
}

export default DropdownSample;