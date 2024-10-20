import { useState } from "react";
import Sample from "../../../components/Sample";
import Dropdown from "../../../../components/Dropdown";
import usePostsRequest from "../hooks/usePostsRequest";

const CODE_SAMPLE = `
const PostsDropdownSample = () => {
  const { result, loading } = usePostsRequest();

  const [post, setPost] = useState();

  return (
    <div>
      <section>
        {loading && <p>Loading posts...</p>}
        <Dropdown
          placeholder="Select a post..."
          values={result}
          valueChange={setPost}
          labelProperty="title"
          limit={10}
        />
      </section>
      <section>
        The selected post is: <strong>{post || 'No selected post'}</strong>
      </section>
    </div>
  );
}
`

const PostsDropdownSample = () => {
  const { result, loading } = usePostsRequest();

  const [post, setPost] = useState();

  return (
    <Sample
      code={CODE_SAMPLE}
      description={
        <>
          <p>
            In this example, we're using an API to get fake posts.
            By setting <code>labelProperty="title"</code>, it is possible to show the title of the post without mapping the reponse.
          </p>
          <p>Also, it is possible to limit the amount of items shown in the list of options, with the prop <code>limit</code>. By default is <code>50</code>.</p>
        </>
      }
    >
      <section>
        {loading && <p>Loading posts...</p>}
        <Dropdown
          placeholder="Select a post..."
          values={result}
          valueChange={setPost}
          labelProperty="title"
          limit={10}
        />
      </section>
      <section>
        The selected post is: <strong>{post || 'No selected post'}</strong>
      </section>
    </Sample>
  );
}

export default PostsDropdownSample;