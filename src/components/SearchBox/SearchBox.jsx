import PropTypes from 'prop-types';
import { Form, Input, Button } from './SearchBox.styled';

export const SearchBox = ({ onChange, onSubmit, query }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input type="text"
        onChange={onChange}
      defaultValue={query}/>

      <Button type="submit">Search</Button>
    </Form>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};