import { DeleteButton } from '../App.styled';

export const ContactList = ({ options, onDelete }) => {
  return (
    <div>
      <ul>
        {options.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <DeleteButton onClick={() => onDelete(id)}>Delete</DeleteButton>
          </li>
        ))}
      </ul>
    </div>
  );
};
